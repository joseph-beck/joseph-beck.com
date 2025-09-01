import { JSX, useRef } from 'react';
import * as THREE from 'three';

interface Props {
  position: [number, number, number];
  scale?: number;
}

export const AttractorNode = ({ position, scale = 1 }: Props): JSX.Element => {
  const nodeRef = useRef<THREE.Mesh>(null!);

  return (
    <mesh position={position} ref={nodeRef} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};
