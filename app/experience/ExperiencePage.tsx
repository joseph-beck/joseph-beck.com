import { type ReactElement, type ReactNode } from 'react'

import { type Experience } from '@/app/experience/types'
import { Stack } from '@/components/layout/Stack'
import { Typography } from '@/components/ui/Typography'

interface ExperiencePageProps {
  children: ReactNode
  experience: Experience
}

const ExperiencePage = ({ children, experience }: ExperiencePageProps): ReactElement => {
  return (
    <Stack>
      <Typography variant="h2">{experience.title}</Typography>
      <Typography>{experience.description}</Typography>
      {children}
    </Stack>
  )
}

export { ExperiencePage }
