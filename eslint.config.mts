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
    ignores: ['**/*.mjs', '**/*.mts'],
  },
]

export default config
