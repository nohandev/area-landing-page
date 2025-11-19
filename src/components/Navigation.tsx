import { useState } from 'react'
import Button from '@components/ui/Button'
import { MenuIcon, ArrowUpRight, X } from 'lucide-react'

const Navigation = () => {

  const lis = [
    {id: 1, title: 'Benefits'},
    {id: 2, title: 'Specifications'},
    {id: 3, title: 'How-to'},
    {id: 4, title: 'Contact Us'},
  ]

  const [isClosed, setIsClosed] = useState<boolean>(true)

  return (
    <nav className='w-full shadow-sm shadow-muted/50 rounded-b-xl'>
      <div className='flex justify-between items-center p-5'>

        <div>
          <img src='/Area.png' alt='main logo'/>
        </div>

        <div className='md:hidden'>
          <Button onClick={() => setIsClosed((prevIsClosed) => !prevIsClosed)}>
            {isClosed ? <MenuIcon size={24}/>: <X size={24}/>}
          </Button>
        </div>

      </div>
      <div className={`font-bold font-dmsans text-sm px-5 mt-12 ${isClosed && 'hidden'} md:hidden`}>
        <ul className=''>
          {lis.map(li => (
            <li 
            key={li.id}
            className='py-8 border-t border-muted'>
              {li.title}
            </li>
          ))}
        </ul>

        <Button className='mt-12 bg-primary text-primary-foreground px-6 py-3 rounded-3xl'>
          Learn More
          <span><ArrowUpRight size={14}/></span>
        </Button>
      </div>
    </nav>
  )
}

export default Navigation
