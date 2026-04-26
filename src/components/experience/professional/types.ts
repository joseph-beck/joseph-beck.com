import * as z from 'zod'

const professionalExperienceSchema = z.object({
  title: z.string(),
  date: z.string(),
  tags: z.array(z.string()),
})

type ProfessionalExperience = z.infer<typeof professionalExperienceSchema>

export type { ProfessionalExperience }

export { professionalExperienceSchema }
