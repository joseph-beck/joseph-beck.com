import { contentDirectory } from '@/app/experience/contentDirectory'
import { ExperienceCard } from '@/app/experience/ExperienceCard'
import { Experience } from '@/app/experience/types'
import { type ExperienceData } from '@/app/experience/types'
import { Container } from '@/components/layout/Container'
import { Stack } from '@/components/layout/Stack'
import { Link } from '@/components/ui/Link'
import { Typography } from '@/components/ui/Typography'
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

  const sortedExperiences = experiences.sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  })

  return (
    <Container>
      <Stack className="w-full">
        <Typography variant="h2">experience</Typography>
        <Stack className="flex max-w-md">
          {sortedExperiences.map((experience) => (
            <Link key={experience.slug} href={`/experience/${experience.slug}`}>
              <ExperienceCard experience={experience} />
            </Link>
          ))}
        </Stack>
      </Stack>
    </Container>
  )
}

export default Page
