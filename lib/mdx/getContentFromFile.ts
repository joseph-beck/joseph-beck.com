import matter from 'gray-matter'
import type * as z from 'zod'

import { getSlug } from '@/lib/mdx/getSlug'
import { type BaseData } from '@/lib/mdx/types'

interface GetContentFromFileParams<TData> {
  content: Record<string, string>
  filename: string
  schema: z.ZodType<TData>
}

const getContentFromFile = <TData>({
  content,
  filename,
  schema,
}: GetContentFromFileParams<TData>): BaseData & TData => {
  const source = content[filename]

  if (source === undefined) {
    throw new Error(`MDX content file "${filename}" was not found`)
  }

  const { content: fileContent, data } = matter(source)

  const frontmatter = schema.parse(data)

  return {
    ...frontmatter,
    content: fileContent,
    slug: getSlug(filename),
  }
}

export { getContentFromFile }
