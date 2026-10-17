import { isNonEmptyArray } from '@jblib/is'

import { contentDirectory } from '@/app/experience/contentDirectory'
import { ExperienceCard } from '@/app/experience/ExperienceCard'
import { Experience } from '@/app/experience/types'
import { type ExperienceData } from '@/app/experience/types'
import { Container } from '@/components/layout/Container'
import { Stack } from '@/components/layout/Stack'
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

  const sortedExperiences = experiences.toSorted((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  })

  const professionalExperiences = sortedExperiences.filter((experience) => experience.type === 'professional')

  const educationExperiences = sortedExperiences.filter((experience) => experience.type === 'education')

  const freelanceExperiences = sortedExperiences.filter((experience) => experience.type === 'freelance')

  const extraCurricularExperiences = sortedExperiences.filter((experience) => experience.type === 'extra-curricular')

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
              <Stack className="flex max-w-lg">
                {isNonEmptyArray(professionalExperiences) ? (
                  professionalExperiences.map((experience) => (
                    <ExperienceCard key={experience.slug} experience={experience} />
                  ))
                ) : (
                  <Typography variant="p">nothing to see here...</Typography>
                )}
              </Stack>
            </TabsContent>
            <TabsContent value="education">
              <Stack className="flex max-w-lg">
                {isNonEmptyArray(educationExperiences) ? (
                  educationExperiences.map((experience) => (
                    <ExperienceCard key={experience.slug} experience={experience} />
                  ))
                ) : (
                  <Typography variant="p">nothing to see here...</Typography>
                )}
              </Stack>
            </TabsContent>
            <TabsContent value="freelance">
              <Stack className="flex max-w-lg">
                {isNonEmptyArray(freelanceExperiences) ? (
                  freelanceExperiences.map((experience) => (
                    <ExperienceCard key={experience.slug} experience={experience} />
                  ))
                ) : (
                  <Typography variant="p">nothing to see here...</Typography>
                )}
              </Stack>
            </TabsContent>
            <TabsContent value="extra-curricular">
              <Stack className="flex max-w-lg">
                {isNonEmptyArray(extraCurricularExperiences) ? (
                  extraCurricularExperiences.map((experience) => (
                    <ExperienceCard key={experience.slug} experience={experience} />
                  ))
                ) : (
                  <Typography variant="p">nothing to see here...</Typography>
                )}
              </Stack>
            </TabsContent>
          </Stack>
        </Tabs>
      </Stack>
    </Container>
  )
}

export default Page
