import { ProjectCard } from '@/app/projects/ProjectCard'
import { Container } from '@/components/layout/Container'
import { Stack } from '@/components/layout/Stack'
import { Typography } from '@/components/ui/Typography'

const Page = () => {
  return (
    <Container>
      <Stack>
        <Typography variant="h2">projects</Typography>
        <Stack className="flex max-w-md">
          <ProjectCard
            project={{
              description: 'description.',
              title: 'project',
            }}
          />
          <ProjectCard
            project={{
              description: 'description.',
              link: 'https://joseph-beck.com',
              title: 'project',
            }}
          />
        </Stack>
      </Stack>
    </Container>
  )
}

export default Page
