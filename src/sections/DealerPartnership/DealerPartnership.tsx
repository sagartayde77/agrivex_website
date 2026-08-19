import Button from '../../components/shared/Button'
import Container from '../../components/shared/Container'
import Reveal from '../../components/shared/Reveal'
import './DealerPartnership.css'

const partnershipPrinciples = [
  {
    number: '01',
    title: 'Reliable Supply',
    description:
      'Dependable agricultural products backed by consistency, responsiveness, and practical field understanding.',
  },
  {
    number: '02',
    title: 'Market Support',
    description:
      'A partnership built around communication, product knowledge, and support that helps dealers serve their markets better.',
  },
  {
    number: '03',
    title: 'Long-Term Growth',
    description:
      'We aim to build lasting relationships where Agrivex and its dealer network grow together.',
  },
] as const

function DealerPartnership() {
  return (
    <section
      className="dealer-partnership"
      id="dealer"
      aria-labelledby="dealer-partnership-title"
    >
      <Container>
        <div className="dealer-partnership__shell">
          <div className="dealer-partnership__background-grid" />

          <Reveal className="dealer-partnership__header">
            <div className="dealer-partnership__signal">
              <span className="dealer-partnership__signal-dot" />
              <span>DEALER PARTNERSHIP</span>
            </div>

            <span className="dealer-partnership__index">03</span>
          </Reveal>

          <div className="dealer-partnership__main">
            <Reveal className="dealer-partnership__statement">
              <p className="dealer-partnership__kicker">
                BUILT TO MOVE TOGETHER
              </p>

              <h2 id="dealer-partnership-title">
                Good products
                <br />
                need good
                <em> partners.</em>
              </h2>

              <p className="dealer-partnership__intro">
                Agrivex works with dealers who value reliability, strong
                relationships, and long-term growth in agriculture.
              </p>
            </Reveal>

            <div className="dealer-partnership__principles">
              {partnershipPrinciples.map((principle, index) => (
                <Reveal
                  as="article"
                  key={principle.number}
                  className="dealer-partnership__principle"
                  delay={index * 120}
                >
                  <div className="dealer-partnership__principle-top">
                    <span className="dealer-partnership__number">
                      {principle.number}
                    </span>

                    <span className="dealer-partnership__arrow">
                      ↗
                    </span>
                  </div>

                  <div className="dealer-partnership__principle-content">
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="dealer-partnership__footer" delay={180}>
            <div className="dealer-partnership__footer-copy">
              <span>READY TO BUILD THE NEXT CONNECTION?</span>
              <strong>Become part of the Agrivex network.</strong>
            </div>

            <Button href="#contact">Become a Dealer</Button>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default DealerPartnership