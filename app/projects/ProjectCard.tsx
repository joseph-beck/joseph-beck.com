import { isDefined } from '@jblib/is'
import { IconBrandGithub } from '@tabler/icons-react'
import { type ReactElement } from 'react'

import { Card, CardAction, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Link } from '@/components/ui/Link'
import { Typography } from '@/components/ui/Typography'

import { type Project } from './types'

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps): ReactElement => {
  return (
    <Card variant="gradient">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        {isDefined(project.link) ? (
          <CardAction>
            <Link href={project.link} target="_blank">
              <IconBrandGithub />
            </Link>
          </CardAction>
        ) : undefined}
      </CardHeader>
      <CardContent>
        <Typography size="sm" variant="p">
          {project.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export { ProjectCard }
