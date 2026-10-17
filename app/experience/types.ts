import * as z from 'zod'

const experienceSchema = z.object({
  description: z.string(),
  endDate: z.date().optional(),
  location: z.string(),
  startDate: z.date(),
  tags: z.string().array().optional(),
  title: z.string(),
  type: z.literal(['professional', 'extra-curricular', 'freelance', 'education']),
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
