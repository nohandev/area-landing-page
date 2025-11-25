import Navigation from "@components/Navigation"
import Hero from "@components/Hero"
import Sponsorships from "@components/Sponsorships"
import Benefits from "@/components/Benefits"

const App = () => {
  return (
    <div className='bg-background'>
      <Navigation/>
      <Hero/>
      <main>
        <Sponsorships/>
        <Benefits/>
      </main>
    </div>
  )
}

export default App
