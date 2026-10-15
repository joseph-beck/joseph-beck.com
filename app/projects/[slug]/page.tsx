import { contentDirectory } from '@/app/projects/contentDirectory'
import { ProjectPage } from '@/app/projects/ProjectPage'
import { Project } from '@/app/projects/types'
import { type ProjectData } from '@/app/projects/types'
import { Container } from '@/components/layout/Container'
import { Stack } from '@/components/layout/Stack'
import { Typography } from '@/components/ui/Typography'
import { getContentBySlug } from '@/lib/mdx/getContentBySlug'
import { getContentFromFile } from '@/lib/mdx/getContentFromFile'

interface PageParams {
  slug: string
}

const Page = async ({ params }: { params: Promise<PageParams> }) => {
  const { slug } = await params

  const project = await getContentBySlug<ProjectData>({
    contentDirectory,
    getFn: async (filename) => {
      return getContentFromFile<Project>({
        contentDirectory,
        filename,
        schema: Project,
      })
    },
    slug,
  })

  if (!project) {
    return (
      <Container>
        <Stack>
          <Typography style="mono" variant="h5">
            sorry, project {slug} could not be found
          </Typography>
        </Stack>
      </Container>
    )
  }

  return (
    <Container>
      <Stack className="w-full max-w-lg">
        <ProjectPage project={project}>{project.content}</ProjectPage>
      </Stack>
    </Container>
  )
}

export default Page
