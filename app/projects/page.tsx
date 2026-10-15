import { contentDirectory } from '@/app/projects/contentDirectory'
import { ProjectCard } from '@/app/projects/ProjectCard'
import { Project } from '@/app/projects/types'
import { type ProjectData } from '@/app/projects/types'
import { Container } from '@/components/layout/Container'
import { Stack } from '@/components/layout/Stack'
import { Link } from '@/components/ui/Link'
import { Typography } from '@/components/ui/Typography'
import { getAllContent } from '@/lib/mdx/getAllContent'
import { getContentFromFile } from '@/lib/mdx/getContentFromFile'

const Page = async () => {
  const projects = await getAllContent<ProjectData>({
    contentDirectory,
    getFn: async (filename) => {
      return getContentFromFile<Project>({
        contentDirectory,
        filename,
        schema: Project,
      })
    },
  })

  return (
    <Container>
      <Stack className="w-full">
        <Typography variant="h2">projects</Typography>
        <Stack className="flex max-w-md">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <ProjectCard project={project} />
            </Link>
          ))}
        </Stack>
      </Stack>
    </Container>
  )
}

export default Page
