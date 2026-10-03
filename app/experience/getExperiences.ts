import { contentDirectory } from '@/app/experience/contentDirectory'
import { Experience, type ExperienceData } from '@/app/experience/types'
import { getAll } from '@/lib/mdx/getAll'
import { getFromFile } from '@/lib/mdx/getFromFile'

const getExperiences = async (): Promise<ExperienceData[]> =>
  getAll<ExperienceData>({
    contentDirectory,
    getFn: async (filename) => {
      return getFromFile<Experience>({
        contentDirectory,
        filename,
        schema: Experience,
      })
    },
  })

export { getExperiences }
