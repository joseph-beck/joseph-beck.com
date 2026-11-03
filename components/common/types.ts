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

const brand = z.union([z.literal(['github', 'linkedin']), z.string()])

const Brand = z.compile(brand)

type Brand = z.infer<typeof brand>

export { Brand, Language }
