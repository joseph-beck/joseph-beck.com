import { isDefined } from '@jblib/is'
import { ViewTransition } from 'react'

import { content } from '@/app/experience/content/content'
import { ExperiencePage } from '@/app/experience/ExperiencePage'
import { Experience } from '@/app/experience/types'
import { type ExperienceData } from '@/app/experience/types'
import { Container } from '@/components/layout/Container'
import { Stack } from '@/components/layout/Stack'
import { BackArrow } from '@/components/navigation/BackArrow'
import { Typography } from '@/components/ui/Typography'
import { getContentBySlug } from '@/lib/mdx/getContentBySlug'
import { getContentFromFile } from '@/lib/mdx/getContentFromFile'

interface PageParams {
  slug: string
}
const Page = async ({ params }: { params: Promise<PageParams> }) => {
  const { slug } = await params

  const experience = getContentBySlug<ExperienceData>({
    content,
    getFn: (filename) => {
      return getContentFromFile<Experience>({
        content,
        filename,
        schema: Experience,
      })
    },
    slug,
  })

  return (
    <ViewTransition name={`experience-${slug}`}>
      <Container>
        <Stack className="w-full max-w-lg">
          <BackArrow href="/experience">back to experience</BackArrow>
          {isDefined(experience) ? (
            <ExperiencePage content={experience.content} experience={experience} />
          ) : (
            <Typography style="mono" variant="h5">
              sorry, experience {slug} could not be found
            </Typography>
          )}
        </Stack>
      </Container>
    </ViewTransition>
  )
}

export default Page
