import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  Center
} from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/Modal/carModel.glb");

  return (
    <Center>
      <primitive object={scene} scale={0.1} />
    </Center>
  );
}

export default function ProductModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      <div className="relative w-[95%] max-w-5xl h-[700px] bg-white rounded-3xl overflow-hidden">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          ✕
        </button>

        <Canvas camera={{ position: [0, 2, 40], fov: 75 }}>
          <ambientLight intensity={2} />
          <directionalLight position={[5, 5, 5]} />

          <Model />

          <Environment preset="city" />

          <OrbitControls
            enableZoom
            enablePan={false}
            autoRotate
            autoRotateSpeed={1.5}
          />
        </Canvas>
      </div>
    </div>
  );
}