import Container from '../../components/shared/Container'
import Logo from '../../components/shared/Logo'
import './Footer.css'

import footerImage from '../../assets/images/footer/footer-img.png'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Dealer', href: '#dealer' },
  { label: 'Farmer', href: '#farmer' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
] as const

function Footer() {
  return (
    <footer className="footer">
      {/* Decorative agricultural landscape */}
      <div className="footer__landscape" aria-hidden="true">
        <img src={footerImage} alt="" />
      </div>

      <Container className="footer__container">
        <div className="footer__main">
          {/* Brand */}
          <div className="footer__brand">
            <Logo href="#" />

            <p>
              Building smarter agricultural ecosystems through science,
              technology, and practical field intelligence.
            </p>
          </div>

          {/* Quick links */}
          <nav className="footer__links" aria-label="Footer navigation">
            <h2>Explore</h2>

            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="footer__contact">
            <h2>Get in touch</h2>

            <a href="mailto:contact@agrivexglobal.com">
              contact@agrivexglobal.com
            </a>

            <a href="tel:+917276021972">+91 72760 21972</a>

            <p>
              Pune, Maharashtra
              <br />
              India
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} Agrivex Pvt. Ltd. All rights reserved.
          </p>

          <div className="footer__legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer