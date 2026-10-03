import { cn } from 'cn'
import NextLink from 'next/link'
import { type ComponentProps } from 'react'

type LinkProps = {
  underline?: boolean
} & ComponentProps<typeof NextLink>

const Link = ({ children, className, href, underline, ...props }: LinkProps) => {
  return (
    <NextLink className={cn(underline && 'hover:underline', className)} href={href} {...props}>
      {children}
    </NextLink>
  )
}

export { Link }
