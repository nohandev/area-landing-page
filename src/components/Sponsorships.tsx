const Sponsorships = () => {

  const sponsors = [
    {id: 1, src: '/sponsorships/sponsor_1.png', alt: 'Sponsorship Logo'},
    {id: 2, src: '/sponsorships/sponsor_2.png', alt: 'Sponsorship Logo'},
    {id: 3, src: '/sponsorships/sponsor_3.png', alt: 'Sponsorship Logo'},
    {id: 4, src: '/sponsorships/sponsor_4.png', alt: 'Sponsorship Logo'},
    {id: 5, src: '/sponsorships/sponsor_5.png', alt: 'Sponsorship Logo'},
    {id: 6, src: '/sponsorships/sponsor_6.png', alt: 'Sponsorship Logo'},
  ]

  return (
    <section className='mt-6 p-5'>
      <div className='max-w-7xl mx-auto'>
        <div>
          <h4 className='font-dmsans text-lg text-muted-foreground font-medium'>
            Trusted by : 
          </h4>
        </div>

        <div className='flex items-center justify-center xl:justify-between flex-wrap mt-6 gap-8'>
          {sponsors.map(sponsor => (
            <img 
            key={sponsor.id}
            src={sponsor.src}
            alt={sponsor.alt}
            className='object-cover  p-4'/> 
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sponsorships
