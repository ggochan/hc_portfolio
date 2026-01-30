export const PROJECT_TYPE = {
  MAIN: 1,
  SUB: 2,
  PERSONAL: 3,
} as const

export const projectTypeConfig = {
  [PROJECT_TYPE.MAIN]: { text: 'Main', bg: 'bg-primary' },
  [PROJECT_TYPE.SUB]: { text: 'Sub', bg: 'bg-primary-light' },
  [PROJECT_TYPE.PERSONAL]: { text: 'Personal', bg: 'bg-secondary-light' },
} as const

export type ProjectType = (typeof PROJECT_TYPE)[keyof typeof PROJECT_TYPE]
