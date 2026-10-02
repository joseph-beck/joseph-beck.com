import { Stack } from '@/components/layout/Stack'
import { Typography } from '@/components/ui/Typography'

import { ExperienceCard } from './ExperienceCard'

const Page = () => {
  return (
    <Stack className="flex min-h-svh p-6">
      <Typography variant="h2">experience</Typography>
      <Stack className="flex max-w-md">
        <ExperienceCard
          experience={{
            description: 'description.',
            title: 'experience',
          }}
        />
        <ExperienceCard
          experience={{
            description: 'description.',
            title: 'experience',
          }}
        />
      </Stack>
    </Stack>
  )
}

export default Page
