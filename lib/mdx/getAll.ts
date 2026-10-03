import { readdir } from 'fs/promises'

import { type BaseData } from '@/lib/mdx/types'

interface GetAllParams<TData extends BaseData> {
  contentDirectory: string
  getFn: (filename: string) => Promise<TData>
}

const getAll = async <TData extends BaseData>({ contentDirectory, getFn }: GetAllParams<TData>): Promise<TData[]> => {
  const filenames = await readdir(contentDirectory)

  const data = await Promise.all(filenames.filter((filename) => filename.endsWith('.mdx')).map(getFn))

  return data
}

export { getAll }
