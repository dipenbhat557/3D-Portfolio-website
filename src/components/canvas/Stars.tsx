import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

// Stars component to render the star field
const Stars = (props: any) => {
  const ref = useRef<THREE.Points>(null); // Explicitly typing ref

  // Generate random star positions within a sphere
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  // Use the 'useFrame' hook to animate the star field
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10; // Rotate stars along the X-axis
      ref.current.rotation.y -= delta / 15; // Rotate stars along the Y-axis
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Render points for the stars */}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        {/* Define the material for the stars */}
        <PointMaterial
          transparent // Enable transparency
          color="#f272c8" // Set the color of the stars
          size={0.002} // Set the size of the stars
          sizeAttenuation={true} // Enable size attenuation
          depthWrite={false} // Disable depth writing for proper rendering
        />
      </Points>
    </group>
  );
};

// StarsCanvas component to create the 3D canvas with the star field
const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      {/* Create a 3D canvas using the 'Canvas' component from '@react-three/fiber' */}
      <Canvas camera={{ position: [0, 0, 1] }}>
        {/* Provide a loading fallback using 'Suspense' */}
        <Suspense fallback={null}>
          {/* Render the Stars component within the 3D scene */}
          <Stars />
        </Suspense>

        {/* Preload assets for smoother loading */}
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
