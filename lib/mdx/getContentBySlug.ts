import { readdir } from 'fs/promises'

import { getSlug } from '@/lib/mdx/getSlug'

interface GetContentBySlugParams<TData> {
  contentDirectory: string
  getFn: (filename: string) => Promise<TData>
  slug: string
}

const getContentBySlug = async <TData>({
  contentDirectory,
  getFn,
  slug,
}: GetContentBySlugParams<TData>): Promise<TData | undefined> => {
  const candidates = await readdir(contentDirectory)

  const filename = candidates.find((candidate) => candidate.endsWith('.mdx') && getSlug(candidate) === slug)

  if (!filename) {
    return undefined
  }

  return await getFn(filename)
}

export { getContentBySlug }
