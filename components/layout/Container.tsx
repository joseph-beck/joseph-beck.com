import { cn } from 'cn'
import { type ComponentProps, type ReactElement } from 'react'

type ContainerProps = ComponentProps<'div'>

const Container = ({ children, className }: ContainerProps): ReactElement => {
  return <div className={cn(className, 'flex min-h-svh p-6')}>{children}</div>
}

export { Container }
