import './globals.css'

import { cn } from 'cn'
import { type Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import { NavigationBar } from '@/components/navigation/NavigationBar'
import { ThemeProvider } from '@/components/theme/ThemeProvider'

const geistMonoHeading = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-heading',
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

const metadata: Metadata = {
  description: 'stuff and things',
  title: 'joseph',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html
      suppressHydrationWarning
      className={cn('antialiased', fontMono.variable, 'font-sans', geist.variable, geistMonoHeading.variable)}
      lang="en"
    >
      <body>
        <ThemeProvider>
          <NavigationBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout

// eslint-disable-next-line react-refresh/only-export-components
export { metadata }
