import { isNonEmptyArray } from '@jblib/is'
import { type ReactElement } from 'react'
import { ViewTransition } from 'react'

import { type ProjectData } from '@/app/projects/types'
import { Stack } from '@/components/layout/Stack'
import { Badge } from '@/components/ui/Badge'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Link } from '@/components/ui/Link'

interface ProjectCardProps {
  project: ProjectData
}

const ProjectCard = ({ project }: ProjectCardProps): ReactElement => {
  return (
    <Link key={project.slug} href={`/projects/${project.slug}`}>
      <ViewTransition name={`project-${project.slug}`}>
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
      </ViewTransition>
    </Link>
  )
}

export { ProjectCard }
