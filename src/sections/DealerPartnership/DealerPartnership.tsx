import Button from '../../components/shared/Button'
import Container from '../../components/shared/Container'
import Reveal from '../../components/shared/Reveal'
import dealershipImage from '../../assets/images/dealership/dealership.jpeg'
import './DealerPartnership.css'

function DealerPartnership() {
  return (
    <section
      className="dealer-partnership"
      id="dealer"
      aria-labelledby="dealer-partnership-title"
    >
      <Container>
        <div className="dealer-partnership__wrapper">

          {/* Section heading */}
          <Reveal className="dealer-partnership__heading">
            <span className="dealer-partnership__index">03</span>
            <span className="dealer-partnership__line" />
            <span className="dealer-partnership__eyebrow">
              DEALER PARTNERSHIP
            </span>
          </Reveal>

          {/* Main content */}
          <div className="dealer-partnership__content">

            {/* Image */}
            <Reveal
              className="dealer-partnership__visual"
              delay={100}
            >
              <div className="dealer-partnership__image-frame">
                <img
                  src={dealershipImage}
                  alt="Agrivex dealer partnership"
                />

                <div
                  className="dealer-partnership__image-overlay"
                  aria-hidden="true"
                />

                <span className="dealer-partnership__image-label">
                  AGRIVEX PARTNERSHIP
                </span>
              </div>
            </Reveal>

            {/* Text */}
            <Reveal
              className="dealer-partnership__copy"
              delay={220}
            >
              <span className="dealer-partnership__kicker">
                BUILT TO MOVE TOGETHER
              </span>

              <h2 id="dealer-partnership-title">
                Partner with Agrivex
                <br />
                to grow
                <em> together.</em>
              </h2>

              <p className="dealer-partnership__description">
                Agrivex works with dealers who believe that strong
                agricultural relationships are built through reliable
                products, practical support, and long-term commitment.
              </p>

              <div className="dealer-partnership__action">
                <Button href="#contact">
                  Become a Dealer
                </Button>

                <span className="dealer-partnership__action-note">
                  Join the Agrivex network
                </span>
              </div>
            </Reveal>
          </div>

          {/* Bottom statement */}
          <Reveal
            className="dealer-partnership__bottom"
            delay={350}
          >
            <span>RELIABILITY</span>
            <span>SUPPORT</span>
            <span>RELATIONSHIP</span>
            <span>GROWTH</span>
          </Reveal>

        </div>
      </Container>
    </section>
  )
}

export default DealerPartnership