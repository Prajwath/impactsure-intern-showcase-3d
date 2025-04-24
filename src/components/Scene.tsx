import { Suspense, useRef, useState, useEffect } from 'react';
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
        {/* Base of the laptop */}
        <boxGeometry args={[1, 0.05, 1]} />
        <meshStandardMaterial 
          color="#1A1F2C"
          metalness={0.8}
          roughness={0.2}
        />
        
        {/* Keyboard area */}
        <mesh position={[0, 0.05, 0.1]}>
          <boxGeometry args={[0.95, 0.02, 0.75]} />
          <meshStandardMaterial 
            color="#000000"
            metalness={0.9}
            roughness={0.1}
          />
          
          {/* Keyboard keys grid */}
          <mesh position={[0, 0.02, 0]}>
            <gridHelper args={[0.8, 10, "#2A2A2A", "#2A2A2A"]} rotation={[Math.PI / 2, 0, 0]} />
            <meshStandardMaterial 
              color="#1A1F2C"
              emissive="#8B5CF6"
              emissiveIntensity={0.2}
              metalness={1}
              roughness={0.3}
            />
          </mesh>
        </mesh>

        {/* Screen */}
        <mesh position={[0, 0.05, -0.5]} rotation={[Math.PI / 4, 0, 0]}>
          <boxGeometry args={[0.95, 0.7, 0.05]} />
          <meshStandardMaterial 
            color="#000000"
            metalness={0.9}
            roughness={0.1}
          />
          <mesh position={[0, 0, -0.025]}>
            <boxGeometry args={[0.85, 0.6, 0.01]} />
            <meshStandardMaterial 
              color="#0A0A0A"
              emissive="#D946EF"
              emissiveIntensity={0.4}
              metalness={1}
              roughness={0.1}
            />
            <Html
              transform
              occlude
              position={[0, 0, 0.01]}
              className="pointer-events-none"
              center
              distanceFactor={1.5}
            >
              <div className="select-none" style={{ 
                color: '#1EAEDB',
                fontFamily: 'monospace',
                fontSize: '24px',
                fontWeight: 'bold',
                textShadow: '0 0 10px #D946EF, 0 0 20px #D946EF',
                background: 'rgba(26, 31, 44, 0.8)',
                padding: '10px 20px',
                borderRadius: '4px',
                border: '1px solid #D946EF',
                transform: 'scale(0.15)'
              }}>
                HI PANEL
              </div>
            </Html>
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
          color="#1EAEDB"
          metalness={0.9}
          roughness={0.1}
          emissive="#0FA0CE"
          emissiveIntensity={0.4}
        />
        <mesh>
          <torusGeometry args={[1.2, 0.02, 16, 100]} />
          <meshStandardMaterial 
            color="#D946EF"
            emissive="#D946EF"
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 4]}>
          <torusGeometry args={[1.2, 0.02, 16, 100]} />
          <meshStandardMaterial 
            color="#8B5CF6"
            emissive="#8B5CF6"
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </mesh>
    </Float>
  );
};

const MainScene = () => {
  return (
    <Suspense fallback={null}>
      <Environment preset="night" />
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} color="#D946EF" />
      <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#0FA0CE" />
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

const WebGLFallback = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center p-4">
      <div className="bg-black/80 p-6 rounded-lg max-w-lg">
        <h2 className="text-3xl font-bold text-tech-purple mb-4">3D Experience Not Available</h2>
        <p className="text-lg mb-4 text-gray-200">
          Your browser or device doesn't support WebGL, which is required to view the 3D elements.
        </p>
        <div className="mb-6">
          <p className="font-semibold text-tech-purple mb-2">Possible solutions:</p>
          <ul className="text-left text-sm text-gray-300 list-disc pl-5 space-y-1">
            <li>Try a modern browser like Chrome, Firefox, or Edge</li>
            <li>Make sure your graphics drivers are up to date</li>
            <li>If using a mobile device, try a desktop computer</li>
            <li>Enable hardware acceleration in your browser settings</li>
          </ul>
        </div>
        <div className="text-2xl font-bold text-tech-purple">IMPACTSURE</div>
      </div>
    </div>
  );
};

function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext && 
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
}

const Scene = () => {
  const [webGLSupported, setWebGLSupported] = useState(true);
  
  useEffect(() => {
    setWebGLSupported(isWebGLAvailable());
  }, []);

  if (!webGLSupported) {
    return <WebGLFallback />;
  }
  
  return (
    <div className="canvas-container">
      <Canvas 
        className="three-canvas" 
        onCreated={(state) => {
          const canvas = state.gl.domElement;
          canvas.addEventListener('webglcontextlost', (event) => {
            event.preventDefault();
            console.log('WebGL context lost, showing fallback');
            setWebGLSupported(false);
          });
        }}
        onError={() => setWebGLSupported(false)}
      >
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
