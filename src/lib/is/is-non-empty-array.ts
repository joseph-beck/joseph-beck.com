export const isNonEmptyArray = <T>(value: T[] | undefined | null): value is T[] =>
  Array.isArray(value) && value.length > 0
