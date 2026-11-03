import * as z from 'zod'

const experienceTypeSchema = z.union([z.literal(['professional', 'extra-curricular', 'freelance', 'education'])])

const ExperienceType = z.compile(experienceTypeSchema)

type ExperienceType = z.infer<typeof experienceTypeSchema>

const experienceSchema = z.object({
  description: z.string().optional(),
  endDate: z.date().optional(),
  location: z.string().optional(),
  startDate: z.date().optional(),
  tags: z.string().array().optional(),
  title: z.string(),
  type: ExperienceType,
})

const Experience = z.compile(experienceSchema)

type Experience = z.infer<typeof experienceSchema>

const experienceDataSchema = experienceSchema.extend({
  content: z.string(),
  slug: z.string(),
})

const ExperienceData = z.compile(experienceDataSchema)

type ExperienceData = z.infer<typeof experienceDataSchema>

export { Experience, ExperienceData, ExperienceType }
