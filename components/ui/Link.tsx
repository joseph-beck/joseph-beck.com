import { cn } from 'cn'
import NextLink from 'next/link'
import { type ComponentProps } from 'react'

type LinkProps = ComponentProps<typeof NextLink>

const Link = ({ children, className, href, ...props }: LinkProps) => {
  return (
    <NextLink className={cn('hover:underline', className)} href={href} {...props}>
      {children}
    </NextLink>
  )
}

export { Link }
