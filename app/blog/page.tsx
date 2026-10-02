import { Stack } from '@/components/layout/Stack'
import { Typography } from '@/components/ui/Typography'

import { BlogCard } from './BlogCard'

const Page = () => {
  return (
    <Stack className="flex min-h-svh p-6">
      <Typography variant="h2">blog</Typography>
      <Stack className="flex max-w-md">
        <BlogCard
          blog={{
            description: 'description.',
            title: 'blog',
          }}
        />
        <BlogCard
          blog={{
            description: 'description.',
            title: 'blog',
          }}
        />
      </Stack>
    </Stack>
  )
}

export default Page
