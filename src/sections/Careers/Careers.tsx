import Container from '../../components/shared/Container'
import Reveal from '../../components/shared/Reveal'
import './Careers.css'

function CareerCTA() {
  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <section
      className="career-cta"
      id="careers"
      aria-labelledby="career-cta-title"
    >
      <Container>
        <Reveal className="career-cta__ribbon">
          {/* Animated background elements */}
          <span className="career-cta__orb career-cta__orb--one" />
          <span className="career-cta__orb career-cta__orb--two" />
          <span className="career-cta__orb career-cta__orb--three" />

          <span className="career-cta__grid" aria-hidden="true" />

          <div className="career-cta__content">
            <span className="career-cta__eyebrow">
              CAREERS AT AGRIVEX
            </span>

            <h2 id="career-cta-title">
              Build the future of agriculture with us.
            </h2>
          </div>

          <button
            type="button"
            className="career-cta__button"
            onClick={handleContactClick}
          >
            <span>Get in Touch</span>
            <span className="career-cta__arrow" aria-hidden="true">
              ↗
            </span>
          </button>

          <span className="career-cta__scanline" aria-hidden="true" />
        </Reveal>
      </Container>
    </section>
  )
}

export default CareerCTA