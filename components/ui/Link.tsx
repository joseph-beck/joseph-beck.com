'use client'

import { cn } from 'cn'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { type ComponentProps } from 'react'

import { getLinkActive } from '@/components/ui/getLinkActive'

type LinkProps = {
  styleActive?: boolean
  underline?: boolean
} & ComponentProps<typeof NextLink>

const Link = ({ children, className, href, styleActive, underline, ...props }: LinkProps) => {
  const pathname = usePathname()

  const hrefPath = typeof href === 'string' ? href : href.pathname

  const isActive = styleActive && getLinkActive(pathname, hrefPath ?? '')

  return (
    <NextLink
      {...props}
      aria-current={isActive ? 'page' : undefined}
      href={href}
      className={cn(
        underline && 'hover:underline',
        isActive && 'font-bold underline underline-offset-4 *:font-bold!',
        className,
      )}
    >
      {children}
    </NextLink>
  )
}

export { Link }
