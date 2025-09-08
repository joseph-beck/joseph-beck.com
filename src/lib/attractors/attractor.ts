import { Coordinate } from './coordinate';

export abstract class Attractor<TOptions> {
  abstract get default(): TOptions;

  abstract get options(): TOptions;

  abstract set options(options: TOptions);

  abstract get start(): Coordinate;

  abstract next(last: Coordinate): Coordinate;
}
