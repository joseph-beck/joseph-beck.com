import path from 'path'

const getSlug = (filename: string): string => {
  return path.basename(filename, path.extname(filename))
}

export { getSlug }
