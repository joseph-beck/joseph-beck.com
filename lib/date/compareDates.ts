const compareDates = (a?: string, b?: string): number => {
  if (!a && !b) {
    return 0
  }

  if (!a) {
    return -1
  }

  if (!b) {
    return 1
  }

  return new Date(b).getTime() - new Date(a).getTime()
}

export { compareDates }
