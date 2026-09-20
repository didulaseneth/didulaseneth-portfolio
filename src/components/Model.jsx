import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { viewport } = useThree();

  // Point to the actual model in /public/model/robot-model.glb
  const { scene } = useGLTF("/model/robot-model.glb");

  useFrame((state) => {
    if (!group.current) return;

    // Slow auto-rotation
    group.current.rotation.y += 0.003;

    // Subtle mouse-follow (parallax tilt)
    const x = (state.mouse.x * viewport.width) / 50;
    const y = (state.mouse.y * viewport.height) / 50;
    group.current.rotation.x = y * 0.15;
    group.current.rotation.z = -x * 0.05;
  });

  return (
    <group ref={group} {...props}>
      <primitive object={scene} />
    </group>
  );
}

// Preload for smoother first paint
useGLTF.preload("/model/robot-model.glb");