import * as THREE from 'three';
import { Perfume } from './Perfume';

export class Store {
    private scene: THREE.Scene;

    constructor(scene: THREE.Scene) {
        this.scene = scene;
        this.createEnvironment();
        this.addLighting();
        this.addPerfumes();
    }

    private createEnvironment() {
        // Green floor
        const floorGeometry = new THREE.PlaneGeometry(20, 20);
        const floorMaterial = new THREE.MeshLambertMaterial({ color: 0x228B22 });
        const floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.rotation.x = -Math.PI / 2;
        this.scene.add(floor);

        // Green walls
        const wallMaterial = new THREE.MeshLambertMaterial({ color: 0x32CD32 });

        // Back wall
        const backWallGeometry = new THREE.PlaneGeometry(20, 10);
        const backWall = new THREE.Mesh(backWallGeometry, wallMaterial);
        backWall.position.z = -10;
        this.scene.add(backWall);

        // Left wall
        const leftWall = new THREE.Mesh(backWallGeometry, wallMaterial);
        leftWall.rotation.y = Math.PI / 2;
        leftWall.position.x = -10;
        this.scene.add(leftWall);

        // Right wall
        const rightWall = new THREE.Mesh(backWallGeometry, wallMaterial);
        rightWall.rotation.y = -Math.PI / 2;
        rightWall.position.x = 10;
        this.scene.add(rightWall);

        // Ceiling
        const ceilingGeometry = new THREE.PlaneGeometry(20, 20);
        const ceilingMaterial = new THREE.MeshLambertMaterial({ color: 0x90EE90 });
        const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
        ceiling.rotation.x = Math.PI / 2;
        ceiling.position.y = 10;
        this.scene.add(ceiling);

        // Add shelves
        this.addShelves();
    }

    private addShelves() {
        const shelfMaterial = new THREE.MeshLambertMaterial({ color: 0x8FBC8F });
        const shelfGeometry = new THREE.BoxGeometry(18, 0.2, 1);

        // Multiple shelves at different heights
        for (let i = 0; i < 3; i++) {
            const shelf = new THREE.Mesh(shelfGeometry, shelfMaterial);
            shelf.position.set(0, 1 + i * 2, -8);
            this.scene.add(shelf);
        }

        // Display cases
        const caseGeometry = new THREE.BoxGeometry(2, 1.5, 1);
        const caseMaterial = new THREE.MeshLambertMaterial({ color: 0x556B2F });

        for (let x = -6; x <= 6; x += 3) {
            const displayCase = new THREE.Mesh(caseGeometry, caseMaterial);
            displayCase.position.set(x, 0.75, -5);
            this.scene.add(displayCase);
        }
    }

    private addLighting() {
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 10, 5);
        this.scene.add(directionalLight);
    }

    private addPerfumes() {
        // Add perfumes on shelves
        for (let shelf = 0; shelf < 3; shelf++) {
            for (let i = 0; i < 6; i++) {
                const perfume = new Perfume(new THREE.Vector3(-7 + i * 2.5, 1.5 + shelf * 2, -8));
                this.scene.add(perfume.getMesh());
            }
        }

        // Add perfumes on display cases
        for (let x = -6; x <= 6; x += 3) {
            const perfume = new Perfume(new THREE.Vector3(x, 1.5, -5));
            this.scene.add(perfume.getMesh());
        }
    }
}