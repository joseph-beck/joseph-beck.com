import { type VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { cn } from 'cn'
import { type ComponentProps, type ReactElement } from 'react'

const stackVariants = cva('flex', {
  defaultVariants: {
    orientation: 'vertical',
    spacing: 'md',
  },
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
    spacing: {
      lg: 'gap-8',
      md: 'gap-4',
      sm: 'gap-2',
    },
  },
})

type StackProps = ComponentProps<'div'> & VariantProps<typeof stackVariants>

const Stack = ({ className, orientation, spacing, ...props }: StackProps): ReactElement => (
  <div
    className={cn(
      stackVariants({
        orientation,
        spacing,
      }),
      className,
    )}
    {...props}
  />
)

export { Stack }
