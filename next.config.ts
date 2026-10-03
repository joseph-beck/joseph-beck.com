import createMDX from '@next/mdx'
import { type NextConfig } from 'next'

const nextConfig: NextConfig = {}

const withMDX = createMDX({})

const config = withMDX(nextConfig)

export default config
