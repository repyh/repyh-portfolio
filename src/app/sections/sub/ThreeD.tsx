"use client";

import { Canvas, extend, useFrame } from "@react-three/fiber";
import * as THREE from 'three';
// import poppins from '../../../three/poppins.json';
import notoJP from '../../../three/noto_jp.json';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { useState, useEffect } from 'react';
import { Environment } from "@react-three/drei";

extend({ TextGeometry, FontLoader, Mesh: THREE.Mesh });

declare global {
    namespace JSX {
        interface IntrinsicElements {
            primitive: any
        }
    }
}

export default function ThreeD({ switchClick }: { switchClick: boolean }) {
    const loader = new FontLoader();
    const font = loader.parse(notoJP as any);
    const [mesh, setMesh] = useState<THREE.Mesh | null>(null);
    const [lightPosition, setLightPosition] = useState<[number, number, number]>([0, 0, 10]);
    const [cursorPosition, setCursorPosition] = useState<[number, number]>([0, 0]);

    const options = {
        font,
        size: 2.8,
        height: 0.6,
        curveSegments: 64,
    }

    useEffect(() => {
        const newMesh = new THREE.Mesh(
            new TextGeometry('れ', options) as unknown as THREE.BufferGeometry,
            new THREE.MeshStandardMaterial({ color: "#51C4D3" })
        );
        setMesh(newMesh);
    }, []);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const x = (event.clientX / window.innerWidth) * 2 - 1;
            const y = -(event.clientY / window.innerHeight) * 2 + 1;
            setCursorPosition(() => [x, y]);
            setLightPosition(() => [x / 20, y * 10, 0]);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <Canvas className="-mt-12">
            {switchClick && <Environment preset="studio" />}
            <ambientLight intensity={0.1} />
            <directionalLight position={[0, 0, 0]} intensity={2} castShadow />
            <pointLight position={lightPosition} intensity={5} />
            {mesh && <primitive object={mesh} position={[0, 0, 0]} />}
            {mesh && (
                <MeshRotation mesh={mesh} cursor={cursorPosition} />
            )}
        </Canvas>
    );
}

function MeshRotation({ mesh, cursor }: { mesh: THREE.Mesh, cursor: [number, number] }) {
    useFrame(() => {
        mesh.rotation.x += 0.004*cursor[1];
        // mesh.rotation.y += 0.009;
        mesh.rotation.z += 0.002*cursor[0];

        mesh.geometry.center();
    });

    return null;
}