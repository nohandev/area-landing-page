const Testimonial = () => {
  return (
    <section className='p-5'>
      <div className='w-full max-w-7xl mx-auto'>
        <article className='flex flex-col  gap-12 lg:flex-row'>
          <div className='border-b border-muted pb-14 lg:border-none lg:pb-0 flex-1'> 
            <img 
              src='/testimonial.jpg' 
              alt='testemonial img banner'
              className='aspect-square rounded-2xl object-cover'/>
          </div>

          <div className='flex flex-col gap-8 items-start justify-center flex-1'>
            <div>
              <h4 className='font-crimson text-3xl font-medium lg:text-4xl'>
                “I was skeptical, but Area has completely transformed the way I manage my business. The data visualizations are so clear and intuitive, and the platform is so easy to use. I can't imagine running my company without it.”
              </h4>
            </div>
            <div className='flex gap-2 items-center lg:flex-col'>
              <p className='font-medium font-dmsans'>John Smith</p>
              <span className='text-primary font-roboto text-xs'>Head of Data</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonial
