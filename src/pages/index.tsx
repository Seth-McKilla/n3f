import { Canvas } from "@react-three/fiber";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Canvas>
        <mesh>
          <torusKnotGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}
