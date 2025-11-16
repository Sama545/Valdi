import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function PerfumeBottle({ position, color, name, price, scale = 1 }) {
  const bottleRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (hovered && bottleRef.current) {
      bottleRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
  });

  return (
    <group
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <group ref={bottleRef} scale={hovered ? scale * 1.1 : scale}>
        {/* Bottle body */}
        <mesh castShadow receiveShadow position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.15, 0.18, 0.6, 32]} />
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={0.7}
            roughness={0.1}
            metalness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transmission={0.5}
            thickness={0.5}
          />
        </mesh>

        {/* Bottle neck */}
        <mesh castShadow receiveShadow position={[0, 0.7, 0]}>
          <cylinderGeometry args={[0.08, 0.12, 0.2, 32]} />
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={0.7}
            roughness={0.1}
            metalness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transmission={0.5}
            thickness={0.5}
          />
        </mesh>

        {/* Cap */}
        <mesh castShadow receiveShadow position={[0, 0.85, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.1, 32]} />
          <meshStandardMaterial
            color="#2d5016"
            roughness={0.3}
            metalness={0.8}
          />
        </mesh>

        {/* Cap top */}
        <mesh castShadow receiveShadow position={[0, 0.92, 0]}>
          <sphereGeometry args={[0.1, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial
            color="#2d5016"
            roughness={0.3}
            metalness={0.8}
          />
        </mesh>

        {/* Liquid inside */}
        <mesh position={[0, 0.15, 0]}>
          <cylinderGeometry args={[0.14, 0.17, 0.3, 32]} />
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={0.9}
            roughness={0.2}
            metalness={0.1}
          />
        </mesh>
      </group>

      {/* Label */}
      {hovered && (
        <mesh position={[0, 1.2, 0]}>
          <planeGeometry args={[0.8, 0.3]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
        </mesh>
      )}
    </group>
  );
}
