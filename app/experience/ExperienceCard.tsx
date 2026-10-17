import { isNonEmptyArray } from '@jblib/is'
import { type ReactElement } from 'react'

import { type ExperienceData } from '@/app/experience/types'
import { Stack } from '@/components/layout/Stack'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Link } from '@/components/ui/Link'
import { Typography } from '@/components/ui/Typography'
import { formatDate } from '@/lib/format/formatDate'

interface ExperienceCardProps {
  experience: ExperienceData
}

const ExperienceCard = ({ experience }: ExperienceCardProps): ReactElement => {
  return (
    <Stack orientation="horizontal">
      <div className="flex w-fit shrink-0 items-center justify-center">
        <Badge variant="outline">
          {`${formatDate(experience.startDate)} - ${experience.endDate ? formatDate(experience.endDate) : 'present'}`}
        </Badge>
      </div>
      <Link key={experience.slug} className="w-full" href={`/experience/${experience.slug}`}>
        <Card variant="gradient">
          <CardHeader>
            <CardTitle>{experience.title}</CardTitle>
            <CardDescription>{experience.location}</CardDescription>
          </CardHeader>
          <CardContent>
            <Typography size="sm" variant="p">
              {experience.description}
            </Typography>
          </CardContent>
          <CardFooter>
            {isNonEmptyArray(experience.tags) ? (
              <Stack orientation="horizontal" spacing="sm">
                {experience.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </Stack>
            ) : undefined}
          </CardFooter>
        </Card>
      </Link>
    </Stack>
  )
}

export { ExperienceCard }
