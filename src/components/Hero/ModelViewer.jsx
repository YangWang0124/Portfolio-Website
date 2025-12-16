import React, { useRef, useEffect, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function LoadedModel({ url, rotation, isDragging }) {
  const ref = useRef();
  const { scene } = useThree();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(url, (gltf) => {
      gltf.scene.position.y = -1.5;
      gltf.scene.scale.set(10, 10, 10);
      scene.add(gltf.scene);
      ref.current = gltf.scene;
    });
  }, [url, scene]);

  useFrame(() => {
    if (!ref.current) return;

    if (!isDragging) {
      // Auto-spin
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
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <LoadedModel url="/models/cat.gltf/concrete_cat_statue_4k.gltf" rotation={rotation} isDragging={isDragging}/>
      </Canvas>
    </div>
  );
}
