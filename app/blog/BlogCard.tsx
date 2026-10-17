import { type ReactElement } from 'react'
import { ViewTransition } from 'react'

import { type BlogData } from '@/app/blog/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Link } from '@/components/ui/Link'
import { Typography } from '@/components/ui/Typography'

interface BlogCardProps {
  blog: BlogData
}

const BlogCard = ({ blog }: BlogCardProps): ReactElement => {
  return (
    <Link key={blog.slug} href={`/blog/${blog.slug}`}>
      <ViewTransition name={`blog-${blog.slug}`}>
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
      </ViewTransition>
    </Link>
  )
}

export { BlogCard }
