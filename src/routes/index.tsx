import { createFileRoute } from '@tanstack/react-router'
import { type ReactElement } from 'react'

import { Button } from '@/ui/button'

const Page = (): ReactElement => {
  return (
    <div className="p-2">
      <h1>title</h1>
      <p>body</p>
      <code>code</code>
      <div className="flex justify-center">
        <div className="w-full sm:w-5/6 md:w-3/4 lg:w-2/3">test</div>
        <Button>button</Button>
      </div>
    </div>
  )
}

const Route = createFileRoute('/')({
  component: Page,
})

export { Route }
