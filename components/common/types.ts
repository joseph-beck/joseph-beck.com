import * as z from 'zod'

const language = z.union([z.literal(['go', 'typescript', 'rust', 'azure', 'mysql', 'react', 'angular']), z.string()])

const Language = z.compile(language)

type Language = z.infer<typeof language>

export { Language }
