import { describe, expect, it } from 'vitest'

import { isEmpty } from './is-empty'

describe('is empty', () => {
  it('should return true for empty arrays', () => {
    expect(isEmpty([])).toBe(true)
  })

  it('should return false for non-empty arrays', () => {
    expect(isEmpty([1])).toBe(false)
  })

  it('should return true for empty strings', () => {
    expect(isEmpty('')).toBe(true)

    expect(isEmpty(' ')).toBe(true)
  })

  it('should return false for non-empty strings', () => {
    expect(isEmpty('hello')).toBe(false)
  })

  it('should return true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true)

    expect(isEmpty(undefined)).toBe(true)
  })

  it('should return true for empty objects', () => {
    expect(isEmpty({})).toBe(true)
  })
})
