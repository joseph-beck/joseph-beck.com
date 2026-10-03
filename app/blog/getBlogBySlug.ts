import { getBySlug } from '@/lib/mdx/getBySlug'
import { getFromFile } from '@/lib/mdx/getFromFile'

import { contentDirectory } from './contentDirectory'
import { Blog, type BlogData } from './types'

const getBlogBySlug = async (slug: string): Promise<BlogData | undefined> =>
  getBySlug<BlogData>({
    contentDirectory,
    getFn: async (filename) => {
      return getFromFile<Blog>({
        contentDirectory,
        filename,
        schema: Blog,
      })
    },
    slug,
  })

export { getBlogBySlug }
