// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { _React, AngularIcon, Gopher, MicrosoftAzure, MysqlIcon, Rust, TypescriptIcon } from '@dev.icons/react/mono'

import { Language } from '@/components/common/types'
import { Badge } from '@/components/ui/Badge'

interface LanguageBadgeProps {
  language: Language
}

const LanguageBadge = ({ language }: LanguageBadgeProps) => {
  switch (language) {
    case 'mysql':
      return (
        <Badge className="bg-blue-500 text-white">
          <MysqlIcon /> {language}
        </Badge>
      )
    case 'angular':
      return (
        <Badge className="bg-violet-700 text-white">
          <AngularIcon /> {language}
        </Badge>
      )
    case 'azure':
      return (
        <Badge className="bg-cyan-700 text-white">
          <MicrosoftAzure /> {language}
        </Badge>
      )
    case 'go':
      return (
        <Badge className="bg-blue-500 text-white">
          <Gopher /> {language}
        </Badge>
      )
    case 'typescript':
      return (
        <Badge className="bg-blue-600 text-white">
          <TypescriptIcon /> {language}
        </Badge>
      )
    case 'react':
      return (
        <Badge className="bg-blue-600 text-white">
          <_React /> {language}
        </Badge>
      )
    case 'rust':
      return (
        <Badge className="bg-orange-700 text-white">
          <Rust /> {language}
        </Badge>
      )
    default:
      return <Badge>{language}</Badge>
  }
}

export { Language, LanguageBadge }
