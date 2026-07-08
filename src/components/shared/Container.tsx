import type { HTMLAttributes, ReactNode } from 'react'
import './Container.css'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

function Container({ children, className = '', ...props }: ContainerProps) {
  return (
    <div className={`container ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

export default Container
