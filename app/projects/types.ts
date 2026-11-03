import * as z from 'zod'

const projectSchema = z.object({
  description: z.string(),
  languages: z.string().array().optional(),
  priority: z.number().default(0),
  repo: z.string().optional(),
  title: z.string(),
})

const Project = z.compile(projectSchema)

type Project = z.infer<typeof projectSchema>

const projectDataSchema = projectSchema.extend({
  content: z.string(),
  slug: z.string(),
})

const ProjectData = z.compile(projectDataSchema)

type ProjectData = z.infer<typeof projectDataSchema>

export { Project, ProjectData }
