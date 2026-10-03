import { getAll } from '@/lib/mdx/getAll'
import { getFromFile } from '@/lib/mdx/getFromFile'

import { contentDirectory } from './contentDirectory'
import { Blog, type BlogData } from './types'

const getBlogs = async (): Promise<BlogData[]> =>
  getAll<BlogData>({
    contentDirectory,
    getFn: async (filename) => {
      return getFromFile<Blog>({
        contentDirectory,
        filename,
        schema: Blog,
      })
    },
  })

export { getBlogs }
