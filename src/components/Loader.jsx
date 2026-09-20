import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-white text-lg font-mono">
        {progress.toFixed(0)}% loaded
      </div>
    </Html>
  );
}