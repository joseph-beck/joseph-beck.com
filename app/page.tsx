import { NavigationBar } from '@/components/navigationBar'
import { Footer } from '@/components/footer'
import { BlankHero, BlankCard } from '@/components/card'

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
