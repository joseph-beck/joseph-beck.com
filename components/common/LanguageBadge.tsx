import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _React,
  AngularIcon,
  C,
  CPlusplus,
  Docker,
  Gopher,
  Graphql,
  Java,
  MicrosoftAzure,
  MysqlIcon,
  NextjsIcon,
  Postgresql,
  Ruby,
  Rust,
  SqliteIcon,
  TypescriptIcon,
} from '@dev.icons/react/mono'
import { IconSql } from '@tabler/icons-react'

import { type Language } from '@/components/common/types'
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
    case 'sql':
      return (
        <Badge className="bg-blue-500 text-white">
          <IconSql /> {language}
        </Badge>
      )
    case 'sqlite':
      return (
        <Badge className="bg-cyan-800 text-white">
          <SqliteIcon /> {language}
        </Badge>
      )
    case 'postgresql':
      return (
        <Badge className="bg-blue-500 text-white">
          <Postgresql /> {language}
        </Badge>
      )
    case 'graphql':
      return (
        <Badge className="bg-pink-600 text-white">
          <Graphql /> {language}
        </Badge>
      )
    case 'next.js':
      return (
        <Badge className="bg-black text-white">
          <NextjsIcon /> {language}
        </Badge>
      )
    case 'docker':
      return (
        <Badge className="bg-blue-500 text-white">
          <Docker /> {language}
        </Badge>
      )
    case 'ruby':
      return (
        <Badge className="bg-red-500 text-white">
          <Ruby /> {language}
        </Badge>
      )
    case 'java':
      return (
        <Badge className="bg-red-600 text-white">
          <Java /> {language}
        </Badge>
      )
    case 'c':
      return (
        <Badge className="bg-gray-400 text-white">
          <C /> {language}
        </Badge>
      )
    case 'c++':
      return (
        <Badge className="bg-pink-700 text-white">
          <CPlusplus /> {language}
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

export { LanguageBadge }
