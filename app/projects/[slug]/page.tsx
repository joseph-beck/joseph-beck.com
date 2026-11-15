import { isDefined } from '@jblib/is'
import { ViewTransition } from 'react'

import { content } from '@/app/projects/content/content'
import { ProjectPage } from '@/app/projects/ProjectPage'
import { Project } from '@/app/projects/types'
import { type ProjectData } from '@/app/projects/types'
import { Container } from '@/components/layout/Container'
import { Stack } from '@/components/layout/Stack'
import { BackArrow } from '@/components/navigation/BackArrow'
import { Typography } from '@/components/ui/Typography'
import { getContentBySlug } from '@/lib/mdx/getContentBySlug'
import { getContentFromFile } from '@/lib/mdx/getContentFromFile'

interface PageParams {
  slug: string
}

const Page = async ({ params }: { params: Promise<PageParams> }) => {
  const { slug } = await params

  const project = getContentBySlug<ProjectData>({
    content,
    getFn: (filename) => {
      return getContentFromFile<Project>({
        content,
        filename,
        schema: Project,
      })
    },
    slug,
  })

  return (
    <ViewTransition name={`project-${slug}`}>
      <Container>
        <Stack className="w-full max-w-lg">
          <BackArrow href="/projects">back to projects</BackArrow>
          {isDefined(project) ? (
            <ProjectPage content={project.content} project={project} />
          ) : (
            <Typography style="mono" variant="h5">
              sorry, project {slug} could not be found
            </Typography>
          )}
        </Stack>
      </Container>
    </ViewTransition>
  )
}

export default Page
