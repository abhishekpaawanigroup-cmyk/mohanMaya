import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  ContactShadows,
  useGLTF,
  Center,
  Html,
  useProgress,
} from "@react-three/drei";
import * as THREE from "three";

const MODEL_PATH = "/Modal/mohan-maya2.glb";
// Target world size the model's largest dimension is normalised to. Keeps the
// framing/shadows consistent for any GLB and makes the model large & prominent.
const TARGET_SIZE = 2.6;

/** Lightweight in-canvas loader shown while the GLB streams in. */
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3 pointer-events-none">
        <div className="w-10 h-10 rounded-full border-4 border-[#fe4462]/30 border-t-[#fe4462] animate-spin" />
        <span className="text-xs font-medium text-white/70 whitespace-nowrap">
          Loading · {Math.round(progress)}%
        </span>
      </div>
    </Html>
  );
}

/**
 * Loads the GLB, normalises its size, enables shadow casting on every mesh and
 * spins it continuously about the Y axis via useFrame — frame-rate independent
 * (delta-based) so it stays smooth on any device, with no user interaction.
 */
function RotatingModel({ speed = 0.45 }) {
  const groupRef = useRef(null);
  const { scene } = useGLTF(MODEL_PATH);

  // Clone per instance so the cached source scene is never mutated/stolen.
  const object = useMemo(() => scene.clone(true), [scene]);

  // Normalise scale + find the base Y so contact shadows sit under the model.
  const { scale, bottomY } = useMemo(() => {
    object.traverse((c) => {
      if (c.isMesh) {
        c.castShadow = true;
        c.receiveShadow = true;
      }
    });
    const box = new THREE.Box3().setFromObject(object);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const s = TARGET_SIZE / maxDim;
    return { scale: s, bottomY: -(size.y * s) / 2 };
  }, [object]);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * speed;
  });

  return (
    <>
      <group ref={groupRef} scale={scale}>
        <Center>
          <primitive object={object} dispose={null} />
        </Center>
      </group>

      {/* Soft grounding shadow — works on a transparent canvas, no floor mesh. */}
      <ContactShadows
        position={[0, bottomY, 0]}
        scale={TARGET_SIZE * 2.6}
        opacity={0.5}
        blur={2.6}
        far={5}
        resolution={1024}
        color="#000000"
      />
    </>
  );
}

/**
 * Auto-rotating hero 3D model. Transparent background so it sits over the hero
 * artwork. Fills its parent — size it via the parent container.
 */
export default function Hero3DModel({ className = "" }) {
  return (
    <Canvas
      className={className}
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0.5, 4.4], fov: 42, near: 0.1, far: 100 }}
      gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
    >
      {/* Premium lighting rig */}
      <ambientLight intensity={0.9} />
      <hemisphereLight intensity={0.6} groundColor="#b58a8a" />
      <directionalLight
        castShadow
        position={[5, 9, 6]}
        intensity={2.4}
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0001}
      />
      <directionalLight position={[-6, 4, -5]} intensity={0.7} />

      <Suspense fallback={<Loader />}>
        <RotatingModel />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}

// Preload so the model is ready as soon as the hero mounts.
useGLTF.preload(MODEL_PATH);
