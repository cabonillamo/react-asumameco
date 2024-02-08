import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Earth from "../../../../public/landing-world/Earth";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import "./CoverEarth.css";

function CoverEarth() {
  return (
    <>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
        <Environment preset="sunset" />
        {/* <ContactShadows
          position={[0, -2, 0]}
          opacity={0.5}
          scale={50}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        /> */}
      </Canvas>
    </>
  );
}

export default CoverEarth;
