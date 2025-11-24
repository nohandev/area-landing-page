const HeroImageMobile = () => {
  return (
    <div className='mt-40 bg-secondary w-full h-80 rounded-4xl relative md:hidden'>
      <img src='/iphone.png' alt='cellphone ilustration hero' className='absolute bottom-0 -translate-x-1/2 left-1/2'/>
    </div>
  )
}

const HeroImageTablet = () => {
  return (
    <div className='mt-48 bg-secondary w-full h-92 rounded-4xl relative max-md:hidden lg:hidden'>
      <img src='/ipad.png' alt='cellphone ilustration hero' className='absolute bottom-0 -translate-x-1/2 left-1/2'/>
    </div>    
  )
}

const HeroImageDesktop = () => {
  return (
    <div className='mt-56 bg-secondary w-full max-w-7xl h-92 rounded-4xl relative max-lg:hidden'>
      <img src='/ipad.png' alt='cellphone ilustration hero' className='absolute bottom-0 -translate-x-1/2 left-1/2'/>
    </div>
  )
}

export default function Hero() {
  return (
    <header className="p-5">
      <div>
        <div className='mx-auto font-crimson mt-10'>
          <h1 className='text-7xl md:text-9xl text-center'>Browse Everything.</h1>
        </div>

        <div className='flex justify-center items-center'> 
          <HeroImageMobile/>
          <HeroImageTablet/>
          <HeroImageDesktop/>
        </div>
      </div>

    </header>
  )
}