import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import Store from './components/Store';
import PerfumeBottle from './components/PerfumeBottle';
import ProductInfo from './components/ProductInfo';

const perfumes = [
  {
    id: 1,
    name: 'Emerald Garden',
    price: 89.99,
    color: '#2d7a2d',
    position: [-1.5, 1.1, -5],
    description: 'A fresh blend of morning dew and garden herbs',
    notes: 'Basil, Mint, Green Tea',
    volume: '50ml',
    type: 'Eau de Parfum'
  },
  {
    id: 2,
    name: 'Forest Mist',
    price: 95.99,
    color: '#1a5c1a',
    position: [0, 1.1, -5],
    description: 'Woody notes with hints of pine and moss',
    notes: 'Pine, Moss, Cedar',
    volume: '50ml',
    type: 'Eau de Parfum'
  },
  {
    id: 3,
    name: 'Jade Blossom',
    price: 79.99,
    color: '#3d9a3d',
    position: [1.5, 1.1, -5],
    description: 'Floral green with jasmine and lily',
    notes: 'Jasmine, Lily, Green Apple',
    volume: '50ml',
    type: 'Eau de Toilette'
  },
  {
    id: 4,
    name: 'Verdant Breeze',
    price: 85.99,
    color: '#4db84d',
    position: [-1.5, 2.1, -5],
    description: 'Light and airy with citrus undertones',
    notes: 'Bergamot, Cucumber, Sage',
    volume: '50ml',
    type: 'Eau de Toilette'
  },
  {
    id: 5,
    name: 'Moss & Ivy',
    price: 92.99,
    color: '#2d5c2d',
    position: [0, 2.1, -5],
    description: 'Earthy and sophisticated green scent',
    notes: 'Oakmoss, Ivy, Vetiver',
    volume: '75ml',
    type: 'Eau de Parfum'
  },
  {
    id: 6,
    name: 'Spring Meadow',
    price: 75.99,
    color: '#5dc75d',
    position: [1.5, 2.1, -5],
    description: 'Fresh cut grass with wildflower notes',
    notes: 'Grass, Wildflowers, Clover',
    volume: '50ml',
    type: 'Eau de Toilette'
  },
  {
    id: 7,
    name: 'Bamboo Rain',
    price: 88.99,
    color: '#3d7a3d',
    position: [-4, 1.1, -2],
    description: 'Asian-inspired with bamboo and lotus',
    notes: 'Bamboo, Lotus, Green Tea',
    volume: '50ml',
    type: 'Eau de Parfum'
  },
  {
    id: 8,
    name: 'Herb Garden',
    price: 72.99,
    color: '#4d8a4d',
    position: [-4, 2.1, -2],
    description: 'Aromatic herbs from Provence',
    notes: 'Rosemary, Thyme, Lavender',
    volume: '50ml',
    type: 'Eau de Cologne'
  },
  {
    id: 9,
    name: 'Olive Grove',
    price: 94.99,
    color: '#2d6b2d',
    position: [4, 1.1, -2],
    description: 'Mediterranean green with olive leaf',
    notes: 'Olive Leaf, Fig, Cypress',
    volume: '75ml',
    type: 'Eau de Parfum'
  },
  {
    id: 10,
    name: 'Mint Julep',
    price: 69.99,
    color: '#5dcc5d',
    position: [4, 2.1, -2],
    description: 'Refreshing mint with a sweet twist',
    notes: 'Spearmint, Lime, Sugar',
    volume: '50ml',
    type: 'Eau de Toilette'
  },
];

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="w-full h-screen bg-gradient-to-b from-green-900 to-green-950">
      <ProductInfo selectedProduct={selectedProduct} />
      
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 3, 8]} fov={60} />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={15}
          maxPolarAngle={Math.PI / 2}
          target={[0, 2, -3]}
        />

        <ambientLight intensity={0.4} />
        
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        <spotLight
          position={[0, 8, -5]}
          angle={0.5}
          penumbra={1}
          intensity={0.8}
          castShadow
          color="#88ff88"
        />

        <spotLight
          position={[-5, 6, 0]}
          angle={0.4}
          penumbra={1}
          intensity={0.5}
          color="#66dd66"
        />

        <spotLight
          position={[5, 6, 0]}
          angle={0.4}
          penumbra={1}
          intensity={0.5}
          color="#66dd66"
        />

        <Suspense fallback={null}>
          <Store />
          
          {perfumes.map((perfume) => (
            <group
              key={perfume.id}
              onPointerOver={() => setSelectedProduct(perfume)}
              onPointerOut={() => setSelectedProduct(null)}
            >
              <PerfumeBottle
                position={perfume.position}
                color={perfume.color}
                name={perfume.name}
                price={perfume.price}
              />
            </group>
          ))}

          <Environment preset="forest" />
        </Suspense>

        <fog attach="fog" args={['#0a1f0a', 10, 25]} />
      </Canvas>

      <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-xl">
        <h3 className="text-sm font-bold text-green-800 mb-2">Store Hours</h3>
        <p className="text-xs text-gray-700">Mon-Sat: 10AM - 8PM</p>
        <p className="text-xs text-gray-700">Sunday: 12PM - 6PM</p>
      </div>
    </div>
  );
}

export default App;
