import { isDefined } from '@jblib/is'
import { ViewTransition } from 'react'

import { BlogPost } from '@/app/blog/BlogPost'
import { content } from '@/app/blog/content/content'
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

  const blog = getContentBySlug<BlogData>({
    content,
    getFn: (filename) => {
      return getContentFromFile<Blog>({
        content,
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
            <BlogPost blog={blog} content={blog.content} />
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
