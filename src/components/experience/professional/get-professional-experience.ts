import { professionalExperienceSchema } from './types'

const experience = import.meta.glob('/src/content/experience/professional/*.mdx', {
  eager: true,
})

const getProfessionalExperience = () =>
  Object.entries(experience).map(([path, mod]) => {
    const slug = path.split('/').pop()?.replace('.mdx', '')

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const frontmatter = professionalExperienceSchema.parse((mod as any).frontmatter)

    return {
      slug,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      component: (mod as any).default,
      ...frontmatter,
    }
  })

export { getProfessionalExperience }
