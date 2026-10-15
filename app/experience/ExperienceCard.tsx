import { type ReactElement } from 'react'

import { type Experience } from '@/app/experience/types'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { formatDate } from '@/lib/format/formatDate'

interface ExperienceCardProps {
  experience: Experience
}

const ExperienceCard = ({ experience }: ExperienceCardProps): ReactElement => {
  return (
    <Card variant="gradient">
      <CardHeader>
        <CardTitle>{experience.title}</CardTitle>
        <CardDescription>{experience.company}</CardDescription>
      </CardHeader>
      <CardContent>
        <Typography size="sm" variant="p">
          {experience.description}
        </Typography>
      </CardContent>
      <CardFooter>
        <Badge>
          {`${formatDate(experience.startDate)} - ${experience.endDate ? formatDate(experience.endDate) : 'present'}`}
        </Badge>
      </CardFooter>
    </Card>
  )
}

export { ExperienceCard }
