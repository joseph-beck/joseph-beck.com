import { formatDate } from '@/lib/date/formatDate'

const getDateRange = (startDate?: Date, endDate?: Date): string | undefined => {
  if (!startDate && !endDate) {
    return undefined
  }

  return `${startDate ? formatDate(startDate) : 'present'} - ${endDate ? formatDate(endDate) : 'present'}`
}

export { getDateRange }
