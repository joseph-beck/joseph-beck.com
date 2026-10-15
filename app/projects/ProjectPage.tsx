import { type ReactElement, type ReactNode } from 'react'

import { type Project } from '@/app/projects/types'
import { Stack } from '@/components/layout/Stack'
import { Typography } from '@/components/ui/Typography'

interface ProjectPageProps {
  children: ReactNode
  project: Project
}

const ProjectPage = ({ children, project }: ProjectPageProps): ReactElement => {
  return (
    <Stack>
      <Typography variant="h2">{project.title}</Typography>
      <Typography>{project.description}</Typography>
      {children}
    </Stack>
  )
}

export { ProjectPage }
