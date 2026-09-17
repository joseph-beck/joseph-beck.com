/**
 * isDefined checks whether the given value is defined (not undefined or null).
 *
 * @param value unknown value
 * @returns boolean is the value defined?
 */
const isDefined = (value: unknown): boolean => {
  return value !== undefined && value !== null
}

export { isDefined }
