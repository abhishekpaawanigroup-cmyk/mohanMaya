import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  Center,
} from "@react-three/drei";

import { Plus, Minus, RotateCcw, X } from "lucide-react";

function Model() {
  const { scene } = useGLTF("/Modal/carModel.glb");

  return (
    <Center>
      <primitive object={scene} scale={0.1} />
    </Center>
  );
}

export default function ProductModal({ onClose }) {
  const controlsRef = useRef();

  const zoomIn = () => {
    if (!controlsRef.current) return;

    const camera = controlsRef.current.object;
    camera.position.z = Math.max(camera.position.z - 3, 5);
    controlsRef.current.update();
  };

  const zoomOut = () => {
    if (!controlsRef.current) return;

    const camera = controlsRef.current.object;
    camera.position.z = Math.min(camera.position.z + 3, 100);
    controlsRef.current.update();
  };

  const resetView = () => {
    if (!controlsRef.current) return;

    const camera = controlsRef.current.object;

    camera.position.set(0, 2, 40);

    controlsRef.current.target.set(0, 0, 0);
    controlsRef.current.update();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      <div className="relative w-[90%] max-w-5xl h-[550px] bg-[#f0e0e3] rounded-xl overflow-hidden">
        
        {/* Controls */}
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          
          <button
            onClick={zoomIn}
            className="bg-transparent text-[#fe4462] border border-[#fe4462] p-2 rounded-full hover:text-[#fff] hover:bg-[#fe4462] transition-all duration-300 cursor-pointer"
          >
            <Plus size={18} />
          </button>

          <button
            onClick={zoomOut}
            className="bg-transparent text-[#fe4462] border border-[#fe4462] p-2 rounded-full hover:text-[#fff] hover:bg-[#fe4462] transition-all duration-300 cursor-pointer"
          >
            <Minus size={18} />
          </button>

          <button
            onClick={resetView}
            className="bg-transparent text-[#fe4462] border border-[#fe4462] p-2 rounded-full hover:text-[#fff] hover:bg-[#fe4462] transition-all duration-300 cursor-pointer"
          >
            <RotateCcw size={18} />
          </button>

          <button
            onClick={onClose}
            className="bg-[#fe4462] hover:bg-[#e30024] text-white p-2 rounded-lg ml-4"
          >
            <X size={18} />
          </button>
        </div>

        <Canvas camera={{ position: [0, 2, 40], fov: 75 }}>
          <ambientLight intensity={2} />
          <directionalLight position={[5, 5, 5]} intensity={2} />

          <Model />

          <Environment preset="city" />

          <OrbitControls
            ref={controlsRef}
            enableZoom={true}
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={1.5}
            minDistance={5}
            maxDistance={100}
          />
        </Canvas>
      </div>
    </div>
  );
}