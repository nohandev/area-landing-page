import Button from './ui/Button'
import { ArrowUpRight } from 'lucide-react'

const ConnectWithUs = () => {
  return (
    <section className='p-5 h-[75dvh] flex items-center justify-center'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='mx-auto flex justify-center flex-col gap-8 max-w-2xl text-center'>
          <h1 className='font-crimson text-6xl'>Connect With Us</h1>
          <p className='text-muted-foreground font-dmsans'>Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.</p>
          <Button 
          icon={<ArrowUpRight/>}
          className='bg-primary text-primary-foreground transition duration-150 py-4 rounded-4xl font-bold hover:bg-secondary'>
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ConnectWithUs
