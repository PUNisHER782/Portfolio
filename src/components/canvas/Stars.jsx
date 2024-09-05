import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Galaxy = (props) => {
  const ref = useRef();
  const [galaxy] = useState(() => {
    const galaxyData = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const radius = Math.random() * 3 + 0.5; // adjust radius range
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const distortion = Math.random() * 0.1 - 0.05; // add some distortion
      galaxyData[i * 3] = radius * Math.sin(phi) * Math.cos(theta) + distortion;
      galaxyData[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) + distortion;
      galaxyData[i * 3 + 2] = radius * Math.cos(phi) + distortion;
    }
    return galaxyData;
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    ref.current.rotation.z -= delta / 20; // add some z-axis rotation
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={galaxy} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={Math.random() < 0.5 ? '#f272c8' : '#8bc34a'} // randomize color
          size={Math.random() * 0.005 + 0.001} // randomize size
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const GalaxyCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Galaxy />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default GalaxyCanvas;