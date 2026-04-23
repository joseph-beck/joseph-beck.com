import { createFileRoute, Link } from '@tanstack/react-router'
import { type ReactElement } from 'react'

import { Button } from '@/ui/button'

const Page = (): ReactElement => {
  return (
    <div className="flex flex-col">
      <h1>hi, i'm joseph</h1>
      <div className="inline-flex gap-x-2">
        <Link to="/experience">
          <Button>experience</Button>
        </Link>
        <Link to="/projects">
          <Button>projects</Button>
        </Link>
        <Link to="/blog">
          <Button>blog</Button>
        </Link>
      </div>
    </div>
  )
}

const Route = createFileRoute('/')({
  component: Page,
})

export { Route }
