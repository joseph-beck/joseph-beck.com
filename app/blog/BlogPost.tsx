import { type ReactElement, type ReactNode } from 'react'

import { type Blog } from '@/app/blog/types'
import { Stack } from '@/components/layout/Stack'
import { Typography } from '@/components/ui/Typography'

interface BlogPostProps {
  blog: Blog
  children: ReactNode
}

const BlogPost = ({ blog, children }: BlogPostProps): ReactElement => {
  return (
    <Stack>
      <Typography variant="h2">{blog.title}</Typography>
      <Typography>{blog.description}</Typography>
      {children}
    </Stack>
  )
}

export { BlogPost }
