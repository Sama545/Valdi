import React from 'react';
import * as THREE from 'three';

export default function Store() {
  return (
    <group>
      {/* Floor */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial
          color="#1a3a1a"
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>

      {/* Back wall */}
      <mesh receiveShadow position={[0, 5, -10]}>
        <planeGeometry args={[20, 10]} />
        <meshStandardMaterial
          color="#234d23"
          roughness={0.9}
        />
      </mesh>

      {/* Left wall */}
      <mesh receiveShadow position={[-10, 5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[20, 10]} />
        <meshStandardMaterial
          color="#2d5c2d"
          roughness={0.9}
        />
      </mesh>

      {/* Right wall */}
      <mesh receiveShadow position={[10, 5, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[20, 10]} />
        <meshStandardMaterial
          color="#2d5c2d"
          roughness={0.9}
        />
      </mesh>

      {/* Ceiling */}
      <mesh receiveShadow rotation={[Math.PI / 2, 0, 0]} position={[0, 10, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial
          color="#0f2a0f"
          roughness={0.9}
        />
      </mesh>

      {/* Main display shelf - center */}
      <Shelf position={[0, 0, -5]} />
      
      {/* Left shelf */}
      <Shelf position={[-5, 0, -2]} rotation={[0, Math.PI / 6, 0]} />
      
      {/* Right shelf */}
      <Shelf position={[5, 0, -2]} rotation={[0, -Math.PI / 6, 0]} />

      {/* Decorative plants */}
      <Plant position={[-7, 0, -7]} />
      <Plant position={[7, 0, -7]} />
      <Plant position={[-7, 0, 5]} />
      <Plant position={[7, 0, 5]} />
    </group>
  );
}

function Shelf({ position, rotation = [0, 0, 0] }) {
  return (
    <group position={position} rotation={rotation}>
      {/* Base */}
      <mesh castShadow receiveShadow position={[0, 0.05, 0]}>
        <boxGeometry args={[4, 0.1, 1]} />
        <meshStandardMaterial
          color="#3d6b3d"
          roughness={0.6}
          metalness={0.3}
        />
      </mesh>

      {/* Middle shelf */}
      <mesh castShadow receiveShadow position={[0, 1, 0]}>
        <boxGeometry args={[4, 0.1, 1]} />
        <meshStandardMaterial
          color="#3d6b3d"
          roughness={0.6}
          metalness={0.3}
        />
      </mesh>

      {/* Top shelf */}
      <mesh castShadow receiveShadow position={[0, 2, 0]}>
        <boxGeometry args={[4, 0.1, 1]} />
        <meshStandardMaterial
          color="#3d6b3d"
          roughness={0.6}
          metalness={0.3}
        />
      </mesh>

      {/* Left support */}
      <mesh castShadow receiveShadow position={[-1.9, 1, 0]}>
        <boxGeometry args={[0.1, 2, 0.9]} />
        <meshStandardMaterial
          color="#2d5016"
          roughness={0.7}
          metalness={0.4}
        />
      </mesh>

      {/* Right support */}
      <mesh castShadow receiveShadow position={[1.9, 1, 0]}>
        <boxGeometry args={[0.1, 2, 0.9]} />
        <meshStandardMaterial
          color="#2d5016"
          roughness={0.7}
          metalness={0.4}
        />
      </mesh>

      {/* Glass front */}
      <mesh castShadow receiveShadow position={[0, 1, 0.5]}>
        <boxGeometry args={[3.8, 1.9, 0.05]} />
        <meshPhysicalMaterial
          color="#88cc88"
          transparent
          opacity={0.2}
          roughness={0.1}
          metalness={0.1}
          clearcoat={1}
          transmission={0.9}
        />
      </mesh>
    </group>
  );
}

function Plant({ position }) {
  return (
    <group position={position}>
      {/* Pot */}
      <mesh castShadow receiveShadow position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.3, 0.25, 0.6, 32]} />
        <meshStandardMaterial
          color="#1a4d1a"
          roughness={0.8}
        />
      </mesh>

      {/* Soil */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.28, 0.28, 0.05, 32]} />
        <meshStandardMaterial
          color="#2d1a0f"
          roughness={1}
        />
      </mesh>

      {/* Plant leaves */}
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh
          key={i}
          castShadow
          position={[
            Math.cos((i / 5) * Math.PI * 2) * 0.2,
            0.7 + i * 0.15,
            Math.sin((i / 5) * Math.PI * 2) * 0.2,
          ]}
          rotation={[
            Math.PI / 4,
            (i / 5) * Math.PI * 2,
            0,
          ]}
        >
          <coneGeometry args={[0.15, 0.4, 8]} />
          <meshStandardMaterial
            color="#2d7a2d"
            roughness={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}
