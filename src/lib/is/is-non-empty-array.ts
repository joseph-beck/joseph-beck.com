/**
 * isNonEmptyArray checks if the provided value is an array and has at least one element.
 *
 * @param value unknown value
 * @returns boolean is the value a non-empty array?
 */
const isNonEmptyArray = (value: unknown): boolean => {
  return Array.isArray(value) && value.length > 0
}

export { isNonEmptyArray }
