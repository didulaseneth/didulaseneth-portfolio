import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./Model";
import Loader from "./Loader";

export default function Scene() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true }}
      >
        {/* Lighting setup for realistic, non-flat shading */}
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2}
          castShadow
        />
        <directionalLight position={[-5, -3, -5]} intensity={0.3} />

        {/* Environment map gives models realistic reflections/highlights */}
        <Environment preset="city" />

        <Suspense fallback={<Loader />}>
          {/* 👇 This is where your model renders — position/scale it here */}
          <Model position={[0, 0, 0]} scale={1.5} />
        </Suspense>
      </Canvas>
    </div>
  );
}