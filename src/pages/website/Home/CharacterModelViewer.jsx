import { Suspense, useMemo, useState, Component } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  Center,
  Html,
  useProgress,
} from "@react-three/drei";
import * as THREE from "three";

// Reference (default) camera distance from the model.
const REF_DISTANCE = 40;
// Fraction of the smaller viewport dimension the model fills at REF_DISTANCE.
const FILL = 0.82;
// Shown whenever a character's own model is missing / fails to load.
const FALLBACK_MODEL = "/models/mm-modal.glb";

/** In-canvas loading indicator shown while the GLB streams in. */
function CanvasLoader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3 pointer-events-none">
        <div className="w-10 h-10 rounded-full border-4 border-[#fe4462]/30 border-t-[#fe4462] animate-spin" />
        <span className="text-xs font-medium text-gray-500 whitespace-nowrap">
          Loading 3D · {Math.round(progress)}%
        </span>
      </div>
    </Html>
  );
}

/**
 * Loads the GLB and auto-fits it responsively so it is always centered and
 * never cropped:
 *  - bounding-sphere radius (rotation-invariant → safe while the user rotates),
 *  - scaled to fill `fill` of the smaller visible viewport dimension at the
 *    reference distance, recomputed on every resize (desktop/tablet/mobile),
 *  - <Center>ed at the origin so the camera always frames it.
 */
function Model({ modelPath, fill }) {
  const { scene } = useGLTF(modelPath);
  const { size, camera } = useThree();

  // Clone per instance so reopening the popup (a fresh canvas) never "steals"
  // the cached source scene — it renders correctly every time.
  const object = useMemo(() => scene.clone(true), [scene]);

  const radius = useMemo(() => {
    const box = new THREE.Box3().setFromObject(object);
    return box.getBoundingSphere(new THREE.Sphere()).radius || 1;
  }, [object]);

  const scale = useMemo(() => {
    const fov = (camera.fov * Math.PI) / 180;
    const visibleHeight = 2 * REF_DISTANCE * Math.tan(fov / 2);
    const aspect = size.width / Math.max(1, size.height);
    const visibleWidth = visibleHeight * aspect;
    const minDim = Math.min(visibleHeight, visibleWidth);
    return (fill * minDim) / (2 * radius);
  }, [radius, size.width, size.height, camera.fov, fill]);

  return (
    <group scale={scale}>
      <Center>
        <primitive object={object} dispose={null} />
      </Center>
    </group>
  );
}

/**
 * Catches GLB load failures (missing file, bad data, network), logs the real
 * error to the console, and notifies the parent so it can swap in the fallback
 * model. Renders null while the parent re-renders with a fresh boundary.
 */
class ModelErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // Surface the actual loading error for debugging.
    console.error("[CharacterModelViewer] 3D model failed to load:", error, info);
    this.props.onError?.(error);
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

function ErrorFallback() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6 bg-gradient-to-br from-[#f4edee] to-white">
      <div className="w-12 h-12 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xl">
        !
      </div>
      <p className="text-base font-semibold text-gray-700">3D Model Not Available</p>
    </div>
  );
}

/** The actual canvas + scene for a given model path. */
function ModelCanvas({ modelPath, fill }) {
  return (
    <Canvas
      // Static model → render only on interaction/load, not a continuous loop.
      frameloop="demand"
      camera={{ position: [0, 0.5, REF_DISTANCE], fov: 45, near: 0.1, far: 1000 }}
      dpr={[1, 2]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
    >
      {/* Lighting — bright enough that any model is clearly visible */}
      <ambientLight intensity={1.2} />
      <hemisphereLight intensity={0.8} groundColor="#b58a8a" />
      <directionalLight position={[5, 8, 5]} intensity={2.2} />
      <directionalLight position={[-5, 3, -5]} intensity={0.8} />

      <Suspense fallback={<CanvasLoader />}>
        <Model modelPath={modelPath} fill={fill} />
        <Environment preset="city" />
      </Suspense>

      <OrbitControls
        makeDefault
        autoRotate={false}
        enableZoom
        enablePan
        enableDamping
        target={[0, 0, 0]}
        minDistance={14}
        maxDistance={70}
      />
    </Canvas>
  );
}

/**
 * Interactive character 3D viewer for the home hero popup.
 * - Manual rotate (drag), zoom (wheel/pinch) and pan via OrbitControls.
 * - No auto-rotation: the model stays static until the user interacts.
 * - If a character's own model fails to load, the mm-modal.glb fallback is
 *   rendered instead; only if that ALSO fails do we show the text fallback.
 * Fills its parent — size it via the parent container.
 */
export default function CharacterModelViewer({ modelPath, fill = FILL }) {
  // 0 = requested model, 1 = mm-modal fallback, 2 = give up (text fallback).
  const [stage, setStage] = useState(modelPath ? 0 : 1);

  if (stage >= 2) return <ErrorFallback />;

  const activeModel = stage === 0 ? modelPath : FALLBACK_MODEL;

  return (
    // `key` on the boundary remounts it cleanly when we escalate to the
    // fallback, resetting its error state so the new model can render.
    <ModelErrorBoundary key={activeModel} onError={() => setStage((s) => s + 1)}>
      <ModelCanvas modelPath={activeModel} fill={fill} />
    </ModelErrorBoundary>
  );
}

// Preload the fallback so it appears instantly when a character model is missing.
useGLTF.preload(FALLBACK_MODEL);
