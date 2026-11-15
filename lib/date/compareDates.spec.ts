import { describe, expect, it } from 'vitest'

import { compareDates } from '@/lib/date/compareDates'

describe('compareDates', () => {
  it('should return zero when both dates are absent', () => {
    expect(compareDates()).toBe(0)
  })

  it('should sort an absent first date before a present second date', () => {
    expect(compareDates(undefined, '2026-01-01T00:00:00.000Z')).toBe(-1)
  })

  it('should sort a present first date after an absent second date', () => {
    expect(compareDates('2026-01-01T00:00:00.000Z')).toBe(1)
  })

  it('should return zero for matching dates', () => {
    expect(compareDates('2026-01-01T00:00:00.000Z', '2026-01-01T00:00:00.000Z')).toBe(0)
  })

  it('should return a positive value when the second date is later', () => {
    expect(compareDates('2026-01-01T00:00:00.000Z', '2026-01-02T00:00:00.000Z')).toBeGreaterThan(0)
  })

  it('should return a negative value when the second date is earlier', () => {
    expect(compareDates('2026-01-02T00:00:00.000Z', '2026-01-01T00:00:00.000Z')).toBeLessThan(0)
  })
})
