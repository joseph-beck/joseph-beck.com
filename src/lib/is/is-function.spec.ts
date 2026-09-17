import { describe, expect, it } from 'vitest'

import { isFunction } from './is-function'

describe('is function', () => {
  it('should return true for functions', () => {
    expect(
      isFunction(() => {
        void 0
      }),
    ).toBe(true)
  })

  it('should return false for non-function values', () => {
    expect(isFunction(null)).toBe(false)

    expect(isFunction(undefined)).toBe(false)

    expect(isFunction(123)).toBe(false)

    expect(isFunction('string')).toBe(false)

    expect(isFunction({})).toBe(false)
  })
})
