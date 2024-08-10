import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// Earth component to render the 3D Earth model
const Earth = () => {
  // Load the Earth model using useGLTF from '@react-three/drei'
  const earth = useGLTF("./planet/scene.gltf");

  return (
    // Render the Earth model as a primitive in the scene
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

// EarthCanvas component to create the 3D canvas with the Earth model
const EarthCanvas = () => {
  return (
    // Create a 3D canvas using the 'Canvas' component from '@react-three/fiber'
    <Canvas
      shadows
      frameloop="demand" // Specify the frame loop as 'demand'
      dpr={[1, 2]} // Set device pixel ratio for improved resolution on high-DPI screens
      gl={{ preserveDrawingBuffer: true }} // Preserve the drawing buffer for taking screenshots
      camera={{
        fov: 45, // Field of view
        near: 0.1, // Near clipping plane
        far: 200, // Far clipping plane
        position: [-4, 3, 6], // Camera position in 3D space
      }}
    >
      {/* Provide a loading fallback using 'Suspense' */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Enable orbit controls for navigation */}
        <OrbitControls
          autoRotate // Enable auto-rotation of the camera
          enableZoom={false} // Disable zooming
          maxPolarAngle={Math.PI / 2} // Limit the maximum polar angle
          minPolarAngle={Math.PI / 2} // Limit the minimum polar angle
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
