import { type ReactElement } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'

import { type Blog } from './types'

interface BlogCardProps {
  blog: Blog
}

const BlogCard = ({ blog }: BlogCardProps): ReactElement => {
  return (
    <Card variant="gradient">
      <CardHeader>
        <CardTitle>{blog.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Typography size="sm" variant="p">
          {blog.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export { BlogCard }
