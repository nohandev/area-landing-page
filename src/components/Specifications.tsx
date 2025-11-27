import Button from '@components/ui/Button'
import {Check, X } from 'lucide-react'

const Yes = ({ text }: { text: string }) => (
  <div className='flex items-center gap-4'>
    <Check className='text-primary size-5' />
    <p className='font-roboto'>{text}</p>
  </div>
);

const No = ({ text }: { text: string }) => (
  <div className='flex items-center gap-4'>
    <X className='text-muted-foreground size-5' />
    <p className='font-roboto'>{text}</p>
  </div>
);

const Specifications = () => {
  return (
    <section className='mt-24 p-5'>
      <div className='border-t border-t-muted pt-24 max-w-7xl mx-auto'>
        <div className='mx-auto flex flex-col justify-center items-center gap-10 text-center'>
          <span className='font-roboto text-primary xl:hidden'>Specs</span>
          <h1 className='font-crimson text-6xl'>Why Choose Area?</h1>
          <p className='text-muted-foreground font-dmsans'>
            You need a solution that keeps up. That's why we developed Area. A developer-friendly approach to streamline your business. 
          </p>
          <Button className='bg-accent font-semibold font-dmsans px-12 py-3 rounded-4xl transition duration-75 hover:bg-secondary hover:text-secondary-foreground'>
            Discover More
          </Button>
        </div>

        <div className='max-w-7xl w-full overflow-x-auto mt-24 shadow-sm'>
          <table className='w-full border-collapse'>
            <thead>
              <tr className='border border-muted'>
                <th className='p-8 text-muted-foreground font-crimson text-3xl'>Area</th>
                <th className='p-8 text-muted-foreground font-crimson text-3xl'>WebSurge</th>
                <th className='p-8 text-muted-foreground font-crimson text-3xl'>HyperView</th>
              </tr>
            </thead>

            <tbody className=''>
              <tr>
                <td className='p-8 border border-muted'><Yes text='Ultra-fast browsing' /></td>
                <td className='p-8 border border-muted'><Yes text='Fast browsing' /></td>
                <td className='p-8 border border-muted'><No text='Moderate speeds' /></td>
              </tr>

              <tr>
                <td className='p-8 border border-muted'><Yes text='Advanced AI insights' /></td>
                <td className='p-8 border border-muted'><Yes text='Basic AI recommendations' /></td>
                <td className='p-8 border border-muted'><No text='No AI assistance' /></td>
              </tr>

              <tr>
                <td className='p-8 border border-muted'><Yes text='Seamless integration' /></td>
                <td className='p-8 border border-muted'><No text='Restricts customization' /></td>
                <td className='p-8 border border-muted'><No text='Steep learning curve' /></td>
              </tr>

              <tr>
                <td className='p-8 border border-muted'><Yes text='Advanced AI insights' /></td>
                <td className='p-8 border border-muted'><No text='Basic AI insights' /></td>
                <td className='p-8 border border-muted'><No text='No AI assistance' /></td>
              </tr>

              <tr>
                <td className='p-8 border border-muted'><Yes text='Ultra-fast browsing' /></td>
                <td className='p-8 border border-muted'><Yes text='Fast browsing' /></td>
                <td className='p-8 border border-muted'><No text='Moderate speeds' /></td>
              </tr>

              <tr>
                <td className='p-8 border border-muted'><Yes text='Full UTF-8 support' /></td>
                <td className='p-8 border border-muted'><No text='Potential display errors' /></td>
                <td className='p-8 border border-muted'><No text='Partial UTF-8 support' /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Specifications
