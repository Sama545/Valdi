# 🌿 Green Perfume Boutique - 3D Store

A stunning, immersive 3D perfume boutique experience with a nature-inspired green aesthetic, built with Three.js.

## Features

### 🎨 Visual Design
- **Green Color Palette**: Multiple shades of green (emerald, mint, sage, forest green, turquoise)
- **Realistic Materials**: Glass perfume bottles with transparency, metallic caps, wooden shelves
- **Professional Lighting**: Ambient lighting, directional lights, spotlights, and dynamic green accent lights
- **Atmospheric Effects**: Floating particles, fog, and smooth animations

### 🏪 Store Elements
- **30+ Perfume Bottles**: Various sizes and green shades displayed throughout the store
- **Display Shelves**: Multiple wall-mounted shelves with decorative edges
- **Featured Pedestals**: Three elegant pedestals showcasing premium bottles
- **Decorative Plants**: Green foliage adding to the nature theme
- **Store Environment**: Walls, reflective floor, and atmospheric ceiling

### 🎮 Interactive Features
- **Orbit Controls**: Drag to rotate the camera around the store
- **Zoom**: Scroll to zoom in/out for detailed views
- **Pan**: Right-click and drag to pan the camera
- **Hover Effects**: Perfume bottles scale up when you hover over them
- **Smooth Animations**: Bottles float gently and rotate continuously

### ✨ Technical Highlights
- **Three.js**: Powerful 3D rendering engine
- **Real-time Shadows**: Dynamic shadow mapping for realistic depth
- **Glass Materials**: Physically-based rendering with transmission and refraction
- **Responsive Design**: Adapts to any screen size
- **Performance Optimized**: Smooth 60fps rendering
- **No Dependencies**: Single HTML file with CDN imports

## How to Run

### Option 1: Simple HTTP Server (Python)
```bash
cd perfume-store-3d
python3 -m http.server 8000
```
Then open your browser to: `http://localhost:8000`

### Option 2: Node.js HTTP Server
```bash
cd perfume-store-3d
npx http-server -p 8000
```
Then open your browser to: `http://localhost:8000`

### Option 3: Direct File Access
Simply open `index.html` directly in your web browser (some features may be limited due to CORS restrictions).

## Controls

| Action | Control |
|--------|---------|
| **Rotate View** | Left-click and drag |
| **Zoom In/Out** | Mouse scroll wheel |
| **Pan Camera** | Right-click and drag |
| **Hover Effect** | Move mouse over bottles |

## Browser Compatibility

Works best in modern browsers with WebGL support:
- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

## Project Structure

```
perfume-store-3d/
├── index.html          # Complete 3D application (single file)
└── README.md          # This file
```

## Customization

The application is built as a single HTML file for easy deployment. You can customize:

### Colors
Edit the `greenColors` array to change perfume bottle colors:
```javascript
const greenColors = [
    0x7bed9f, // Mint green
    0x56c596, // Sea green
    // Add your own hex colors
];
```

### Lighting
Adjust light intensity and colors in the lighting section:
```javascript
const ambientLight = new THREE.AmbientLight(0xa8e6cf, 0.4);
const greenLight1 = new THREE.PointLight(0x7bed9f, 1.5, 20);
```

### Camera Position
Change the initial camera view:
```javascript
camera.position.set(0, 5, 15); // x, y, z coordinates
```

## Performance Notes

- The scene includes 30+ perfume bottles with glass materials
- Real-time shadows are enabled for realism
- Particle system with 100 floating particles
- Optimized for 60fps on modern hardware
- GPU acceleration recommended

## Technologies Used

- **Three.js v0.160.0**: 3D graphics library
- **OrbitControls**: Camera interaction
- **WebGL**: Hardware-accelerated 3D rendering
- **Vanilla JavaScript**: No framework dependencies

## License

This project is open source and available for personal and commercial use.

## Credits

Created with Three.js - A powerful JavaScript 3D library
https://threejs.org/

---

Enjoy exploring the Green Perfume Boutique! 🌿✨
