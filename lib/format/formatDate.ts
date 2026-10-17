const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: '2-digit',
  })
    .format(date)
    .toLocaleLowerCase()
}

export { formatDate }
