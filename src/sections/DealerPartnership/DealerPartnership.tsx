import Button from '../../components/shared/Button'
import Container from '../../components/shared/Container'
import Reveal from '../../components/shared/Reveal'
import './DealerPartnership.css'

const partnershipBenefits = [
  'Partner with an agriculture-focused company built around innovation and scientific thinking.',
  'Connect with solutions across inputs, precision agriculture, drone technology, and digital farming.',
  'Support farmers with smarter decision-making and sustainable agricultural practices.',
] as const

function DealerPartnership() {
  return (
    <section
      className="dealer-partnership"
      id="dealer"
      aria-labelledby="dealer-partnership-title"
    >
      <Container className="dealer-partnership__container">
        <Reveal className="dealer-partnership__content">
          <p className="dealer-partnership__eyebrow">DEALER PARTNERSHIP</p>
          <h2 id="dealer-partnership-title">
            Partner with Agrivex to support the future of agriculture.
          </h2>
          <p>
            Agrivex works with agricultural businesses that want to bring
            technology-first, sustainable, and science-led agricultural solutions
            closer to farming communities.
          </p>
        </Reveal>

        <Reveal className="dealer-partnership__action" delay={120}>
          <ul className="dealer-partnership__benefits">
            {partnershipBenefits.map((benefit) => (
              <li key={benefit} className="dealer-partnership__benefit">
                <span className="dealer-partnership__check" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 5L7 12L4 9" />
                  </svg>
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <Button href="#contact">Become a Dealer</Button>
        </Reveal>
      </Container>
    </section>
  )
}

export default DealerPartnership
