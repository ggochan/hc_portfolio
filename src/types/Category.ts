import type { Period } from './Common'
interface inforItem {
  name: string
  content: string[]
  period?: Period[]
}

export interface Category {
  title: string
  infor: inforItem[]
}
