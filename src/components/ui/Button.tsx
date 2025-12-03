import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  className?: string
  icon?: React.ReactNode
}

const Button:React.FC<ButtonProps> = ({
  children, 
  className='',
  icon,
  ...props}) => {
  return (
   <button 
   className={`text-center cursor-pointer flex items-center justify-center ${className}`}
   {...props}>
    {children}
    {icon && <span>{icon}</span>}
   </button>
  )
}

export default Button
