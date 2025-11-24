import Navigation from "@components/Navigation"
import Hero from "@components/Hero"
import Sponsorships from "@components/Sponsorships"

const App = () => {
  return (
    <div className='bg-background'>
      <Navigation/>
      <Hero/>
      <main>
        <Sponsorships/>
      </main>
    </div>
  )
}

export default App
