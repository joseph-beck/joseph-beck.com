import { contentDirectory } from '@/app/experience/contentDirectory'
import { ExperienceFilters } from '@/app/experience/ExperienceFilters'
import { Experience } from '@/app/experience/types'
import { type ExperienceData } from '@/app/experience/types'
import { Container } from '@/components/layout/Container'
import { Stack } from '@/components/layout/Stack'
import { Typography } from '@/components/ui/Typography'
import { compareDates } from '@/lib/date/compareDates'
import { getAllContent } from '@/lib/mdx/getAllContent'
import { getContentFromFile } from '@/lib/mdx/getContentFromFile'

const Page = async () => {
  const experiences = await getAllContent<ExperienceData>({
    contentDirectory,
    getFn: async (filename) => {
      return getContentFromFile<Experience>({
        contentDirectory,
        filename,
        schema: Experience,
      })
    },
  })

  const sortedExperiences = experiences.toSorted((a, b) => {
    const endDateCompare = compareDates(a.endDate?.toISOString(), b.endDate?.toISOString())

    if (endDateCompare !== 0) {
      return endDateCompare
    }

    return compareDates(a.startDate?.toISOString(), b.startDate?.toISOString())
  })

  return (
    <Container>
      <Stack className="w-full">
        <Typography variant="h2">experience</Typography>
        <Stack className="max-w-xl">
          <ExperienceFilters experiences={sortedExperiences} />
        </Stack>
      </Stack>
    </Container>
  )
}

export default Page
