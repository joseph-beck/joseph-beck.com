import { ExperiencePage } from '@/app/experience/ExperiencePage'
import { getExperienceBySlug } from '@/app/experience/getExperienceBySlug'
import { Container } from '@/components/layout/Container'
import { Stack } from '@/components/layout/Stack'
import { Typography } from '@/components/ui/Typography'

interface PageParams {
  slug: string
}

const Page = async ({ params }: { params: Promise<PageParams> }) => {
  const { slug } = await params

  const experience = await getExperienceBySlug(slug)

  if (!experience) {
    return (
      <Container>
        <Stack>
          <Typography>experience not found</Typography>
        </Stack>
      </Container>
    )
  }

  return (
    <Container>
      <Stack>
        <ExperiencePage experience={experience}>{experience.content}</ExperiencePage>
      </Stack>
    </Container>
  )
}

export default Page
