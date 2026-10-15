import { isNonEmptyArray } from '@jblib/is'

import { BlogCard } from '@/app/blog/BlogCard'
import { contentDirectory } from '@/app/blog/contentDirectory'
import { Blog } from '@/app/blog/types'
import { type BlogData } from '@/app/blog/types'
import { Container } from '@/components/layout/Container'
import { Stack } from '@/components/layout/Stack'
import { Link } from '@/components/ui/Link'
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
        <Stack className="flex max-w-md">
          {isNonEmptyArray(blogs)
            ? blogs.map((blog) => (
                <Link key={blog.slug} href={`/blog/${blog.slug}`}>
                  <BlogCard blog={blog} />
                </Link>
              ))
            : undefined}
        </Stack>
      </Stack>
    </Container>
  )
}

export default Page
