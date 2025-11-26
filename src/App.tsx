import Navigation from "@components/Navigation"
import Hero from "@components/Hero"
import Sponsorships from "@components/Sponsorships"
import Benefits from "@/components/Benefits"
import Features from "@/components/Features"

const App = () => {
  return (
    <div className='bg-background'>
      <Navigation/>
      <Hero/>
      <main>
        <Sponsorships/>
        <Benefits/>
        <Features/>
      </main>
    </div>
  )
}

export default App
