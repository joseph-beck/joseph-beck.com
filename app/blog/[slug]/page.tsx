import { BlogPost } from '@/app/blog/BlogPost'
import { Blog } from '@/app/blog/types'
import { type BlogData } from '@/app/blog/types'
import { contentDirectory } from '@/app/experience/contentDirectory'
import { Container } from '@/components/layout/Container'
import { Stack } from '@/components/layout/Stack'
import { Typography } from '@/components/ui/Typography'
import { getContentBySlug } from '@/lib/mdx/getContentBySlug'
import { getContentFromFile } from '@/lib/mdx/getContentFromFile'

interface PageParams {
  slug: string
}

const Page = async ({ params }: { params: Promise<PageParams> }) => {
  const { slug } = await params

  const blog = await getContentBySlug<BlogData>({
    contentDirectory,
    getFn: async (filename) => {
      return getContentFromFile<Blog>({
        contentDirectory,
        filename,
        schema: Blog,
      })
    },
    slug,
  })

  if (!blog) {
    return (
      <Container>
        <Stack>
          <Typography>sorry, blog {slug} could not be found</Typography>
        </Stack>
      </Container>
    )
  }

  return (
    <Container>
      <Stack>
        <BlogPost blog={blog}>{blog.content}</BlogPost>
      </Stack>
    </Container>
  )
}

export default Page
