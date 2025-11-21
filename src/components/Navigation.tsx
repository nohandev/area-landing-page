import { useState } from 'react'
import Button from '@components/ui/Button'
import { MenuIcon, ArrowUpRight, X } from 'lucide-react'

const lis = [
  {id: 1, title: 'Benefits'},
  {id: 2, title: 'Specifications'},
  {id: 3, title: 'How-to'},
  {id: 4, title: 'Contact Us'},
]

const DesktopMenu = () => {
  return (
    <>
      <div>
        <ul className='gap-4 font-dmsans text-sm hidden md:flex'>
          {lis.map(li => (
          <li 
          key={li.id}
          className='transition-colors ease-in duration-150 cursor-pointer hover:text-accent-foreground hover:underline'>
            {li.title}
          </li>
        ))}
        </ul>
      </div>

      <div>
        <Button className='bg-primary text-primary-foreground px-6 py-3 rounded-3xl hidden md:flex'>
          Learn More
          <span><ArrowUpRight size={14}/></span>
        </Button>
      </div>
    </>
  )
}

const MobileMenu = ({isClosed}: {isClosed: boolean}) => {
  return (
    <>
      <div className={`font-dmsans text-sm px-5 mt-12 ${isClosed && 'hidden'} md:hidden`}>
        <ul>
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
    </>
  )
}



const Navigation = () => {
  const [isClosed, setIsClosed] = useState<boolean>(true)

  return (
    <nav className='w-full shadow-sm shadow-muted/50 rounded-b-xl font-bold'>
      <div className='flex justify-between items-center p-5 font-bold'>

        <div>
          <img src='/Area.png' alt='main logo'/>
        </div>

        <DesktopMenu/>

        <div className='md:hidden'>
          <Button onClick={() => setIsClosed((prevIsClosed) => !prevIsClosed)}>
            {isClosed ? <MenuIcon size={24}/>: <X size={24}/>}
          </Button>
        </div>
      </div>

      <MobileMenu isClosed={isClosed}/>
    </nav>
  )
}

export default Navigation
