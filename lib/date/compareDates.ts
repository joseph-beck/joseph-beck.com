import { isUndefined } from '@jblib/is'

const compareDates = (a?: string, b?: string): number => {
  if (isUndefined(a) && isUndefined(b)) {
    return 0
  }

  if (isUndefined(a)) {
    return -1
  }

  if (isUndefined(b)) {
    return 1
  }

  return new Date(b).getTime() - new Date(a).getTime()
}

export { compareDates }
