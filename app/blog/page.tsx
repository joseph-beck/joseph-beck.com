import { isNonEmptyArray } from '@jblib/is'

import { BlogCard } from '@/app/blog/BlogCard'
import { contentDirectory } from '@/app/blog/contentDirectory'
import { Blog } from '@/app/blog/types'
import { type BlogData } from '@/app/blog/types'
import { Container } from '@/components/layout/Container'
import { Stack } from '@/components/layout/Stack'
import { Typography } from '@/components/ui/Typography'
import { getAllContent } from '@/lib/mdx/getAllContent'
import { getContentFromFile } from '@/lib/mdx/getContentFromFile'

const Page = async () => {
  const blogs = await getAllContent<BlogData>({
    contentDirectory,
    getFn: async (filename) => {
      return getContentFromFile<Blog>({
        contentDirectory,
        filename,
        schema: Blog,
      })
    },
  })

  return (
    <Container>
      <Stack className="w-full">
        <Typography variant="h2">blog</Typography>
        <Stack className="flex max-w-lg">
          {isNonEmptyArray(blogs) ? (
            blogs.map((blog) => <BlogCard key={blog.slug} blog={blog} />)
          ) : (
            <Typography variant="p">nothing to see here...</Typography>
          )}
        </Stack>
      </Stack>
    </Container>
  )
}

export default Page
