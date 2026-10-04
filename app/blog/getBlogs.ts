import { contentDirectory } from '@/app/blog/contentDirectory'
import { Blog, type BlogData } from '@/app/blog/types'
import { getAll } from '@/lib/mdx/getAll'
import { getFromFile } from '@/lib/mdx/getFromFile'

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
