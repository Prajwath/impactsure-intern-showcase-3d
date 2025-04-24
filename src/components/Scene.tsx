
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import Loader from './Loader';

const Laptop = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        (state.mouse.x * Math.PI) / 10,
        0.05
      );
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        (state.mouse.y * Math.PI) / 10,
        0.05
      );
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]}>
        <boxGeometry args={[1, 0.05, 1]} />
        <meshStandardMaterial color="#333" />
        <mesh position={[0, 0.05, 0]}>
          <boxGeometry args={[0.95, 0.05, 0.75]} />
          <meshStandardMaterial color="#222" />
          <mesh position={[0, 0.05, 0]}>
            <boxGeometry args={[0.9, 0.01, 0.7]} />
            <meshStandardMaterial color="#0A0A0A" />
            <mesh position={[0, 0.01, 0]}>
              <boxGeometry args={[0.85, 0.01, 0.65]} />
              <meshStandardMaterial 
                color="#1A1F2C"
                emissive="#8B5CF6"
                emissiveIntensity={0.2}
              />
            </mesh>
          </mesh>
        </mesh>
        <mesh position={[0, 0.05, -0.5]} rotation={[Math.PI / 4, 0, 0]}>
          <boxGeometry args={[0.95, 0.7, 0.05]} />
          <meshStandardMaterial color="#222" />
          <mesh position={[0, 0, -0.025]}>
            <boxGeometry args={[0.85, 0.6, 0.01]} />
            <meshStandardMaterial 
              color="#0A0A0A"
              emissive="#8B5CF6"
              emissiveIntensity={0.2}
            />
          </mesh>
        </mesh>
      </mesh>
    </Float>
  );
};

const Globe = () => {
  const globeRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={globeRef} scale={[0.8, 0.8, 0.8]} position={[2, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#0EA5E9"
          metalness={0.5}
          roughness={0.5}
          emissive="#0EA5E9"
          emissiveIntensity={0.2}
        />
        <mesh>
          <torusGeometry args={[1.2, 0.02, 16, 100]} />
          <meshStandardMaterial color="#8B5CF6" />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 4]}>
          <torusGeometry args={[1.2, 0.02, 16, 100]} />
          <meshStandardMaterial color="#8B5CF6" />
        </mesh>
      </mesh>
    </Float>
  );
};

const MainScene = () => {
  return (
    <Suspense fallback={null}>
      <Environment preset="city" />
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Laptop />
      <Globe />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2.5}
      />
    </Suspense>
  );
};

const Scene = () => {
  return (
    <div className="canvas-container">
      <Canvas className="three-canvas">
        <MainScene />
      </Canvas>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <Suspense fallback={<Loader />}>
          {/* Any HTML overlay content can go here */}
        </Suspense>
      </div>
    </div>
  );
};

export default Scene;
