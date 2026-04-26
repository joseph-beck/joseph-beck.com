import { describe, expect, it } from 'vitest'

import { isDefined } from './is-defined'

describe('is defined', () => {
  it('should return true for defined values', () => {
    expect(isDefined(1)).toBe(true)
  })

  it('should return false for undefined values', () => {
    expect(isDefined(undefined)).toBe(false)
  })
})
