import { createFileRoute } from '@tanstack/react-router'
import { type ReactElement } from 'react'

const Page = (): ReactElement => {
  return <div>coming soon...</div>
}

const Route = createFileRoute('/blog')({
  component: Page,
})

export { Route }
