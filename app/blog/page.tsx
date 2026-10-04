import { isNonEmptyArray } from '@jblib/is'

import { BlogCard } from '@/app/blog/BlogCard'
import { getBlogs } from '@/app/blog/getBlogs'
import { Container } from '@/components/layout/Container'
import { Stack } from '@/components/layout/Stack'
import { Link } from '@/components/ui/Link'
import { Typography } from '@/components/ui/Typography'

const Page = async () => {
  const blogs = await getBlogs()

  return (
    <Container>
      <Stack>
        <Typography variant="h2">blog</Typography>
        <Stack className="flex max-w-md">
          {isNonEmptyArray(blogs)
            ? blogs.map((blog) => (
                <Link key={blog.slug} href={`/blog/${blog.slug}`}>
                  <BlogCard blog={blog} />
                </Link>
              ))
            : undefined}
        </Stack>
      </Stack>
    </Container>
  )
}

export default Page
