import { isNonEmptyArray } from '@jblib/is'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { type ReactElement } from 'react'

import { type Experience } from '@/app/experience/types'
import { LanguageBadge } from '@/components/common/LanguageBadge'
import { Prose } from '@/components/common/Prose'
import { Stack } from '@/components/layout/Stack'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

interface ExperiencePageProps {
  content: string
  experience: Experience
}

const ExperiencePage = ({ content, experience }: ExperiencePageProps): ReactElement => {
  return (
    <Card className="w-full" variant="invisible">
      <CardHeader>
        <CardTitle>{experience.title}</CardTitle>
        <CardDescription>
          <Stack spacing="md">
            {experience.description}
            <Stack orientation="horizontal" spacing="sm">
              {isNonEmptyArray(experience.tags)
                ? experience.tags.map((tag) => <LanguageBadge key={tag} language={tag} />)
                : undefined}
            </Stack>
          </Stack>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Prose>
          <MDXRemote source={content} />
        </Prose>
      </CardContent>
    </Card>
  )
}

export { ExperiencePage }
