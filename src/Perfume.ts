import * as THREE from 'three';

export class Perfume {
    private mesh: THREE.Group;

    constructor(position: THREE.Vector3) {
        this.mesh = new THREE.Group();
        this.createBottle();
        this.mesh.position.copy(position);
    }

    private createBottle() {
        // Bottle body (cylinder)
        const bodyGeometry = new THREE.CylinderGeometry(0.1, 0.15, 0.8, 16);
        const bodyMaterial = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.8 });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        this.mesh.add(body);

        // Bottle cap
        const capGeometry = new THREE.CylinderGeometry(0.12, 0.12, 0.1, 16);
        const capMaterial = new THREE.MeshLambertMaterial({ color: 0xFFD700 });
        const cap = new THREE.Mesh(capGeometry, capMaterial);
        cap.position.y = 0.45;
        this.mesh.add(cap);

        // Label (simple rectangle)
        const labelGeometry = new THREE.PlaneGeometry(0.3, 0.4);
        const labelMaterial = new THREE.MeshLambertMaterial({ color: 0xFF69B4 });
        const label = new THREE.Mesh(labelGeometry, labelMaterial);
        label.position.z = 0.16;
        this.mesh.add(label);

        // Perfume liquid inside (subtle green)
        const liquidGeometry = new THREE.CylinderGeometry(0.08, 0.13, 0.6, 16);
        const liquidMaterial = new THREE.MeshLambertMaterial({ color: 0x00FF00, transparent: true, opacity: 0.6 });
        const liquid = new THREE.Mesh(liquidGeometry, liquidMaterial);
        liquid.position.y = -0.1;
        this.mesh.add(liquid);
    }

    public getMesh(): THREE.Group {
        return this.mesh;
    }
}