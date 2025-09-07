import { Coordinate } from '@/lib/attractors/coordinate';
import { RosslerAttractor } from '@/lib/attractors/rossler';
import { JSX } from 'react';
import { AttractorCanvas } from './canvas';
import { AttractorNode } from './node';

interface Props {
  _?: void;
}

export const Attractor = ({ _ }: Props): JSX.Element => {
  const data: Coordinate[] = [];
  const attractor = new RosslerAttractor();
  let last: Coordinate = attractor.start;
  for (let i = 0; i < 10000; i++) {
    data.push(attractor.next(last));
    last = data[i];
  }
  console.log(JSON.stringify(data));

  return (
    <AttractorCanvas>
      {data.map((point, index) => (
        <AttractorNode key={index} position={[point.x, point.y, point.z - 50]} scale={0.1} />
      ))}
    </AttractorCanvas>
  );
};
