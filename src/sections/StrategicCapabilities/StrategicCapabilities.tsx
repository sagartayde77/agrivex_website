import { useEffect, useState } from 'react'
import Container from '../../components/shared/Container'
import Reveal from '../../components/shared/Reveal'
import './StrategicCapabilities.css'

import knowledgeImage from '../../assets/images/capabilities/knowlegde.jpeg'
import innovationImage from '../../assets/images/capabilities/innovation.jpg'
import cropManagementImage from '../../assets/images/capabilities/crop-management.jpg'
import aerialImage from '../../assets/images/capabilities/aerial.jpg'
import irrigationImage from '../../assets/images/capabilities/water-optimization.jpg'

const capabilities = [
  {
    number: '01',
    label: 'Knowledge',
    title: 'Knowledge Development',
    description:
      'Building agricultural capability through scientific expertise, learning, and applied field knowledge.',
    image: knowledgeImage,
    alt: 'Agricultural knowledge and field observation',
  },
  {
    number: '02',
    label: 'Innovation',
    title: 'Agricultural Innovation',
    description:
      'Developing practical agricultural solutions through research, experimentation, and field understanding.',
    image: innovationImage,
    alt: 'Agricultural innovation and crop research',
  },
  {
    number: '03',
    label: 'Crop Management',
    title: 'Smart Crop Management',
    description:
      'Helping farmers monitor crop needs and improve productivity through informed management practices.',
    image: cropManagementImage,
    alt: 'Crop management in an agricultural field',
  },
  {
    number: '04',
    label: 'Aerial',
    title: 'Aerial Agriculture',
    description:
      'Using aerial visibility and drone technologies to strengthen field observation and agricultural decisions.',
    image: aerialImage,
    alt: 'Aerial view of agricultural fields',
  },
  {
    number: '05',
    label: 'Irrigation',
    title: 'Water Optimization',
    description:
      'Supporting efficient water use through better irrigation planning, monitoring, and resource decisions.',
    image: irrigationImage,
    alt: 'Agricultural irrigation system',
  },
] as const

function StrategicCapabilities() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isInside, setIsInside] = useState(false)
  const [autoIndex, setAutoIndex] = useState(2)

  /*
   * Automatic movement only happens when the user is NOT interacting
   * with the cards. As soon as the pointer enters the card area,
   * the automatic animation stops.
   */
  useEffect(() => {
    if (isInside || hoveredIndex !== null) return

    const timer = window.setInterval(() => {
      setAutoIndex((current) => (current + 1) % capabilities.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [isInside, hoveredIndex])

  const activeIndex = hoveredIndex ?? autoIndex

  return (
    <section
      className="strategic-capabilities"
      id="capabilities"
      aria-labelledby="strategic-capabilities-title"
    >
      <Container>
        <Reveal className="strategic-capabilities__section-label">
          <span className="strategic-capabilities__section-number">03</span>
          <span className="strategic-capabilities__section-line" />
          <span className="strategic-capabilities__section-name">
            STRATEGIC CAPABILITIES
          </span>
        </Reveal>

        <div className="strategic-capabilities__intro">
          <Reveal className="strategic-capabilities__intro-main">
            <p className="strategic-capabilities__eyebrow">
              WHAT WE BRING
            </p>

            <h2 id="strategic-capabilities-title">
              Built around
              <span> agricultural understanding.</span>
            </h2>
          </Reveal>

          <Reveal
            className="strategic-capabilities__intro-copy"
            delay={100}
          >
            <p>
              Agrivex brings together knowledge, innovation, field
              management, aerial intelligence, and resource optimization
              to build a more connected agricultural ecosystem.
            </p>

            <div className="strategic-capabilities__counter">
              <span>
                {String(activeIndex + 1).padStart(2, '0')}
              </span>

              <i />

              <span>
                {String(capabilities.length).padStart(2, '0')}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal
          className="strategic-capabilities__showcase"
          delay={180}
        >
          <div
            className="strategic-capabilities__cards"
            onMouseEnter={() => setIsInside(true)}
            onMouseLeave={() => {
              setIsInside(false)
              setHoveredIndex(null)
            }}
          >
            {capabilities.map((capability, index) => {
              const isActive = index === activeIndex

              return (
                <article
                  key={capability.number}
                  className={`strategic-capabilities__card ${
                    isActive
                      ? 'strategic-capabilities__card--active'
                      : ''
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                >
                  <img
                    className="strategic-capabilities__card-image"
                    src={capability.image}
                    alt={capability.alt}
                  />

                  <div
                    className="strategic-capabilities__card-overlay"
                    aria-hidden="true"
                  />

                  <div className="strategic-capabilities__card-top">
                    <span className="strategic-capabilities__number">
                      {capability.number}
                    </span>

                    <span
                      className="strategic-capabilities__arrow"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </div>

                  <div className="strategic-capabilities__card-content">
                    <span className="strategic-capabilities__label">
                      {capability.label}
                    </span>

                    <h3>{capability.title}</h3>

                    <p>{capability.description}</p>
                  </div>

                  <div
                    className="strategic-capabilities__vertical-label"
                    aria-hidden="true"
                  >
                    {capability.label}
                  </div>

                  <span
                    className="strategic-capabilities__edge-number"
                    aria-hidden="true"
                  >
                    {capability.number}
                  </span>
                </article>
              )
            })}
          </div>
        </Reveal>

        <Reveal
          className="strategic-capabilities__footer"
          delay={250}
        >
          <span>KNOWLEDGE</span>
          <i />
          <span>INNOVATION</span>
          <i />
          <span>FIELD</span>
          <i />
          <span>INTELLIGENCE</span>
          <i />
          <span>EFFICIENCY</span>
        </Reveal>
      </Container>
    </section>
  )
}

export default StrategicCapabilities