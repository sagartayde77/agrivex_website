import type { HTMLAttributes, ReactNode, ElementType } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './Reveal.css'

type RevealProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: number
  threshold?: number
  id?: string
  'aria-labelledby'?: string
} & Omit<HTMLAttributes<HTMLElement>, 'children'>

function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  threshold = 0.15,
  id,
  ...rest
}: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold })

  return (
    <Tag
      ref={ref as never}
      id={id}
      className={`reveal ${isVisible ? 'reveal--visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Reveal
