import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ReactElement } from 'react';

import { ThemeProvider } from '@/components/theme/theme';
import { ThemeToggle } from '@/components/theme/theme-toggle';

const Root = (): ReactElement => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className="p-2 flex gap-2">
      <ThemeToggle />
    </div>
    <hr />
    <div className="scroll-smooth">
      <Outlet />
    </div>
    <TanStackRouterDevtools />
  </ThemeProvider>
);

const Route = createRootRoute({
  component: Root,
});

export { Route };
