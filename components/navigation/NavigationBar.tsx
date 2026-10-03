import { type ReactElement } from 'react'

import { Stack } from '@/components/layout/Stack'
import { Link } from '@/components/ui/Link'
import { Separator } from '@/components/ui/Separator'
import { Typography } from '@/components/ui/Typography'

const NavigationBar = (): ReactElement => {
  return (
    <Stack className="items-center gap-4 p-6" orientation="horizontal">
      <Link underline href="/">
        <Typography style="mono">home</Typography>
      </Link>
      <Separator className="bg-primary" orientation="vertical" />
      <Link underline href="/projects">
        <Typography style="mono">projects</Typography>
      </Link>
      <Separator className="bg-primary" orientation="vertical" />
      <Link underline href="/experience">
        <Typography style="mono">experience</Typography>
      </Link>
      <Separator className="bg-primary" orientation="vertical" />
      <Link underline href="/blog">
        <Typography style="mono">blog</Typography>
      </Link>
    </Stack>
  )
}

export { NavigationBar }
