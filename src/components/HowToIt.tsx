import Button from "./ui/Button"

const HowToIt = () => {

  const data = [
    {title: 'Get Started', description: 'With our intuitive setup, you’re up and running in minutes.'},
    {title: 'Costumize and Configure', description: 'Adapt Area to your specific requirements and preferences.'},
    {title: 'Grow Your Business', description: 'Make informed decisions to exceed your goals.'}
  ]

  return (
    <section className='p-5'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='mt-24 border-t border-muted py-16 flex flex-col gap-12 items-start justify-between sm:flex-row sm:items-center'>
          <h1 className='text-5xl font-crimson'>Map Your Success</h1>          
          <Button className='bg-accent font-semibold font-dmsans px-9 py-3 rounded-4xl transition duration-75 hover:bg-secondary hover:text-secondary-foreground'>Discover More</Button>
        </div>

        <article className='mt-8 flex justify-between overflow-auto gap-8'>
          {data.map((e, index) => (
            <div key={index} className='flex flex-col gap-12 min-w-xs py-8 border-t border-muted'>
              <h1 className='font-dmsans text-7xl text-muted-foreground'>
                {String(index + 1).padStart(2, '0')}
              </h1>
              <div className='flex flex-col gap-4'>
                <h4 className='font-crimson text-lg font-medium'>{e.title}</h4>
                <p className='font-dmsans text-muted-foreground'>{e.description}</p>
              </div>
            </div>
          ))}
        </article>

        <aside className='py-12 mt-6 border-b border-muted'>
          <img 
            src='/how-to-it.jpg' 
            alt='map for component how to it'
            className='aspect-9/16 object-cover rounded-2xl md:aspect-auto'/>
        </aside>
      </div>
    </section>
  )
}

export default HowToIt
