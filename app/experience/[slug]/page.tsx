import { ExperiencePage } from '@/app/experience/ExperiencePage'
import { getExperienceBySlug } from '@/app/experience/getExperienceBySlug'
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
      <Stack className="flex min-h-svh p-6">
        <Typography>experience not found</Typography>
      </Stack>
    )
  }

  return (
    <Stack className="flex min-h-svh p-6">
      <ExperiencePage experience={experience}>{experience.content}</ExperiencePage>
    </Stack>
  )
}

export default Page
