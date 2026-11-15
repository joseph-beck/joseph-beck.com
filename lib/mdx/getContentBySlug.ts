import { getSlug } from '@/lib/mdx/getSlug'

interface GetContentBySlugParams<TData> {
  content: Record<string, string>
  getFn: (filename: string) => TData
  slug: string
}

const getContentBySlug = <TData>({ content, getFn, slug }: GetContentBySlugParams<TData>): TData | undefined => {
  const filename = Object.keys(content).find((candidate) => getSlug(candidate) === slug)

  if (!filename) {
    return undefined
  }

  return getFn(filename)
}

export { getContentBySlug }
