import { isNonEmptyArray } from '@jblib/is'

import { contentDirectory } from '@/app/experience/contentDirectory'
import { ExperienceCard } from '@/app/experience/ExperienceCard'
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

  const sortedExperiences = experiences.toSorted((a, b) =>
    compareDates(a.endDate?.toISOString(), b.endDate?.toISOString()),
  )

  return (
    <Container>
      <Stack className="w-full">
        <Typography variant="h2">experience</Typography>
        <Stack className="flex max-w-lg">
          {isNonEmptyArray(sortedExperiences) ? (
            sortedExperiences.map((experience) => <ExperienceCard key={experience.slug} experience={experience} />)
          ) : (
            <Typography variant="p">nothing to see here...</Typography>
          )}
        </Stack>
      </Stack>
    </Container>
  )
}

export default Page
