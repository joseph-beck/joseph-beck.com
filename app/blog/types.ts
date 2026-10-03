import * as z from 'zod'

const blogSchema = z.object({
  description: z.string(),
  title: z.string(),
})

const Blog = z.compile(blogSchema)

type Blog = z.infer<typeof blogSchema>

export { Blog }
