import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, Center, Html, useProgress } from "@react-three/drei";

const DEFAULT_MODEL = "/Modal/carModel.glb";

/** In-canvas loader shown while the GLTF + environment stream in. */
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

function Model({ modelPath, scale }) {
  const { scene } = useGLTF(modelPath);
  return (
    <Center>
      <primitive object={scene} scale={scale} />
    </Center>
  );
}

/**
 * Reusable interactive 3D product canvas.
 * - Click/touch drag to rotate, wheel/pinch to zoom (OrbitControls).
 * - `controlsRef` lets a parent drive zoom / reset.
 * - `dpr={[1, 2]}` caps device pixel ratio for smooth rendering on mobile.
 */
export default function Product3DCanvas({
  modelPath = DEFAULT_MODEL,
  autoRotate = true,
  scale = 0.1,
  controlsRef,
}) {
  return (
    <Canvas
      camera={{ position: [0, 2, 40], fov: 75 }}
      dpr={[1, 2]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      frameloop="always"
    >
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={2} />

      <Suspense fallback={<CanvasLoader />}>
        <Model modelPath={modelPath} scale={scale} />
        <Environment preset="city" />
      </Suspense>

      <OrbitControls
        ref={controlsRef}
        enableZoom
        enablePan={false}
        enableDamping
        autoRotate={autoRotate}
        autoRotateSpeed={1.6}
        minDistance={5}
        maxDistance={100}
      />
    </Canvas>
  );
}

useGLTF.preload(DEFAULT_MODEL);
