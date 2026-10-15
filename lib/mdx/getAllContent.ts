import { readdir } from 'fs/promises'

import { type BaseData } from '@/lib/mdx/types'

interface GetAllContentParams<TData extends BaseData> {
  contentDirectory: string
  getFn: (filename: string) => Promise<TData>
}

const getAllContent = async <TData extends BaseData>({
  contentDirectory,
  getFn,
}: GetAllContentParams<TData>): Promise<TData[]> => {
  const filenames = await readdir(contentDirectory)

  const data = await Promise.all(filenames.filter((filename) => filename.endsWith('.mdx')).map(getFn))

  return data
}

export { getAllContent }
