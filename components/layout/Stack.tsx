import { cn } from 'cn'
import { type ComponentProps, type ReactElement } from 'react'

const spacings = {
  lg: 'gap-8',
  md: 'gap-4',
  sm: 'gap-2',
} as const

type StackSpacing = keyof typeof spacings

type StackProps = {
  className?: string
  orientation?: 'horizontal' | 'vertical'
  spacing?: StackSpacing
} & ComponentProps<'div'>

const Stack = ({ className, orientation = 'vertical', spacing = 'md', ...props }: StackProps): ReactElement => (
  <div
    className={cn(orientation === 'vertical' ? 'flex flex-col' : 'flex flex-row', spacings[spacing], className)}
    {...props}
  />
)

export { Stack }
