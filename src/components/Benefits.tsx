import { TrendingUp, Cable, User, Earth } from 'lucide-react'
import BenefitsCard from '@components/ui/BenefitsCard'

const Benefits = () => {

  const data = [
    {
      id: 1, 
      title: 'Amplify Insights',
      description: 'Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.',
      icon: <Cable/>
    },
    {
      id: 2, 
      title: 'Control Your Global Presence',
      description: 'Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.',
      icon: <Earth/>
    },
    {
      id: 3, 
      title: 'Remove Language Barriers',
      description: 'Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.',
      icon: <User/>
    },
    {
      id: 4, 
      title: 'Visualize Growth',
      description: 'Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.',
      icon: <TrendingUp/>
    },
  ]

  return (
    <section className='min-h-screen'>
      <div className='max-w-7xl mx-auto mt-24 p-5'>
        <div className='flex flex-col items-start gap-20'>
          <h4 className='font-roboto text-primary text-xs'>
            Benefits
          </h4>

          <h1 className='font-crimson text-5xl'>
            We've cracked the code.
          </h1>

          <h2 className='font-dmsans text-muted-foreground'>
            Area provides real insights, without the data overload.
          </h2>

        </div>

        <article className='grid md:grid-cols-2 md:gap-8 xl:flex xl:justify-between xl mt-20'>
          {data.map(content => <BenefitsCard key={content.id} title={content.title} description={content.description} icon={content.icon} />)}
        </article>

        <div className='max-h-screen'>
          <img 
            src='/benefits.jpg' 
            alt='mountains for benefits feature'
            className='w-full aspect-9/16 md:aspect-square xl:aspect-video object-cover rounded-3xl'/>
        </div>
      </div>
    </section>
  )
}

export default Benefits
