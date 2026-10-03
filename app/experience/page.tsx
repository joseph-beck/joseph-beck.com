import { ExperienceCard } from '@/app/experience/ExperienceCard'
import { getExperiences } from '@/app/experience/getExperiences'
import { Stack } from '@/components/layout/Stack'
import { Link } from '@/components/ui/Link'
import { Typography } from '@/components/ui/Typography'

const Page = async () => {
  const experiences = await getExperiences()

  return (
    <Stack className="flex min-h-svh p-6">
      <Typography variant="h2">experience</Typography>
      <Stack className="flex max-w-md">
        {experiences.map((experience) => (
          <Link key={experience.slug} href={`/experience/${experience.slug}`}>
            <ExperienceCard experience={experience} />
          </Link>
        ))}
      </Stack>
    </Stack>
  )
}

export default Page
