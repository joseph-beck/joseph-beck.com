import { createLazyFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { Button } from '@/ui/button'

const Page = (): ReactElement => {
  return (
    <div className="p-2">
      <div className="flex justify-center">
        <div className="w-full sm:w-5/6 md:w-3/4 lg:w-2/3">test</div>
        <Button>button</Button>
      </div>
    </div>
  )
}

const Route = createLazyFileRoute('/')({
  component: Page,
})

export { Route }
