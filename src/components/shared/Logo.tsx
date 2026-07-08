import type { AnchorHTMLAttributes } from 'react'
import agrivexLogo from '../../assets/logo/agrivex-logo.png'
import './Logo.css'

type LogoProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  imageSrc?: string
  imageAlt?: string
}

function Logo({
  imageSrc = agrivexLogo,
  imageAlt = 'Agrivex Pvt. Ltd.',
  className = '',
  ...props
}: LogoProps) {
  return (
    <a
      className={`logo ${className}`.trim()}
      aria-label="Agrivex Pvt. Ltd. home"
      {...props}
    >
      <img
        className="logo__image"
        src={imageSrc}
        alt={imageAlt}
        loading="eager"
        decoding="async"
      />
    </a>
  )
}

export default Logo
