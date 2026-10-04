import { readFile } from 'node:fs/promises'
import path from 'node:path'

import matter from 'gray-matter'
import type * as z from 'zod'

import { getSlug } from '@/lib/mdx/getSlug'
import { type BaseData } from '@/lib/mdx/types'

interface GetFromFileParams<TData> {
  contentDirectory: string
  filename: string
  schema: z.ZodType<TData>
}

const getFromFile = async <TData>({
  contentDirectory,
  filename,
  schema,
}: GetFromFileParams<TData>): Promise<BaseData & TData> => {
  const source = await readFile(path.join(contentDirectory, filename), 'utf8')

  const { content, data } = matter(source)

  const frontmatter = schema.parse(data)

  return {
    ...frontmatter,
    content,
    slug: getSlug(filename),
  }
}

export { getFromFile }
