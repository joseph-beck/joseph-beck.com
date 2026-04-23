import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { type ReactElement } from 'react'

import { ThemeProvider } from '@/components/theme/theme-provider'

const Root = (): ReactElement => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <hr />
    <div className="scroll-smooth p-4">
      <Outlet />
    </div>
    <TanStackRouterDevtools />
  </ThemeProvider>
)

const Route = createRootRoute({
  component: Root,
})

export { Route }
