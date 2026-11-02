import * as z from 'zod'

const language = z.union([
  z.literal([
    'go',
    'typescript',
    'rust',
    'azure',
    'mysql',
    'react',
    'angular',
    'ruby',
    'java',
    'c',
    'c++',
    'sql',
    'docker',
    'graphql',
    'next.js',
    'sqlite',
    'postgresql',
    'python',
    'c#',
    'firebase',
  ]),
  z.string(),
])

const Language = z.compile(language)

type Language = z.infer<typeof language>

export { Language }
