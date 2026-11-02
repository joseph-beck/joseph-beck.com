import { MDXRemote } from 'next-mdx-remote/rsc'
import { type ReactElement } from 'react'

import { type Blog } from '@/app/blog/types'
import { Prose } from '@/components/common/Prose'
import { Stack } from '@/components/layout/Stack'
import { Typography } from '@/components/ui/Typography'

interface BlogPostProps {
  blog: Blog
  content: string
}

const BlogPost = ({ blog, content }: BlogPostProps): ReactElement => {
  return (
    <Stack>
      <Typography variant="h2">{blog.title}</Typography>
      <Typography>{blog.description}</Typography>
      <Prose>
        <MDXRemote source={content} />
      </Prose>
    </Stack>
  )
}

export { BlogPost }
