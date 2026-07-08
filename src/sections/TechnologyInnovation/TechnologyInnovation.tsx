import Container from '../../components/shared/Container'
import Reveal from '../../components/shared/Reveal'
import './TechnologyInnovation.css'

const technologyTopics = [
  'Artificial Intelligence',
  'Drone Technology',
  'Predictive Analytics',
  'Digital Agriculture',
  'Precision Farming',
  'Smart Decision Systems',
] as const

function TechnologyInnovation() {
  return (
    <section
      className="technology-innovation"
      aria-labelledby="technology-innovation-title"
    >
      <Container className="technology-innovation__container">
        <Reveal className="technology-innovation__content">
          <p className="technology-innovation__eyebrow">TECHNOLOGY & INNOVATION</p>
          <h2 id="technology-innovation-title">
            Technology leadership for more intelligent farming systems.
          </h2>
          <p>
            Agrivex brings scientific knowledge and digital capability together
            to support better observation, analysis, planning, and execution
            across modern agriculture.
          </p>
        </Reveal>

        <Reveal className="technology-innovation__list" aria-label="Technology focus areas">
          {technologyTopics.map((topic, index) => (
            <p key={topic} style={{ transitionDelay: `${index * 60}ms` }}>
              {topic}
            </p>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}

export default TechnologyInnovation
