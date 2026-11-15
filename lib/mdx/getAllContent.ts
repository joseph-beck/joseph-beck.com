import { type BaseData } from '@/lib/mdx/types'

interface GetAllContentParams<TData extends BaseData> {
  content: Record<string, string>
  getFn: (filename: string) => TData
}

const getAllContent = <TData extends BaseData>({ content, getFn }: GetAllContentParams<TData>): TData[] => {
  const filenames = Object.keys(content)

  const data = filenames.filter((filename) => filename.endsWith('.mdx')).map(getFn)

  return data
}

export { getAllContent }
