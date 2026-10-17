import { IconArrowBack } from '@tabler/icons-react'
import { type ReactElement, type ReactNode } from 'react'

import { Stack } from '@/components/layout/Stack'
import { Link } from '@/components/ui/Link'
import { Typography } from '@/components/ui/Typography'

interface BackArrowProps {
  children: ReactNode
  href: string
}

const BackArrow = ({ children, href }: BackArrowProps): ReactElement => {
  return (
    <Link href={href}>
      <Stack className="items-center" orientation="horizontal" spacing="sm">
        <IconArrowBack className="h-4 w-4" />
        <Typography style="mono">{children}</Typography>
      </Stack>
    </Link>
  )
}

export { BackArrow }
