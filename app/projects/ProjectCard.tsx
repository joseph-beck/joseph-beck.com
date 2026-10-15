import { isNonEmptyArray } from '@jblib/is'
import { type ReactElement } from 'react'

import { type Project } from '@/app/projects/types'
import { Stack } from '@/components/layout/Stack'
import { Badge } from '@/components/ui/Badge'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps): ReactElement => {
  return (
    <Card variant="gradient">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Stack orientation="horizontal" spacing="sm">
          {isNonEmptyArray(project.languages)
            ? project.languages.map((language) => <Badge key={language}>{language}</Badge>)
            : undefined}
        </Stack>
      </CardFooter>
    </Card>
  )
}

export { ProjectCard }
