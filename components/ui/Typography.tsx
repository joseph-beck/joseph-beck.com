import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'
import { type ElementType, type ReactElement, type ReactNode } from 'react'

const typographyVariants = cva('', {
  defaultVariants: {
    align: 'left',
    decoration: 'none',
    size: 'default',
    style: 'default',
    variant: 'p',
    weight: 'normal',
  },
  variants: {
    align: {
      center: 'text-center',
      left: 'text-left',
      right: 'text-right',
    },
    decoration: {
      lineThrough: 'line-through',
      none: 'no-underline',
      overline: 'overline',
      underline: 'underline',
    },
    size: {
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
      default: '',
      lg: 'text-lg',
      md: 'text-base',
      sm: 'text-sm',
      xl: 'text-xl',
      xs: 'text-xs',
    },
    style: {
      default: '',
      italic: 'italic',
      mono: 'font-mono',
    },
    variant: {
      blockquote: 'border-l-2 border-border pl-4 text-lg leading-8 text-muted-foreground italic',
      code: 'rounded bg-muted px-1.5 py-0.5 font-mono text-[0.875em]',
      em: 'italic',
      h1: 'font-heading text-4xl font-semibold tracking-tight sm:text-5xl',
      h2: 'font-heading text-3xl font-semibold tracking-tight',
      h3: 'font-heading text-2xl font-semibold tracking-tight',
      h4: 'font-heading text-xl font-semibold',
      h5: 'font-heading text-lg font-semibold',
      h6: 'font-heading text-base font-semibold',
      p: 'text-base leading-7',
      span: '',
    },
    weight: {
      black: 'font-black',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      extralight: 'font-extralight',
      light: 'font-light',
      medium: 'font-medium',
      normal: 'font-normal',
      semibold: 'font-semibold',
      thin: 'font-thin',
    },
  },
})

type TypographyProps = {
  children: ReactNode
  className?: string
  component?: ElementType
} & VariantProps<typeof typographyVariants>

const Typography = ({
  align,
  children,
  className,
  component,
  decoration,
  size,
  style,
  variant,
  weight,
  ...props
}: TypographyProps): ReactElement => {
  const Component = component ?? (variant as ElementType) ?? 'p'

  return (
    <Component
      data-slot="typography"
      className={cn(
        typographyVariants({
          align,
          decoration,
          size,
          style,
          variant,
          weight,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { Typography, typographyVariants }
