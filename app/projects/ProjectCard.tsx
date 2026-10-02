import { type ReactElement } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'

import { type Project } from './types'

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps): ReactElement => {
  return (
    <Card className="hover:bg-accent hover:from-primary/10 hover:via-accent hover:ring-primary/33 w-full bg-transparent ring-0 transition-all hover:bg-linear-to-br hover:to-transparent hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.08)] hover:ring-1">
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
