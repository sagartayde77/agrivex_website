import Container from '../../components/shared/Container'
import Logo from '../../components/shared/Logo'
import './Footer.css'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Dealer', href: '#dealer' },
  { label: 'Farmer', href: '#farmer' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
] as const

const socialLinks = [
  { label: 'LinkedIn', href: '#social' },
  { label: 'Instagram', href: 'https://www.instagram.com/agrivexglobal?igsh=Y3UxOHdkNW40Zjln' },
  { label: 'YouTube', href: '#social' },
] as const

function Footer() {
  return (
    <footer className="footer">
      <Container className="footer__content">
        <div className="footer__brand">
          <Logo href="#top" />

          <p>
            Building smarter agricultural ecosystems through science,
            technology, and practical field intelligence.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <h2>Explore</h2>

          <ul>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__contact">
          <h2>Get in touch</h2>

          <a href="mailto:contact@agrivexglobal.com">
            contact@agrivexglobal.com
          </a>

          <a href="tel:+917276021972">
            +91 72760 21972
          </a>

          <p>
            Pune, Maharashtra
            <br />
            India
          </p>
        </div>
      </Container>

      {/* Agricultural landscape */}
      <div className="footer__landscape" aria-hidden="true">
        <img
          src="/src/assets/images/footer/footer-img.png"
          alt=""
        />
      </div>

      <div className="footer__base">
        <Container className="footer__base-inner">
          <div className="footer__base-brand">
            <Logo href="#top" />
          </div>

          <div className="footer__social">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="footer__copyright">
            © {new Date().getFullYear()} Agrivex Pvt. Ltd. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  )
}

export default Footer