import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import PerfumeBottle from './PerfumeBottle';

function StoreEnvironment() {
  return (
    <>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial 
          color="#f5f5f5" 
          roughness={0.1}
          metalness={0.2}
        />
      </mesh>

      {/* Back Wall - Green */}
      <mesh position={[0, 3, -8]} receiveShadow>
        <planeGeometry args={[30, 15]} />
        <meshStandardMaterial 
          color="#047857" 
          roughness={0.8}
        />
      </mesh>

      {/* Left Wall - Light Green */}
      <mesh position={[-15, 3, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[16, 15]} />
        <meshStandardMaterial 
          color="#059669" 
          roughness={0.8}
        />
      </mesh>

      {/* Right Wall - Light Green */}
      <mesh position={[15, 3, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[16, 15]} />
        <meshStandardMaterial 
          color="#059669" 
          roughness={0.8}
        />
      </mesh>

      {/* Display Pedestals */}
      <DisplayPedestal position={[-4, -2, 0]} />
      <DisplayPedestal position={[0, -2, 0]} />
      <DisplayPedestal position={[4, -2, 0]} />
      
      {/* Back Shelf */}
      <Shelf position={[0, 0, -6]} />
    </>
  );
}

function DisplayPedestal({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Pedestal base */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.8, 1, 1, 32]} />
        <meshStandardMaterial 
          color="#ffffff" 
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      {/* Top platform */}
      <mesh position={[0, 1.1, 0]} castShadow>
        <cylinderGeometry args={[0.9, 0.9, 0.2, 32]} />
        <meshStandardMaterial 
          color="#10b981" 
          roughness={0.3}
          metalness={0.6}
        />
      </mesh>
    </group>
  );
}

function Shelf({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Shelf structure */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[10, 0.2, 1.5]} />
        <meshStandardMaterial 
          color="#d4af37" 
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
      {/* Back panel */}
      <mesh position={[0, 1.5, -0.65]} castShadow>
        <boxGeometry args={[10, 3, 0.2]} />
        <meshStandardMaterial 
          color="#10b981" 
          roughness={0.4}
          metalness={0.3}
        />
      </mesh>
    </group>
  );
}

function Lighting() {
  return (
    <>
      {/* Ambient light */}
      <ambientLight intensity={0.4} />
      
      {/* Main spotlight */}
      <spotLight
        position={[0, 10, 5]}
        angle={0.5}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      
      {/* Accent lights for each pedestal */}
      <spotLight
        position={[-4, 8, 2]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#10b981"
        castShadow
      />
      <spotLight
        position={[0, 8, 2]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#10b981"
        castShadow
      />
      <spotLight
        position={[4, 8, 2]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#10b981"
        castShadow
      />

      {/* Back shelf lighting */}
      <pointLight position={[0, 2, -5]} intensity={0.8} color="#d4af37" />
    </>
  );
}

export default function Store3D({ onBottleClick }: { onBottleClick: (id: number) => void }) {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 3, 12], fov: 50 }}
      gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
    >
      <color attach="background" args={['#0a0a0a']} />
      
      <Lighting />
      <StoreEnvironment />
      
      {/* Perfume bottles on pedestals */}
      <PerfumeBottle 
        position={[-4, 0.3, 0]} 
        color="#10b981" 
        onClick={() => onBottleClick(1)}
        bottleType="tall"
      />
      <PerfumeBottle 
        position={[0, 0.3, 0]} 
        color="#059669" 
        onClick={() => onBottleClick(2)}
        bottleType="round"
      />
      <PerfumeBottle 
        position={[4, 0.3, 0]} 
        color="#047857" 
        onClick={() => onBottleClick(3)}
        bottleType="square"
      />

      {/* Bottles on back shelf */}
      <PerfumeBottle 
        position={[-3, 0.3, -6]} 
        color="#10b981" 
        onClick={() => onBottleClick(4)}
        bottleType="round"
        scale={0.8}
      />
      <PerfumeBottle 
        position={[0, 0.3, -6]} 
        color="#d4af37" 
        onClick={() => onBottleClick(5)}
        bottleType="tall"
        scale={0.8}
      />
      <PerfumeBottle 
        position={[3, 0.3, -6]} 
        color="#059669" 
        onClick={() => onBottleClick(6)}
        bottleType="square"
        scale={0.8}
      />

      <ContactShadows 
        position={[0, -1.99, 0]} 
        opacity={0.5} 
        scale={20} 
        blur={2} 
        far={4}
      />
      
      <OrbitControls 
        enablePan={false}
        minDistance={8}
        maxDistance={20}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.2}
        target={[0, 1, 0]}
      />
      
      <Environment preset="city" />
    </Canvas>
  );
}
