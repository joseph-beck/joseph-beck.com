import { BlogPost } from '@/app/blog/BlogPost'
import { getBlogBySlug } from '@/app/blog/getBlogBySlug'
import { Container } from '@/components/layout/Container'
import { Stack } from '@/components/layout/Stack'
import { Typography } from '@/components/ui/Typography'

interface PageParams {
  slug: string
}

const Page = async ({ params }: { params: Promise<PageParams> }) => {
  const { slug } = await params

  const blog = await getBlogBySlug(slug)

  if (!blog) {
    return (
      <Container>
        <Stack>
          <Typography>blog not found</Typography>
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
