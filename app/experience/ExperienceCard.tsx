import { type ReactElement } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'

import { type Experience } from './types'

interface ExperienceCardProps {
  experience: Experience
}

const ExperienceCard = ({ experience }: ExperienceCardProps): ReactElement => {
  return (
    <Card className="hover:bg-accent hover:ring-accent w-full bg-transparent ring-0 transition-colors hover:ring-1">
      <CardHeader>
        <CardTitle>{experience.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Typography size="sm" variant="p">
          {experience.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export { ExperienceCard }
