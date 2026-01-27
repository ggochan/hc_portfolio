export interface Period {
  startDate: Date | string | null
  endDate: Date | string | null
}

export interface CategoryItem {
  name: string
  content: string
  period: Period[]
}

export interface CategoryData {
  education: CategoryItem[]
  career: CategoryItem[]
  licenses: CategoryItem[]
  skills: CategoryItem[]
}
