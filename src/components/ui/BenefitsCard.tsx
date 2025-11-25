
interface BenefitsCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

const BenefitsCard = ({
  title,
  description,
  icon
} : BenefitsCardProps) => {
  return (
    <div className='flex flex-col gap-8 border-t border-t-muted py-16'>
      <div>
        {icon}
      </div>

      <div>
        <h1 className='font-crimson text-lg font-medium text-start'>{title}</h1>
      </div>

      <div>
        <p className='font-dmsans text-muted-foreground'>{description}</p>
      </div>
    </div>
  )
}

export default BenefitsCard
