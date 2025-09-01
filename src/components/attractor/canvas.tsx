import { JSX, ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three/webgpu';

interface Props {
  children?: ReactNode;
}

export const AttractorCanvas = ({ children }: Props): JSX.Element => {
  return (
    <div id="canvas-container" className="w-100 outline-1 outline-amber-500">
      <Canvas
        gl={async (props) => {
          const renderer = new THREE.WebGPURenderer(props as any);
          await renderer.init();
          return renderer;
        }}
      >
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
