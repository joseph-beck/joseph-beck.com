/**
 * isEmpty checks if the provided value is empty.
 * It considers null, undefined, empty strings (after trimming), empty arrays, and empty objects as empty.
 *
 * @param value unknown value
 * @returns boolean is the value empty?
 */
const isEmpty = (value: unknown): boolean => {
  if (value === null || value === undefined) {
    return true
  }

  if (typeof value === 'string') {
    return value.trim() === ''
  }

  if (Array.isArray(value)) {
    return value.length === 0
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0
  }

  return false
}

export { isEmpty }
