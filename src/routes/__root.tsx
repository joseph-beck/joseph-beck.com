import { ThemeProvider } from '@/components/theme/theme';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
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
  ),
});
