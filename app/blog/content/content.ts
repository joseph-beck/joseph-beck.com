import blog from '@/app/blog/content/blog.mdx' with { turbopackModuleType: 'raw' }

const content = {
  'blog.mdx': blog,
} as const

export { content }
