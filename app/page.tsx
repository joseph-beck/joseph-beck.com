import { NavigationBar } from '@/components/navigation/bar'
import { Footer } from '@/components/navigation/footer'
import { BlankHero } from '@/components/output/hero'

export default function Home() {
  return (
    <main>
      <NavigationBar/>

      <div>
        <BlankHero
          title='hi,'
          body={  `im joseph beck,
                  current student at royal holloway university of london`}
        />
      </div>

      <Footer/>
    </main>
  )
}
