import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface PerfumeBottleProps {
  position: [number, number, number];
  color: string;
  onClick: () => void;
  bottleType?: 'tall' | 'round' | 'square';
  scale?: number;
}

export default function PerfumeBottle({ 
  position, 
  color, 
  onClick, 
  bottleType = 'tall',
  scale = 1 
}: PerfumeBottleProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current && hovered) {
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      groupRef.current.rotation.y += 0.01;
    } else if (groupRef.current && !hovered) {
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        position[1],
        0.1
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        0,
        0.1
      );
    }
  });

  const renderBottle = () => {
    switch (bottleType) {
      case 'tall':
        return <TallBottle color={color} />;
      case 'round':
        return <RoundBottle color={color} />;
      case 'square':
        return <SquareBottle color={color} />;
      default:
        return <TallBottle color={color} />;
    }
  };

  return (
    <group 
      ref={groupRef} 
      position={position}
      scale={scale}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {renderBottle()}
      
      {/* Label */}
      <mesh position={[0, 0.8, 0.31]} rotation={[0, 0, 0]}>
        <planeGeometry args={[0.5, 0.3]} />
        <meshStandardMaterial color="#f5f5f5" roughness={0.5} />
      </mesh>
      
      <Text
        position={[0, 0.8, 0.32]}
        fontSize={0.08}
        color="#000000"
        anchorX="center"
        anchorY="middle"
      >
        ESSENCE
      </Text>
    </group>
  );
}

function TallBottle({ color }: { color: string }) {
  return (
    <>
      {/* Main bottle body */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <cylinderGeometry args={[0.25, 0.3, 1.2, 32]} />
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={0.4}
          roughness={0.1}
          metalness={0.1}
          transmission={0.9}
          thickness={0.5}
          envMapIntensity={1}
        />
      </mesh>

      {/* Perfume liquid */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.24, 0.29, 0.8, 32]} />
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={0.8}
          roughness={0.2}
          metalness={0.3}
        />
      </mesh>

      {/* Bottle neck */}
      <mesh position={[0, 1.5, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.15, 0.3, 32]} />
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={0.4}
          roughness={0.1}
          metalness={0.1}
          transmission={0.9}
        />
      </mesh>

      {/* Cap */}
      <mesh position={[0, 1.8, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.12, 0.3, 32]} />
        <meshStandardMaterial
          color="#d4af37"
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
    </>
  );
}

function RoundBottle({ color }: { color: string }) {
  return (
    <>
      {/* Main bottle body - sphere */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={0.4}
          roughness={0.1}
          metalness={0.1}
          transmission={0.9}
          thickness={0.5}
          envMapIntensity={1}
        />
      </mesh>

      {/* Perfume liquid */}
      <mesh position={[0, 0.6, 0]} castShadow>
        <sphereGeometry args={[0.45, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.7]} />
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={0.8}
          roughness={0.2}
          metalness={0.3}
        />
      </mesh>

      {/* Bottle neck */}
      <mesh position={[0, 1.35, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.15, 0.3, 32]} />
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={0.4}
          roughness={0.1}
          metalness={0.1}
          transmission={0.9}
        />
      </mesh>

      {/* Cap */}
      <mesh position={[0, 1.65, 0]} castShadow>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial
          color="#d4af37"
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
    </>
  );
}

function SquareBottle({ color }: { color: string }) {
  return (
    <>
      {/* Main bottle body - box */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <boxGeometry args={[0.6, 1.2, 0.6]} />
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={0.4}
          roughness={0.1}
          metalness={0.1}
          transmission={0.9}
          thickness={0.5}
          envMapIntensity={1}
        />
      </mesh>

      {/* Perfume liquid */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[0.55, 0.8, 0.55]} />
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={0.8}
          roughness={0.2}
          metalness={0.3}
        />
      </mesh>

      {/* Bottle neck */}
      <mesh position={[0, 1.5, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.15, 0.3, 32]} />
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={0.4}
          roughness={0.1}
          metalness={0.1}
          transmission={0.9}
        />
      </mesh>

      {/* Cap - rectangular */}
      <mesh position={[0, 1.75, 0]} castShadow>
        <boxGeometry args={[0.25, 0.2, 0.25]} />
        <meshStandardMaterial
          color="#d4af37"
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
    </>
  );
}
