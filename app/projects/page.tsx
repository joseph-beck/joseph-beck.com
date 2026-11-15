import { content } from '@/app/projects/content/content'
import { ProjectCard } from '@/app/projects/ProjectCard'
import { Project } from '@/app/projects/types'
import { type ProjectData } from '@/app/projects/types'
import { Container } from '@/components/layout/Container'
import { Stack } from '@/components/layout/Stack'
import { Typography } from '@/components/ui/Typography'
import { getAllContent } from '@/lib/mdx/getAllContent'
import { getContentFromFile } from '@/lib/mdx/getContentFromFile'

const Page = () => {
  const projects = getAllContent<ProjectData>({
    content,
    getFn: (filename) => {
      return getContentFromFile<Project>({
        content,
        filename,
        schema: Project,
      })
    },
  })

  const sortedProjects = projects.sort((a, b) => {
    return b.priority - a.priority
  })

  return (
    <Container>
      <Stack className="w-full">
        <Typography variant="h2">projects</Typography>
        <Stack className="flex max-w-xl">
          {sortedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </Stack>
      </Stack>
    </Container>
  )
}

export default Page
