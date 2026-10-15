import { contentDirectory } from '@/app/experience/contentDirectory'
import { ExperiencePage } from '@/app/experience/ExperiencePage'
import { Experience } from '@/app/experience/types'
import { type ExperienceData } from '@/app/experience/types'
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

  const experience = await getContentBySlug<ExperienceData>({
    contentDirectory,
    getFn: async (filename) => {
      return getContentFromFile<Experience>({
        contentDirectory,
        filename,
        schema: Experience,
      })
    },
    slug,
  })

  if (!experience) {
    return (
      <Container>
        <Stack>
          <Typography style="mono" variant="h5">
            sorry, experience {slug} could not be found
          </Typography>
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
