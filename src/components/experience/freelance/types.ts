import * as z from 'zod'
const freelanceExperienceSchema = z.object({})

type FreelanceExperience = z.infer<typeof freelanceExperienceSchema>

export type { FreelanceExperience }

export { freelanceExperienceSchema }
