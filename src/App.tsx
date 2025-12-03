import Navigation from '@components/Navigation'
import Hero from '@components/Hero'
import Sponsorships from '@components/Sponsorships'
import Benefits from '@/components/Benefits'
import Features from '@/components/Features'
import Specifications from '@/components/Specifications'
import Testimonial from '@/components/Testimonial'
import HowToIt from '@/components/HowToIt'

const App = () => {
  return (
    <div className='bg-background'>
      <Navigation/>
      <Hero/>
      <main>
        <Sponsorships/>
        <Benefits/>
        <Features/>
        <Specifications/>
        <Testimonial/>
        <HowToIt/>
      </main>
    </div>
  )
}

export default App
