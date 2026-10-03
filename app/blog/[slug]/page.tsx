import { Stack } from '@/components/layout/Stack'
import { Typography } from '@/components/ui/Typography'

import { BlogPost } from '../BlogPost'
import { getBlogBySlug } from '../getBlogBySlug'

interface PageParams {
  slug: string
}

const Page = async ({ params }: { params: Promise<PageParams> }) => {
  const { slug } = await params

  const blog = await getBlogBySlug(slug)

  if (!blog) {
    return (
      <Stack className="flex min-h-svh p-6">
        <Typography>blog not found</Typography>
      </Stack>
    )
  }

  return (
    <Stack className="flex min-h-svh p-6">
      <BlogPost blog={blog}>{blog.content}</BlogPost>
    </Stack>
  )
}

export default Page
