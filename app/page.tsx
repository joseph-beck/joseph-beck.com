import { NavigationBar } from '@/components/navigationBar'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/card'

export default function Home() {
  return (
    <main>
      <NavigationBar></NavigationBar>

      <div>
        <Hero
          img='/images/stock/photo-1635805737707-575885ab0820.jpg'
          alt='img'
          title='Hello'
          body='Body text'
        />
      </div>
      
      <Footer></Footer>
    </main>
  )
}
