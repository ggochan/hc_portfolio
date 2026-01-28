import dayjs from 'dayjs'
import type { Period } from '@/types/Category'

export const useDayjs = () => {
  const formatDate = (date: Date | string) => {
    if (typeof date === 'string') {
      const hasDay = date.split('-').length === 3
      return dayjs(date).format(hasDay ? 'YYYY.MM.DD' : 'YYYY.MM')
    }
    return dayjs(date).format('YYYY.MM.DD')
  }
  const formatPeriod = (period: Period) => {
    return period.startDate
      ? `${formatDate(period.startDate)} - ${formatDate(period.endDate)}`
      : formatDate(period.endDate)
  }

  return { dayjs, formatPeriod }
}
