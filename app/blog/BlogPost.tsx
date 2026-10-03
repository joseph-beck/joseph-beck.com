import { type ReactElement, type ReactNode } from 'react'

import { Stack } from '@/components/layout/Stack'
import { Typography } from '@/components/ui/Typography'

import { type Blog } from './types'

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
