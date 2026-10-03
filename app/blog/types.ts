import * as z from 'zod'

import { type BaseData } from '@/lib/mdx/types'

const blogSchema = z.object({
  description: z.string(),
  title: z.string(),
})

const Blog = z.compile(blogSchema)

type Blog = z.infer<typeof blogSchema>

type BlogData = BaseData & Blog

export { Blog }
export type { BlogData }
