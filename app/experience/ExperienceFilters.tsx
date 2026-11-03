'use client'

import { isNonEmptyArray } from '@jblib/is'
import { type ReactElement, useState } from 'react'

import { ExperienceCard } from '@/app/experience/ExperienceCard'
import { getExperienceTypeString } from '@/app/experience/getExperienceTypeString'
import { type ExperienceData, ExperienceType } from '@/app/experience/types'
import { Stack } from '@/components/layout/Stack'
import { Button } from '@/components/ui/Button'
import { Typography } from '@/components/ui/Typography'

interface ExperienceFiltersProps {
  experiences: ExperienceData[]
}

const ExperienceFilters = ({ experiences }: ExperienceFiltersProps): ReactElement => {
  const [selectedType, setSelectedType] = useState('all')

  const filteredExperiences =
    selectedType === 'all' ? experiences : experiences.filter((experience) => experience.type === selectedType)

  const options = ['all', ...ExperienceType.options] as const

  return (
    <Stack spacing="md">
      <Stack className="flex-wrap" orientation="horizontal" spacing="sm">
        {options.map((type) => (
          <Button
            key={type}
            size="sm"
            variant={selectedType === type ? 'default' : 'outline'}
            onClick={() => {
              setSelectedType(type)
            }}
          >
            {getExperienceTypeString(type)}
          </Button>
        ))}
      </Stack>
      <Stack>
        {isNonEmptyArray(filteredExperiences) ? (
          filteredExperiences.map((experience) => <ExperienceCard key={experience.slug} experience={experience} />)
        ) : (
          <Typography variant="p">nothing to see here...</Typography>
        )}
      </Stack>
    </Stack>
  )
}

export { ExperienceFilters }
