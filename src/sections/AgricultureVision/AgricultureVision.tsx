import Container from '../../components/shared/Container'
import Reveal from '../../components/shared/Reveal'
import './AgricultureVision.css'

const visionPillars = [
  {
    number: '01',
    title: 'Science',
    description:
      'Scientific research and agronomic expertise improve productivity while supporting long-term sustainability.',
  },
  {
    number: '02',
    title: 'Technology',
    description:
      'Artificial Intelligence, precision agriculture and drone technologies enable smarter farming decisions.',
  },
  {
    number: '03',
    title: 'Sustainability',
    description:
      'Efficient resource management strengthens agricultural resilience for future generations.',
  },
] as const

function AgricultureVision() {
  return (
    <section
      className="agriculture-vision"
      id="about"
      aria-labelledby="agriculture-vision-title"
    >
      <Container>
        <Reveal className="agriculture-vision__intro">
          <p className="agriculture-vision__eyebrow">THE NEXT ERA OF AGRICULTURE</p>
          <h2 id="agriculture-vision-title">
            Agriculture is entering a new era driven by intelligence, precision,
            and sustainability.
          </h2>
          <div className="agriculture-vision__copy">
            <p>
              Modern agriculture faces increasing challenges including climate
              uncertainty, resource optimization, rising demand for food, and the
              need for smarter decision-making.
            </p>
            <p>
              Scientific innovation, Artificial Intelligence, precision
              agriculture, and digital technologies are transforming how farms
              operate.
            </p>
            <p>Agrivex exists to help accelerate that transformation.</p>
          </div>
        </Reveal>

        <div className="agriculture-vision__pillars">
          {visionPillars.map((pillar, index) => (
            <Reveal
              as="article"
              className="agriculture-vision__pillar"
              key={pillar.number}
              delay={index * 120}
            >
              <span className="agriculture-vision__number">{pillar.number}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default AgricultureVision
