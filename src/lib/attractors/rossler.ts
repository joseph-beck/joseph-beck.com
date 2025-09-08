import { Attractor } from './attractor';
import { Coordinate } from './coordinate';

interface RosslerOptions {
  a: number;
  b: number;
  c: number;
  dt: number;
}

const DEFAULT_ROSSLER_OPTIONS: RosslerOptions = {
  a: 0.1,
  b: 0.1,
  c: 14,
  dt: 0.01,
};

const DEFAULT_ROSSLER_START: Coordinate = {
  x: 0.1,
  y: 0.1,
  z: 0.1,
};

export class RosslerAttractor implements Attractor<RosslerOptions> {
  private $options: RosslerOptions;

  constructor(options?: RosslerOptions) {
    this.$options = options ?? this.default;
  }

  get default(): RosslerOptions {
    return DEFAULT_ROSSLER_OPTIONS;
  }

  get options(): RosslerOptions {
    return this.$options;
  }

  set options(options: RosslerOptions) {
    this.$options = options;
  }

  get start(): Coordinate {
    return DEFAULT_ROSSLER_START;
  }

  next(last: Coordinate): Coordinate {
    const { x, y, z } = last;

    const dx = (-y - z) * this.$options.dt;
    const dy = (x + this.$options.a * y) * this.$options.dt;
    const dz = (this.$options.b + z * (x - this.$options.c)) * this.$options.dt;

    return {
      x: last.x + dx,
      y: last.y + dy,
      z: last.z + dz,
    };
  }
}
