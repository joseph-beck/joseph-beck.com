import { Coordinate } from '@/lib/attractors/coordinate';
import { JSX } from 'react';
import { AttractorCanvas } from './canvas';
import { AttractorNode } from './node';
import { Attractor as AbstractAttractor } from '@/lib/attractors/attractor';

interface Props {
  attractor: AbstractAttractor<any>;
}

export const Attractor = ({ attractor }: Props): JSX.Element => {
  const data: Coordinate[] = [];
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
