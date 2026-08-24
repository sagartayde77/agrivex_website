import { useState } from 'react'
import Container from '../../components/shared/Container'
import Reveal from '../../components/shared/Reveal'
import './AgricultureVision.css'

import visionImage from '../../assets/images/vision/agriculture-vision.png'
import fieldUnderstandingImage from '../../assets/images/vision/field-understanding.png'
import reliableProductsImage from '../../assets/images/vision/reliable-products.jpg'
import strongPartnershipsImage from '../../assets/images/vision/strong-partnerships.jpg'

const visionPillars = [
  {
    number: '01',
    title: 'Field Understanding',
    description:
      'We stay connected to the realities of farming and the challenges faced in the field.',
    image: fieldUnderstandingImage,
    alt: 'Farmers working in a green agricultural field',
  },
  {
    number: '02',
    title: 'Reliable Products',
    description:
      'We focus on dependable agricultural and crop-protection products that farmers and dealers can trust.',
    image: reliableProductsImage,
    alt: 'Agricultural crop-protection products in a field',
  },
  {
    number: '03',
    title: 'Strong Partnerships',
    description:
      'We build lasting relationships with dealers and customers through reliability, support, and consistency.',
    image: strongPartnershipsImage,
    alt: 'Agricultural business partnership',
  },
] as const

function AgricultureVision() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  const handleCardClick = (index: number) => {
    setFlippedCard((current) => (current === index ? null : index))
  }

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLElement>,
    index: number,
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleCardClick(index)
    }
  }

  return (
    <section
      className="agriculture-vision"
      id="about"
      aria-labelledby="agriculture-vision-title"
    >
      <Container>
        <Reveal className="agriculture-vision__section-label">
          <span className="agriculture-vision__section-number">01</span>

          <span className="agriculture-vision__section-line" />

          <span className="agriculture-vision__eyebrow">
            OUR AGRICULTURE VISION
          </span>
        </Reveal>

        <div className="agriculture-vision__main">
          <Reveal className="agriculture-vision__image-wrap">
            <div className="agriculture-vision__image-frame">
              <img
                className="agriculture-vision__image"
                src={visionImage}
                alt="Agricultural field and farming"
              />
            </div>

            <span className="agriculture-vision__image-caption">
              ROOTED IN THE FIELD
            </span>
          </Reveal>

          <Reveal
            className="agriculture-vision__content"
            threshold={0.2}
            delay={150}
          >
            <h2 id="agriculture-vision-title">
              Built around the real needs of agriculture.
            </h2>

            <div className="agriculture-vision__accent" />

            <div className="agriculture-vision__copy">
              <p>
                Agriculture depends on more than products. It depends on
                knowledge, reliability, and people who understand what happens
                in the field.
              </p>

              <p>
                Agrivex works to bring dependable agricultural and
                crop-protection products to the market while building strong,
                long-term relationships with dealers and customers.
              </p>

              <p>
                Our approach is simple: understand the need, deliver with
                consistency, and stand with the people who make agriculture
                possible.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="agriculture-vision__pillars">
          {visionPillars.map((pillar, index) => {
            const isFlipped = flippedCard === index

            return (
              <Reveal
                as="article"
                className={`agriculture-vision__pillar ${
                  isFlipped ? 'agriculture-vision__pillar--flipped' : ''
                }`}
                key={pillar.number}
                delay={index * 120}
                tabIndex={0}
                aria-label={`${pillar.title}. Click or press Enter to flip card.`}
                onClick={() => handleCardClick(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                <div className="agriculture-vision__card">
                  {/* FRONT */}
                  <div className="agriculture-vision__card-face agriculture-vision__card-front">
                    <img
                      src={pillar.image}
                      alt={pillar.alt}
                      className="agriculture-vision__pillar-image"
                    />

                    <div className="agriculture-vision__pillar-overlay" />

                    <div className="agriculture-vision__pillar-front-content">
                      <span className="agriculture-vision__number">
                        {pillar.number}
                      </span>

                      <span className="agriculture-vision__flip-hint">
                        EXPLORE
                      </span>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="agriculture-vision__card-face agriculture-vision__card-back">
                    <span className="agriculture-vision__number">
                      {pillar.number}
                    </span>

                    <div className="agriculture-vision__pillar-content">
                      <h3>{pillar.title}</h3>

                      <p>{pillar.description}</p>
                    </div>

                    <span className="agriculture-vision__back-label">
                      AGRIVEX
                    </span>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default AgricultureVision