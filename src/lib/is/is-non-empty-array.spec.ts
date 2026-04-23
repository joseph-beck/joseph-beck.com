import { describe, expect, it } from 'vitest'

import { isNonEmptyArray } from './is-non-empty-array'

describe('is non empty array', () => {
  it('should return true for non-empty arrays', () => {
    expect(isNonEmptyArray([1, 2, 3])).toBe(true)
  })

  it('should return false for empty arrays', () => {
    expect(isNonEmptyArray([])).toBe(false)
  })

  it('should return false for non-array values', () => {
    expect(isNonEmptyArray(null)).toBe(false)

    expect(isNonEmptyArray(undefined)).toBe(false)

    expect(isNonEmptyArray(123)).toBe(false)

    expect(isNonEmptyArray('string')).toBe(false)

    expect(isNonEmptyArray({})).toBe(false)
  })
})
