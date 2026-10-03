import * as z from 'zod'

const blogSchema = z.object({
  description: z.string(),
  title: z.string(),
})

const Blog = z.compile(blogSchema)

type Blog = z.infer<typeof blogSchema>

const blogDataSchema = blogSchema.extend({
  content: z.string(),
  slug: z.string(),
})

const BlogData = z.compile(blogDataSchema)

type BlogData = z.infer<typeof blogDataSchema>

export { Blog, BlogData }
