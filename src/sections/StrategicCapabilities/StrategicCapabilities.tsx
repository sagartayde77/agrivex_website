import Container from '../../components/shared/Container'
import Reveal from '../../components/shared/Reveal'
import './StrategicCapabilities.css'

const capabilities = [
  {
    title: 'Agricultural Innovation',
    description:
      'Developing practical agricultural solutions through research, experimentation, and field understanding.',
  },
  {
    title: 'Precision Agriculture',
    description:
      'Improving farm decisions through precise observation, measurement, and targeted action.',
  },
  {
    title: 'Artificial Intelligence',
    description:
      'Using intelligent systems to support analysis, prediction, and smarter agricultural planning.',
  },
  {
    title: 'Digital Agriculture',
    description:
      'Connecting agricultural knowledge and field data through digital tools and workflows.',
  },
  {
    title: 'Smart Crop Management',
    description:
      'Helping farmers monitor crop needs and improve productivity with informed management practices.',
  },
  {
    title: 'Drone Technologies',
    description:
      'Applying aerial intelligence to strengthen field visibility and precision agriculture operations.',
  },
  {
    title: 'Water Optimization',
    description:
      'Supporting efficient water use through better planning, monitoring, and resource decisions.',
  },
  {
    title: 'Knowledge Development',
    description:
      'Building agricultural capability through scientific expertise, learning, and applied insight.',
  },
] as const

function StrategicCapabilities() {
  return (
    <section
      className="strategic-capabilities"
      id="capabilities"
      aria-labelledby="strategic-capabilities-title"
    >
      <Container>
        <Reveal className="strategic-capabilities__intro">
          <p className="strategic-capabilities__eyebrow">STRATEGIC CAPABILITIES</p>
          <h2 id="strategic-capabilities-title">
            Core strengths designed for modern agriculture.
          </h2>
        </Reveal>

        <div className="strategic-capabilities__grid">
          {capabilities.map((capability, index) => (
            <Reveal
              as="article"
              className="strategic-capabilities__item"
              key={capability.title}
              delay={index * 80}
            >
              <span className="strategic-capabilities__number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default StrategicCapabilities
