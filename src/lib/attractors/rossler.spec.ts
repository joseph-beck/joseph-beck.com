import { expect, test } from 'vitest';
import { RosslerAttractor } from './rossler';

test('rossler', () => {
  const rossler = new RosslerAttractor();
  expect(rossler).toBeInstanceOf(RosslerAttractor);
});
