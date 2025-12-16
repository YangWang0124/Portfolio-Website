import React, { useRef, useEffect, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

function LoadedModel({ url, rotation, isDragging }) {
  const ref = useRef();
  const mixerRef = useRef(null);
  const { scene } = useThree();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(url, (gltf) => {
      const model = gltf.scene;
      model.position.y = -1.5;
      model.scale.set(0.2, 0.2, 0.2);

      scene.add(model);
      ref.current = model;

      if (gltf.animations && gltf.animations.length > 0) {
        const mixer = new THREE.AnimationMixer(model);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        mixerRef.current = mixer;
      }
    });
  }, [url, scene]);

  useFrame((_, delta) => {
    if (!ref.current) return;

    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }

    if (!isDragging) {
      ref.current.rotation.y += 0.005;
    } else {
      ref.current.rotation.y = rotation.y;
      ref.current.rotation.x = rotation.x;
    }
  });

  return null;
}

export default function ModelViewer() {
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [lastMouse, setLastMouse] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setLastMouse({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastMouse.x;
    const deltaY = e.clientY - lastMouse.y;

    setRotation((prev) => ({
      x: prev.x + deltaY * 0.005,
      y: prev.y + deltaX * 0.005,
    }));

    setLastMouse({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      style={{ width: "100%", height: "100%" }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={1} color={0xffffff} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.5}
          color={0xffffff}
        />
        <hemisphereLight
          skyColor={0xffffff}
          groundColor={0xaaaaaa}
          intensity={0.5}
        />
        <LoadedModel
          url="/models/lumen_64__computer.glb"
          rotation={rotation}
          isDragging={isDragging}
        />
      </Canvas>
    </div>
  );
}
