import { type NextConfig } from 'next'

const nextConfig: NextConfig = {}

const config = nextConfig

export default config

// eslint-disable-next-line @typescript-eslint/no-floating-promises
import('@opennextjs/cloudflare').then((m) => m.initOpenNextCloudflareForDev())
