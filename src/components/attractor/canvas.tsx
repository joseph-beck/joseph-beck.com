import { JSX, ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';

interface Props {
  children?: ReactNode;
}

export const AttractorCanvas = ({ children }: Props): JSX.Element => {
  return (
    <div id="canvas-container" className="w-100 outline-1 outline-amber-500">
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        {children}
      </Canvas>
    </div>
  );
};
