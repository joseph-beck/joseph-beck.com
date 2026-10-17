import { isDefined } from '@jblib/is'
import { ViewTransition } from 'react'

import { BlogPost } from '@/app/blog/BlogPost'
import { contentDirectory } from '@/app/blog/contentDirectory'
import { Blog } from '@/app/blog/types'
import { type BlogData } from '@/app/blog/types'
import { Container } from '@/components/layout/Container'
import { Stack } from '@/components/layout/Stack'
import { BackArrow } from '@/components/navigation/BackArrow'
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

  return (
    <ViewTransition name={`blog-${slug}`}>
      <Container>
        <Stack>
          <BackArrow href="/blog">back to blog</BackArrow>
          {isDefined(blog) ? (
            <BlogPost blog={blog}>{blog.content}</BlogPost>
          ) : (
            <Typography style="mono" variant="h5">
              sorry, blog {slug} could not be found
            </Typography>
          )}
        </Stack>
      </Container>
    </ViewTransition>
  )
}

export default Page
