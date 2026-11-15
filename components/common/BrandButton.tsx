import { GithubIcon } from '@dev.icons/react/mono'
import { IconBrandLinkedinFilled } from '@tabler/icons-react'
import { type ComponentProps, type ReactElement } from 'react'

import { type Brand } from '@/components/common/types'
import { Button } from '@/components/ui/Button'

interface BrandButtonProps extends ComponentProps<typeof Button> {
  brand?: Brand
}

const BrandButton = ({ brand, children, ...props }: BrandButtonProps): ReactElement | undefined => {
  switch (brand) {
    case 'github': {
      return (
        <Button {...props}>
          <GithubIcon /> {children}
        </Button>
      )
    }
    case 'linkedin': {
      return (
        <Button {...props}>
          <IconBrandLinkedinFilled /> {children}
        </Button>
      )
    }
    default:
      return <Button {...props}>{children}</Button>
  }
}

export { BrandButton }
