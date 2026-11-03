import { GithubIcon } from '@dev.icons/react/mono'
import { isDefined, isNonEmptyArray } from '@jblib/is'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { type ReactElement } from 'react'

import { type Project } from '@/app/projects/types'
import { LanguageBadge } from '@/components/common/LanguageBadge'
import { Prose } from '@/components/common/Prose'
import { Stack } from '@/components/layout/Stack'
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Link } from '@/components/ui/Link'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/Tooltip'
import { Typography } from '@/components/ui/Typography'

interface ProjectPageProps {
  content: string
  project: Project
}

const ProjectPage = ({ content, project }: ProjectPageProps): ReactElement => {
  return (
    <Card className="w-full" variant="invisible">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>
          <Stack spacing="md">
            {project.description}
            <Stack orientation="horizontal" spacing="sm">
              {isNonEmptyArray(project.languages)
                ? project.languages.map((language) => <LanguageBadge key={language} language={language} />)
                : undefined}
            </Stack>
          </Stack>
        </CardDescription>
        <CardAction>
          {isDefined(project.repo) ? (
            <Tooltip>
              <TooltipTrigger
                render={
                  <Link href={project.repo} target="_blank">
                    <GithubIcon size={24} />
                  </Link>
                }
              />
              <TooltipContent sideOffset={8}>
                <Typography size="xs" variant="p">
                  check it out on github
                </Typography>
              </TooltipContent>
            </Tooltip>
          ) : undefined}
        </CardAction>
      </CardHeader>
      <CardContent>
        <Prose>
          <MDXRemote source={content} />
        </Prose>
      </CardContent>
    </Card>
  )
}

export { ProjectPage }
