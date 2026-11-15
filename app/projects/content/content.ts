import amp from '@/app/projects/content/amp.mdx?raw'
import battleships from '@/app/projects/content/battleships.mdx?raw'
import gear from '@/app/projects/content/gear.mdx?raw'
import hackAndSeek from '@/app/projects/content/hack-and-seek.mdx?raw'
import hangmanRobot from '@/app/projects/content/hangman-robot.mdx?raw'
import josephBeck from '@/app/projects/content/joseph-beck.mdx?raw'
import oaxaca from '@/app/projects/content/oaxaca.mdx?raw'
import openBotBrain from '@/app/projects/content/open-bot-brain.mdx?raw'
import ppeg from '@/app/projects/content/ppeg.mdx?raw'
import pratt from '@/app/projects/content/pratt.mdx?raw'
import royalHackawayV9 from '@/app/projects/content/royal-hackaway-v9.mdx?raw'
import rustedAttractors from '@/app/projects/content/rusted-attractors.mdx?raw'
import tuner from '@/app/projects/content/tuner.mdx?raw'

const content = {
  'amp.mdx': amp,
  'battleships.mdx': battleships,
  'gear.mdx': gear,
  'hack-and-seek.mdx': hackAndSeek,
  'hangman-robot.mdx': hangmanRobot,
  'joseph-beck.mdx': josephBeck,
  'oaxaca.mdx': oaxaca,
  'open-bot-brain.mdx': openBotBrain,
  'ppeg.mdx': ppeg,
  'pratt.mdx': pratt,
  'royal-hackaway-v9.mdx': royalHackawayV9,
  'rusted-attractors.mdx': rustedAttractors,
  'tuner.mdx': tuner,
} as const

export { content }
