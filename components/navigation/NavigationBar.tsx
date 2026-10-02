import { Separator } from '@base-ui/react/separator'
import { type ReactElement } from 'react'

import { Stack } from '../layout/Stack'
import { Link } from '../ui/Link'
import { Typography } from '../ui/Typography'

const NavigationBar = (): ReactElement => {
  return (
    <Stack className="items-center gap-4 p-6" orientation="horizontal">
      <Link href="/">
        <Typography style="mono">home</Typography>
      </Link>
      <Separator orientation="vertical" />
      <Link href="/projects">
        <Typography style="mono">projects</Typography>
      </Link>
      <Separator orientation="vertical" />
      <Link href="/experience">
        <Typography style="mono">experience</Typography>
      </Link>
      <Separator orientation="vertical" />
      <Link href="/blog">
        <Typography style="mono">blog</Typography>
      </Link>
    </Stack>
  )
}

export { NavigationBar }
