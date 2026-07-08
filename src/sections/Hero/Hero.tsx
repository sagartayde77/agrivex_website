import Button from '../../components/shared/Button'
import Container from '../../components/shared/Container'
import heroVisual from '../../assets/logo/agrivex-logo.png'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__bg-decor" aria-hidden="true">
        <span className="hero__decor-blob hero__decor-blob--1" />
        <span className="hero__decor-blob hero__decor-blob--2" />
      </div>
      <Container className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">AGRIVEX PVT. LTD.</p>
          <h1 id="hero-title">Engineering the Future of Agriculture</h1>
          <p className="hero__description">
            Agrivex integrates Artificial Intelligence, precision agriculture,
            drone technology, and scientific expertise to build smarter, more
            sustainable farming ecosystems for the future.
          </p>
          <div className="hero__actions" aria-label="Hero actions">
            <Button href="#dealer">Become a Dealer</Button>
            <Button href="#capabilities" variant="secondary">
              Explore Agrivex
            </Button>
          </div>
        </div>

        <div className="hero__visual" aria-label="Agrivex brand visual">
          <div className="hero__visual-ring" aria-hidden="true" />
          <img
            className="hero__visual-image"
            src={heroVisual}
            alt="Agrivex Pvt. Ltd. logo"
            loading="eager"
            decoding="async"
          />
        </div>
      </Container>
      <a href="#about" className="hero__scroll-indicator" aria-label="Scroll to about section">
        <span className="hero__scroll-mouse">
          <span className="hero__scroll-wheel" />
        </span>
        <span className="hero__scroll-text">Scroll</span>
      </a>
    </section>
  )
}

export default Hero
