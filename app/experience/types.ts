import * as z from 'zod'

const experienceSchema = z.object({
  company: z.string(),
  description: z.string(),
  endDate: z.date().optional(),
  startDate: z.date(),
  title: z.string(),
})

const Experience = z.compile(experienceSchema)

type Experience = z.infer<typeof experienceSchema>

const experienceDataSchema = experienceSchema.extend({
  content: z.string(),
  slug: z.string(),
})

const ExperienceData = z.compile(experienceDataSchema)

type ExperienceData = z.infer<typeof experienceDataSchema>

export { Experience, ExperienceData }
