import type { Period } from './Common'

interface Skill {
  language: string[]
  dev: string[]
  tools: string[]
}

// type 1: Main / 2: Side
// status 0: 완료, 1: 진행중, 2: (참여종료)
export interface Project {
  type: number
  status: number
  title: string
  content: string
  period: Period
  task: string[]
  personnel: number
  skills: Skill
}
