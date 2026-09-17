import { createFileRoute } from '@tanstack/react-router'
import { type ReactElement } from 'react'

const Page = (): ReactElement => {
  return <div>Hello "/projects"!</div>
}

const Route = createFileRoute('/projects')({
  component: Page,
})

export { Route }
