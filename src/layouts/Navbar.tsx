import { useEffect, useState } from 'react'
import Button from '../components/shared/Button'
import Container from '../components/shared/Container'
import Logo from '../components/shared/Logo'
import { navigationLinks } from '../config/navigation'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 40)
    }

    updateScrollState()

    window.addEventListener('scroll', updateScrollState, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', updateScrollState)
    }
  }, [])

  useEffect(() => {
    const sections = navigationLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as HTMLElement[]

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      {
        rootMargin: '-35% 0px -55% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header
      className={`navbar ${
        isScrolled ? 'navbar--scrolled' : ''
      }`}
    >
      <Container className="navbar__container">
        <div className="navbar__brand">
          <Logo href="#" />

          <span className="navbar__eyebrow">
            AGRIVEX PVT. LTD.
          </span>
        </div>

        <button
          className={`navbar__toggle ${
            isMenuOpen ? 'navbar__toggle--open' : ''
          }`}
          type="button"
          aria-label={
            isMenuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() =>
            setIsMenuOpen((currentValue) => !currentValue)
          }
        >
          <span className="navbar__toggle-line" />
          <span className="navbar__toggle-line" />
          <span className="navbar__toggle-line" />
        </button>

        <nav
          id="primary-navigation"
          className={`navbar__nav ${
            isMenuOpen ? 'navbar__nav--open' : ''
          }`}
          aria-label="Primary navigation"
        >
          <ul className="navbar__links">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.href

              return (
                <li key={link.href}>
                  <a
                    className={`navbar__link ${
                      isActive ? 'navbar__link--active' : ''
                    }`}
                    href={link.href}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <Button
            className="navbar__button"
            href="#dealer"
          >
            Become a Dealer
          </Button>
        </nav>
      </Container>
    </header>
  )
}

export default Navbar