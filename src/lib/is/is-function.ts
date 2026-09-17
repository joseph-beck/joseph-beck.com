/**
 * isFunction checks if the provided value is a function.
 *
 * @param value unknown value
 * @returns boolean is the value a function?
 */
const isFunction = (value: unknown): value is (...args: unknown[]) => unknown => {
  return typeof value === 'function'
}

export { isFunction }
