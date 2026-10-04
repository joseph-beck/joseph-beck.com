import { type ReactElement } from 'react'

import { type Experience } from '@/app/experience/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'

interface ExperienceCardProps {
  experience: Experience
}

const ExperienceCard = ({ experience }: ExperienceCardProps): ReactElement => {
  return (
    <Card variant="gradient">
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
