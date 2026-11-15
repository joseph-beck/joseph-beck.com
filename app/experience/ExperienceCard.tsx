import { isDefined, isNonEmptyArray } from '@jblib/is'
import { type ReactElement } from 'react'
import { ViewTransition } from 'react'

import { getExperienceTypeString } from '@/app/experience/getExperienceTypeString'
import { type ExperienceData } from '@/app/experience/types'
import { LanguageBadge } from '@/components/common/LanguageBadge'
import { Stack } from '@/components/layout/Stack'
import { Badge } from '@/components/ui/Badge'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Link } from '@/components/ui/Link'
import { Typography } from '@/components/ui/Typography'
import { getDateRange } from '@/lib/date/getDateRange'

interface ExperienceCardProps {
  experience: ExperienceData
}

const ExperienceCard = ({ experience }: ExperienceCardProps): ReactElement => {
  const dateRange = getDateRange(experience.startDate, experience.endDate)

  return (
    <Stack orientation="horizontal">
      <Link key={experience.slug} className="w-full" href={`/experience/${experience.slug}`}>
        <ViewTransition name={`experience-${experience.slug}`}>
          <Card variant="gradient">
            <CardHeader>
              <CardTitle>{experience.title}</CardTitle>
              {isDefined(experience.location) ? <CardDescription>{experience.location}</CardDescription> : undefined}
              <CardAction>
                <Stack orientation="horizontal" spacing="sm">
                  <Badge>{getExperienceTypeString(experience.type)}</Badge>
                  {isDefined(dateRange) ? <Badge variant="outline">{dateRange}</Badge> : undefined}{' '}
                </Stack>
              </CardAction>
            </CardHeader>
            {isDefined(experience.description) ? (
              <CardContent>
                <Typography size="sm" variant="p">
                  {experience.description}
                </Typography>
              </CardContent>
            ) : undefined}
            <CardFooter>
              {isNonEmptyArray(experience.tags) ? (
                <Stack orientation="horizontal" spacing="sm">
                  {experience.tags.map((tag) => (
                    <LanguageBadge key={tag} language={tag} />
                  ))}
                </Stack>
              ) : undefined}
            </CardFooter>
          </Card>
        </ViewTransition>
      </Link>
    </Stack>
  )
}

export { ExperienceCard }
