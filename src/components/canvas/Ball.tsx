import  { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

// Ball component that represents a 3D floating ball with a decal
const Ball = (props:any) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* Ambient light */}
      <ambientLight intensity={0.25} />
      {/* Directional light */}
      <directionalLight position={[0, 0, 0.05]} />

      {/* 3D ball mesh */}
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />

        {/* Decal on the ball */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

// BallCanvas component that wraps the 3D ball in a canvas
const BallCanvas = ({ icon }:{icon:any}) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        {/* Enable camera controls */}
        <OrbitControls enableZoom={false} />
        {/* Render the Ball component with the specified icon */}
        <Ball imgUrl={icon} />
      </Suspense>
      {/* Preload 3D assets */}
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
