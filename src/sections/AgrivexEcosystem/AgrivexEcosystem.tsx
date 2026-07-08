import Container from '../../components/shared/Container'
import Reveal from '../../components/shared/Reveal'
import './AgrivexEcosystem.css'

const ecosystemStages = [
  {
    title: 'Research & Innovation',
    description:
      'Scientific exploration and field insight guide practical agricultural advancement.',
  },
  {
    title: 'Agricultural Inputs',
    description:
      'Quality inputs support healthier crops, productive farms, and more reliable outcomes.',
  },
  {
    title: 'AI & Precision Agriculture',
    description:
      'Intelligent systems help convert farm data into timely, precise decisions.',
  },
  {
    title: 'Modern Farming',
    description:
      'Technology-enabled practices strengthen efficiency across everyday agricultural operations.',
  },
  {
    title: 'Processing & Packaging',
    description:
      'Post-harvest systems help protect quality as agricultural produce moves forward.',
  },
  {
    title: 'Storage, Distribution & Global Export',
    description:
      'A connected value chain supports movement from farm output to wider markets.',
  },
] as const

function AgrivexEcosystem() {
  return (
    <section
      className="agrivex-ecosystem"
      aria-labelledby="agrivex-ecosystem-title"
    >
      <Container>
        <Reveal className="agrivex-ecosystem__intro">
          <p className="agrivex-ecosystem__eyebrow">AGRIVEX ECOSYSTEM</p>
          <h2 id="agrivex-ecosystem-title">
            Building across the complete agricultural value chain.
          </h2>
          <p>
            Agrivex connects science, technology, farm operations, and market
            readiness to support a more capable agricultural ecosystem.
          </p>
        </Reveal>

        <ol
          className="agrivex-ecosystem__stages"
          aria-label="Agrivex ecosystem journey"
        >
          {ecosystemStages.map((stage, index) => (
            <li className="agrivex-ecosystem__stage" key={stage.title}>
              <span className="agrivex-ecosystem__dot" aria-hidden="true" />
              <Reveal
                as="article"
                className="agrivex-ecosystem__stage-content"
                delay={index * 80}
              >
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

export default AgrivexEcosystem
