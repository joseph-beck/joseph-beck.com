'use client'

import { Container } from '@/components/layout/Container'
import { Stack } from '@/components/layout/Stack'
import { Button } from '@/components/ui/Button'
import { Link } from '@/components/ui/Link'
import { Typography } from '@/components/ui/Typography'

interface ErrorPageProps {
  error: { digest?: string } & Error
  reset: () => void
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  void error

  return (
    <Container className="items-center justify-center">
      <Stack className="w-full max-w-lg items-start" spacing="lg">
        <Typography style="mono" variant="h5">
          500 / something went wrong
        </Typography>
        <Stack spacing="sm">
          <Typography variant="h1">the page hit a snag.</Typography>
          <Typography intensity="muted">
            This is usually temporary. Try again, or head back home while I investigate what happened.
          </Typography>
        </Stack>
        <Stack orientation="horizontal" spacing="sm">
          <Button onClick={reset}>try again</Button>
          <Link
            className="border-border hover:bg-muted inline-flex h-9 items-center rounded-4xl border px-3 text-sm font-medium"
            href="/"
          >
            go home
          </Link>
        </Stack>
      </Stack>
    </Container>
  )
}

export default ErrorPage
