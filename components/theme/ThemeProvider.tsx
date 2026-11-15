'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ComponentProps, type ReactElement, type ReactNode } from 'react'

interface ThemeProviderProps extends ComponentProps<typeof NextThemesProvider> {
  children?: ReactNode
}

const ThemeProvider = ({ children, ...props }: ThemeProviderProps): ReactElement => (
  <NextThemesProvider disableTransitionOnChange enableSystem attribute="class" defaultTheme="dark" {...props}>
    {children}
  </NextThemesProvider>
)

export { ThemeProvider }
