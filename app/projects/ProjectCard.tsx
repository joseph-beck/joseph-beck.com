import { type ReactElement } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'

import { type Project } from './types'

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps): ReactElement => {
  return (
    <Card className="hover:bg-accent w-full bg-transparent">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
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
