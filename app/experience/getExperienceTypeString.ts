import { type ExperienceType } from '@/app/experience/types'

const getExperienceTypeString = (type: 'all' | ExperienceType): string => {
  switch (type) {
    case 'professional':
      return 'professional'
    case 'extra-curricular':
      return 'extra curricular'
    case 'freelance':
      return 'freelance'
    case 'education':
      return 'education'
    default:
      return type
  }
}

export { getExperienceTypeString }
