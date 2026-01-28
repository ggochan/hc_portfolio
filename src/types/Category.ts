export interface Period {
  startDate: Date | string | null
  endDate: Date | string
}

export interface CategoryItem {
  name: string
  content: string[]
  period: Period[] | null
}

export interface CategoryData {
  title: string
  infor: CategoryItem[]
}
