const Footer = () => {

  const data = [
    {id:1, title: 'Beneftis'},
    {id:2, title: 'Specifications'},
    {id:3, title: 'How To'},
  ]

  return (
    <footer className='px-5'>
      <div className='w-full max-w-7xl mx-auto border-t border-muted py-12'>
        <div className='flex flex-col gap-8 md:flex-row'>
          {data.map(e => (
            <p 
            key={e.id}
            className='font-dmsans font-bold cursor-pointer hover:underline'>
              {e.title}
            </p>
          ))}
        </div>

        <aside className='mt-28 flex justify-between items-end text-accent-foreground text-xs font-roboto'>
          <div className='flex items-end gap-12'>
            <div className='max-[410px]:hidden'>
              <img src='/Logo.png' alt='Logo Area'  />
            </div>

            <div className='flex items-end gap-4'>
              <div>
                <p>© Area.</p>
              </div>
              <div>
                <span>2025</span>
              </div>
            </div>
          </div>

          <div>
            <p>All Rights Reserved</p>
          </div>
        </aside>
      </div>
    </footer>
  )
}

export default Footer
