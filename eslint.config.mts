import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths'

import { jblibConfig } from '@jblib/eslint'
import { jblibJsonConfig } from '@jblib/eslint-json'
import { jblibNextConfig } from '@jblib/eslint-next'
import { jblibReactConfig } from '@jblib/eslint-react'
import { type Linter } from 'eslint'

const config: Linter.Config[] = [
  ...jblibConfig,
  ...jblibReactConfig,
  ...jblibJsonConfig,
  ...jblibNextConfig,
  {
    ignores: ['**/*.mjs', '**/*.mts', 'next.config.ts', 'open-next.config.ts', '.open-next/**', '.wrangler/**'],
  },
  {
    plugins: {
      'no-relative-import-paths': noRelativeImportPaths,
    },
    rules: {
      'no-relative-import-paths/no-relative-import-paths': ['error', { rootDir: '.', prefix: '@' }],
    },
  },
]

export default config
