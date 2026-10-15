import { contentDirectory } from '@/app/experience/contentDirectory'
import { ExperienceCard } from '@/app/experience/ExperienceCard'
import { Experience } from '@/app/experience/types'
import { type ExperienceData } from '@/app/experience/types'
import { Container } from '@/components/layout/Container'
import { Stack } from '@/components/layout/Stack'
import { Link } from '@/components/ui/Link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs'
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

  const professionalExperiences = sortedExperiences.filter((experience) => experience.type === 'professional')

  const educationExperiences = sortedExperiences.filter((experience) => experience.type === 'education')

  return (
    <Container>
      <Stack className="w-full">
        <Typography variant="h2">experience</Typography>
        <Tabs>
          <Stack spacing="md">
            <TabsList variant="line">
              <TabsTrigger value="professional">professional</TabsTrigger>
              <TabsTrigger value="education">education</TabsTrigger>
              <TabsTrigger value="freelance">freelance</TabsTrigger>
              <TabsTrigger value="extra-curricular">extra curricular</TabsTrigger>
            </TabsList>
            <TabsContent value="professional">
              <Stack className="flex max-w-md">
                {professionalExperiences.map((experience) => (
                  <Link key={experience.slug} href={`/experience/${experience.slug}`}>
                    <ExperienceCard experience={experience} />
                  </Link>
                ))}
              </Stack>
            </TabsContent>
            <TabsContent value="education">
              <Stack className="flex max-w-md">
                {educationExperiences.map((experience) => (
                  <Link key={experience.slug} href={`/experience/${experience.slug}`}>
                    <ExperienceCard experience={experience} />
                  </Link>
                ))}
              </Stack>
            </TabsContent>
            <TabsContent value="freelance">freelance</TabsContent>
            <TabsContent value="extra-curricular">extra-curricular</TabsContent>
          </Stack>
        </Tabs>
      </Stack>
    </Container>
  )
}

export default Page
