import type { Period } from './Common'

interface ProjectImage {
  src: string
  alt?: string
}

interface ProjectGallery {
  web?: {
    desktop: ProjectImage[]
    mobile?: ProjectImage[]
  }
  userApp?: {
    ios: ProjectImage[]
    android: ProjectImage[]
  }
  storeApp?: {
    ios: ProjectImage[]
    android: ProjectImage[]
  }
  windowApp?: {
    window: ProjectImage[]
  }
}
interface Skill {
  language: string[]
  dev: string[]
  tools: string[]
}

// type 1: Main / 2: Sube / 3: Personal
// status 0: 완료, 1: 진행중, 2: (참여종료)
export interface Project {
  index: number
  type: number
  status: number
  title: string
  content: string
  period: Period
  task: string[]
  personnel: number
  skills: Skill
  gallery?: ProjectGallery
}
