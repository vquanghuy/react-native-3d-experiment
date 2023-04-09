import React, { useRef } from 'react';
import { Canvas, MeshProps, useFrame } from '@react-three/fiber/native';

const Box: React.FC = () => {
  const box = useRef<MeshProps>();
  useFrame(
    () =>
      box.current &&
      ((box.current.rotation.x += 0.01), (box.current.rotation.y += 0.01)),
  );
  return (
    <mesh ref={box}>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={0x0ff000} />
    </mesh>
  );
};

const App: React.FC = () => {
  return (
    <Canvas>
      <ambientLight args={[0xff0000]} intensity={0.1} />
      <directionalLight position={[0, 0, 5]} intensity={0.5} />
      <Box />
    </Canvas>
  );
};

export default App;
