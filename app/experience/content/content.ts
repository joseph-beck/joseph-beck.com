import amadeus from '@/app/experience/content/amadeus.mdx' with { turbopackModuleType: 'raw' }
import compsocCompetitionsDirector from '@/app/experience/content/compsoc-competitions-director.mdx' with {
  turbopackModuleType: 'raw',
}
import compsocTreasurer from '@/app/experience/content/compsoc-treasurer.mdx' with { turbopackModuleType: 'raw' }
import lxPat from '@/app/experience/content/lx-pat.mdx' with { turbopackModuleType: 'raw' }
import mohcFullStack from '@/app/experience/content/mohc-full-stack.mdx' with { turbopackModuleType: 'raw' }
import mohcJuniorFullStack from '@/app/experience/content/mohc-junior-full-stack.mdx' with {
  turbopackModuleType: 'raw',
}
import rhul from '@/app/experience/content/rhul.mdx' with { turbopackModuleType: 'raw' }
import rhulResearchAssistant from '@/app/experience/content/rhul-research-assistant.mdx' with {
  turbopackModuleType: 'raw',
}
import rhulTeachingAssistant from '@/app/experience/content/rhul-teaching-assistant.mdx' with {
  turbopackModuleType: 'raw',
}

const content = {
  'amadeus.mdx': amadeus,
  'compsoc-competitions-director.mdx': compsocCompetitionsDirector,
  'compsoc-treasurer.mdx': compsocTreasurer,
  'lx-pat.mdx': lxPat,
  'mohc-full-stack.mdx': mohcFullStack,
  'mohc-junior-full-stack.mdx': mohcJuniorFullStack,
  'rhul-research-assistant.mdx': rhulResearchAssistant,
  'rhul-teaching-assistant.mdx': rhulTeachingAssistant,
  'rhul.mdx': rhul,
} as const

export { content }
