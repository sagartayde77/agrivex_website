import Button from '../../components/shared/Button'
import Container from '../../components/shared/Container'
import Reveal from '../../components/shared/Reveal'
import './Careers.css'

const opportunities = [
  'Agronomist',
  'Area Sales Executive',
  'Territory Manager',
  'Business Development Executive',
  'Digital Marketing Executive',
  'Operations Executive',
  'Technology Professionals',
  'Internships',
] as const

function Careers() {
  return (
    <section className="careers" id="careers" aria-labelledby="careers-title">
      <Container>
        <Reveal className="careers__intro">
          <p className="careers__eyebrow">CAREERS</p>
          <h2 id="careers-title">Build the Future of Agriculture with Agrivex</h2>
          <p>
            Agrivex welcomes people who want to work at the intersection of
            agriculture, science, technology, field execution, and sustainable
            progress.
          </p>
        </Reveal>

        <div className="careers__content">
          <Reveal className="careers__why">
            <h3>Why Join Agrivex</h3>
            <p>
              Work on meaningful agricultural challenges with a company focused
              on innovation, precision, digital agriculture, and farmer impact.
            </p>
            <Button href="#career-opportunities" variant="secondary">
              View Careers
            </Button>
          </Reveal>

          <Reveal
            className="careers__opportunities"
            id="career-opportunities"
            delay={120}
          >
            <h3>Current Opportunities</h3>
            <ul>
              {opportunities.map((opportunity) => (
                <li key={opportunity} className="careers__opportunity">
                  <span className="careers__opportunity-arrow" aria-hidden="true">→</span>
                  {opportunity}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default Careers
