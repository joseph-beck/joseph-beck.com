import { NavigationBar } from '@/components/navigation/bar'
import { Footer } from '@/components/navigation/footer'
import { BlankHero, BlankCard } from '@/components/output/card'
import { CodeMockup, LineType, TextType } from '@/components/output/code'
import { Tooltip } from '@/components/output/tooltip'

export default function Home() {
  return (
    <main>
      <NavigationBar/>

      <div>
        <BlankHero
          title='Hello'
          body='Body text'
        />

        <BlankHero
          title='Hello'
          body='Body text'
        />
      </div>

      <Footer/>
    </main>
  )
}
