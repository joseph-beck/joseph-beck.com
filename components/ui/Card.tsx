import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'
import * as React from 'react'

const cardVariants = cva(
  'group/card bg-card text-card-foreground ring-foreground/10 flex flex-col gap-(--card-spacing) overflow-hidden rounded-2xl py-(--card-spacing) text-sm ring-1 [--card-spacing:--spacing(6)] has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(4)] *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl transition-[transform,box-shadow] hover:-translate-y-0.5  hover:shadow-[0_14px_32px_rgb(0_0_0_/_0.24),inset_0_1px_0_rgb(255_255_255_/_0.18)]',
  {
    defaultVariants: {
      variant: 'default',
    },
    variants: {
      variant: {
        default: '',
        gradient:
          'hover:bg-accent hover:from-primary/10 hover:via-accent hover:ring-primary/33 w-full bg-transparent ring-0 transition-all hover:bg-linear-to-br hover:to-transparent hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.08)] hover:ring-1',
      },
    },
  },
)

type CardProps = {
  size?: 'default' | 'sm'
} & React.ComponentProps<'div'> &
  VariantProps<typeof cardVariants>

const Card = ({ className, size = 'default', variant, ...props }: CardProps) => {
  return (
    <div
      data-size={size}
      data-slot="card"
      className={cn(
        cardVariants({
          variant,
        }),
        className,
      )}
      {...props}
    />
  )
}

const CardHeader = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="card-header"
      className={cn(
        'group/card-header @container/card-header grid auto-rows-min items-start gap-2 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)',
        className,
      )}
      {...props}
    />
  )
}

const CardTitle = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('font-heading text-base font-medium', className)} data-slot="card-title" {...props} />
}

const CardDescription = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('text-muted-foreground text-sm', className)} data-slot="card-description" {...props} />
}

const CardAction = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className)}
      data-slot="card-action"
      {...props}
    />
  )
}

const CardContent = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('px-(--card-spacing)', className)} data-slot="card-content" {...props} />
}

const CardFooter = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn('flex items-center rounded-b-xl px-(--card-spacing) [.border-t]:pt-(--card-spacing)', className)}
      data-slot="card-footer"
      {...props}
    />
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, cardVariants }
