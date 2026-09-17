import { createFileRoute } from '@tanstack/react-router'
import { type ReactElement } from 'react'

import { Freelance } from '@/components/experience/freelance/freelance'
import { Professional } from '@/components/experience/professional/professional'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs'

const Page = (): ReactElement => {
  return (
    <div>
      <Tabs defaultValue="professional">
        <TabsList>
          <TabsTrigger value="professional">Professional</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="freelance">Freelance</TabsTrigger>
          <TabsTrigger value="extracurricular">Extra Curricular</TabsTrigger>
        </TabsList>
        <TabsContent value="professional">
          <Professional />
        </TabsContent>
        <TabsContent value="education">coming soon...</TabsContent>
        <TabsContent value="freelance">
          <Freelance />
        </TabsContent>
        <TabsContent value="extracurricular">coming soon...</TabsContent>
      </Tabs>
    </div>
  )
}

const Route = createFileRoute('/experience')({
  component: Page,
})

export { Route }
