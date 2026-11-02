import { isDefined, isNonEmptyArray } from '@jblib/is'
import { IconBrandGithub } from '@tabler/icons-react'
import { type ReactElement, type ReactNode } from 'react'

import { type Project } from '@/app/projects/types'
import { LanguageBadge } from '@/components/common/LanguageBadge'
import { Stack } from '@/components/layout/Stack'
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Link } from '@/components/ui/Link'

interface ProjectPageProps {
  children: ReactNode
  project: Project
}

const ProjectPage = ({ children, project }: ProjectPageProps): ReactElement => {
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
            <Link href={project.repo} target="_blank">
              <IconBrandGithub />
            </Link>
          ) : undefined}
        </CardAction>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

export { ProjectPage }
