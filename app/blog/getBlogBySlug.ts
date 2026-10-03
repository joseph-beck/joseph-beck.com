import { contentDirectory } from '@/app/blog/contentDirectory'
import { Blog, type BlogData } from '@/app/blog/types'
import { getBySlug } from '@/lib/mdx/getBySlug'
import { getFromFile } from '@/lib/mdx/getFromFile'

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
