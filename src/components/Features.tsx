import Button from '@components/ui/Button'

const Features = () => {

  const data = [
    {title: 'Spot Trends in Seconds: No more digging through numbers.'},
    {title: 'Get Everyone on the Same Page: Share easy-to-understand reports with your team. '},
    {title: 'Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.'},
    {title: 'Your Global Snapshot: Get a quick, clear overview of your entire operation.'}
  ]

  return (
    <section className='mt-24 p-5'>
      <div className='max-w-7xl mx-auto pt-24 flex flex-col xl:flex-row gap-6 border-t border-t-muted'>
        <div className='flex flex-col gap-12 items-start justify-between flex-1'>
          <div>
            <h1 className='font-crimson text-5xl'>
              See the Big Picture
            </h1>
          </div>
          <div>
            <p className='font-dmsans text-muted-foreground'>
              Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.
            </p>
          </div>

          <div className='flex flex-col gap-6'>
            {data.map((e, index) => (
              <div
                key={index} 
                className='flex gap-8 font-dmsans py-6 border-t border-t-muted'>
                <h1 className=' text-muted-foreground font-bold text-lg'>
                  {String(index + 1).padStart(2, '0')}
                </h1>
                <p>
                  {e.title} 
                </p>
            </div>
            ))}
          </div>

          <div>
            <Button className='bg-accent font-semibold font-dmsans px-12 py-3 rounded-4xl transition duration-75 hover:bg-secondary hover:text-secondary-foreground'>
              Discover More
            </Button>
          </div>
        </div>

        <div className='rounded-3xl shadow-xl flex-1'>
          <img 
            src='/features.jpg'
            alt='picture to feature component'
            className='object-cover size-full rounded-3xl'/>
        </div>
      </div>
    </section>
  )
}

export default Features
