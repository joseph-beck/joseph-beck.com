import { contentDirectory } from '@/app/experience/contentDirectory'
import { Experience, type ExperienceData } from '@/app/experience/types'
import { getBySlug } from '@/lib/mdx/getBySlug'
import { getFromFile } from '@/lib/mdx/getFromFile'

const getExperienceBySlug = async (slug: string): Promise<ExperienceData | undefined> =>
  getBySlug<ExperienceData>({
    contentDirectory,
    getFn: async (filename) => {
      return getFromFile<Experience>({
        contentDirectory,
        filename,
        schema: Experience,
      })
    },
    slug,
  })

export { getExperienceBySlug }
