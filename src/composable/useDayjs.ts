import dayjs from 'dayjs'
import type { Period } from '@/types/Common'

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
      ? `${formatDate(period.startDate)} - ${formatDate(period.endDate!)}`
      : formatDate(period.endDate!)
  }
  const formatProjectPeriod = (period: Period, status: number) => {
    switch (status) {
      case 0:
        return formatPeriod(period)
      case 1:
        return `${formatDate(period.startDate!)} - 진행중`
      case 2:
        return `${formatPeriod(period)}(참여 종료)`
    }
  }
  return { dayjs, formatPeriod, formatProjectPeriod }
}
