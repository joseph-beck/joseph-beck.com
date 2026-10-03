import { readdir } from 'fs/promises'

import { getSlug } from '@/lib/mdx/getSlug'

interface GetBySlugParams<TData> {
  contentDirectory: string
  getFn: (filename: string) => Promise<TData>
  slug: string
}

const getBySlug = async <TData>({
  contentDirectory,
  getFn,
  slug,
}: GetBySlugParams<TData>): Promise<TData | undefined> => {
  const candidates = await readdir(contentDirectory)

  const filename = candidates.find((candidate) => candidate.endsWith('.mdx') && getSlug(candidate) === slug)

  if (!filename) {
    return undefined
  }

  return await getFn(filename)
}

export { getBySlug }
