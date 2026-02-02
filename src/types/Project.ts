import type { Period } from './Common'
interface Skill {
  language: string[]
  dev: string[]
  tools: string[]
}

interface ProjectImage {
  src: string
  alt?: string
}

interface ProjectGallery {
  web?: {
    desktop: ProjectImage[]
    mobile?: ProjectImage[]
  }
  storeWeb?: {
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
  more: {
    summary: string[] // 개요
    config: string[] // 구성
    role: string[] // 역할 & 주요 기여 내용
    point: {
      // 핵심 구현 포인트
      title: string
      content?: string[]
    }[]
    gallery?: ProjectGallery
  }
}
