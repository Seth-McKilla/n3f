import {
  Html,
  OrbitControls,
  PivotControls,
  TransformControls,
} from "@react-three/drei";
import { useRef } from "react";

import styles from "@/styles/Experience.module.css";

export default function Experience() {
  const cube = useRef<THREE.Mesh>(null);
  const sphere = useRef<THREE.Mesh>(null);

  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={4}
        axisColors={["#9381ff", "#ff4d6d", "#7ae582"]}
        scale={100}
        fixed={true}
      >
        <mesh ref={sphere} position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
          <Html
            wrapperClass={styles.label}
            position={[1, 1, 0]}
            center
            distanceFactor={6}
          >
            {"That's a sphere 👍"}
          </Html>
        </mesh>
      </PivotControls>

      <mesh ref={cube} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      {/* @ts-ignore */}
      <TransformControls object={cube} />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
