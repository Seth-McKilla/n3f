import { Canvas } from "@react-three/fiber";

import Experience from "@/components/Experience";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [3, 2, 6],
        }}
      >
        <Experience />
      </Canvas>
    </div>
  );
}
