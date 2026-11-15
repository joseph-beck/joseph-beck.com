import amadeus from '@/app/experience/content/amadeus.mdx?raw'
import compsocCompetitionsDirector from '@/app/experience/content/compsoc-competitions-director.mdx?raw'
import compsocTreasurer from '@/app/experience/content/compsoc-treasurer.mdx?raw'
import lxPat from '@/app/experience/content/lx-pat.mdx?raw'
import mohcFullStack from '@/app/experience/content/mohc-full-stack.mdx?raw'
import mohcJuniorFullStack from '@/app/experience/content/mohc-junior-full-stack.mdx?raw'
import rhul from '@/app/experience/content/rhul.mdx?raw'
import rhulResearchAssistant from '@/app/experience/content/rhul-research-assistant.mdx?raw'
import rhulTeachingAssistant from '@/app/experience/content/rhul-teaching-assistant.mdx?raw'

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
