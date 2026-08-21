import { useRef, useState, type KeyboardEvent } from 'react'
import Container from '../../components/shared/Container'
import Reveal from '../../components/shared/Reveal'
import './StrategicCapabilities.css'

import imgInnovation from '../../assets/images/capabilities/innovation.jpg'
import imgPrecision from '../../assets/images/capabilities/precision.jpg'
import imgIntelligence from '../../assets/images/capabilities/intelligence.jpeg'
import imgDigital from '../../assets/images/capabilities/digital.jpeg'
import imgCropManagement from '../../assets/images/capabilities/crop-management.jpg'
import imgAerial from '../../assets/images/capabilities/aerial.jpg'
import imgWaterOptimization from '../../assets/images/capabilities/water-optimization.jpg'
import imgKnowledge from '../../assets/images/capabilities/knowlegde.jpeg'

type Tone = 'green' | 'blue' | 'gold'

const capabilities = [
  { number: '01', short: 'Innovation', title: 'Agricultural Innovation', appliesTo: 'Research & field trials', description: 'Developing practical agricultural solutions through research, experimentation, and field understanding.', tone: 'green' as Tone, image: imgInnovation, imageAlt: 'Researcher examining a wheat sample in the field' },
  { number: '02', short: 'Precision', title: 'Precision Agriculture', appliesTo: 'Measurement & timing', description: 'Improving farm decisions through precise observation, measurement, and targeted action.', tone: 'gold' as Tone, image: imgPrecision, imageAlt: 'Hand inspecting a crop sample up close' },
  { number: '03', short: 'Intelligence', title: 'Artificial Intelligence', appliesTo: 'Analysis & prediction', description: 'Using intelligent systems to support analysis, prediction, and smarter agricultural planning.', tone: 'blue' as Tone, image: imgIntelligence, imageAlt: 'Digital data visualization representing agricultural intelligence' },
  { number: '04', short: 'Digital', title: 'Digital Agriculture', appliesTo: 'Data & workflows', description: 'Connecting agricultural knowledge and field data through digital tools and workflows.', tone: 'blue' as Tone, image: imgDigital, imageAlt: 'Farmer using a digital device in the field' },
  { number: '05', short: 'Crop Management', title: 'Smart Crop Management', appliesTo: 'Monitoring & yield', description: 'Helping farmers monitor crop needs and improve productivity with informed management practices.', tone: 'green' as Tone, image: imgCropManagement, imageAlt: 'Aerial view of managed crop rows' },
  { number: '06', short: 'Aerial', title: 'Drone Technologies', appliesTo: 'Aerial survey', description: 'Applying aerial intelligence to strengthen field visibility and precision agriculture operations.', tone: 'blue' as Tone, image: imgAerial, imageAlt: 'Agricultural drone surveying a field' },
  { number: '07', short: 'Water', title: 'Water Optimization', appliesTo: 'Irrigation planning', description: 'Supporting efficient water use through better planning, monitoring, and resource decisions.', tone: 'gold' as Tone, image: imgWaterOptimization, imageAlt: 'Irrigation system watering crop rows' },
  { number: '08', short: 'Knowledge', title: 'Knowledge Development', appliesTo: 'Training & research', description: 'Building agricultural capability through scientific expertise, learning, and applied insight.', tone: 'green' as Tone, image: imgKnowledge, imageAlt: 'Field expert sharing knowledge with a farmer' },
] as const

function StrategicCapabilities() {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const active = capabilities[activeIndex]

  const selectCapability = (index: number) => {
    if (index !== activeIndex) setActiveIndex(index)
  }

  const focusTab = (index: number) => {
    const total = capabilities.length
    const next = (index + total) % total
    selectCapability(next)
    tabRefs.current[next]?.focus()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      focusTab(activeIndex + 1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      focusTab(activeIndex - 1)
    } else if (event.key === 'Home') {
      event.preventDefault()
      focusTab(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      focusTab(capabilities.length - 1)
    }
  }

  return (
    <section className="strategic-capabilities" id="capabilities" aria-labelledby="strategic-capabilities-title">
      <Container>
        <Reveal className="strategic-capabilities__label">
          <span>03</span>
          <i />
          <strong>STRATEGIC CAPABILITIES</strong>
        </Reveal>

        <div className="strategic-capabilities__header-content">
          <Reveal as="div" threshold={0.2}>
            <h2 id="strategic-capabilities-title">Eight capabilities, one field-tested approach.</h2>
          </Reveal>
        </div>

        <Reveal className="strategic-capabilities__panel" threshold={0.1} delay={150}>
          <div
            className="strategic-capabilities__tabs"
            role="tablist"
            aria-label="Strategic capabilities"
            onKeyDown={handleKeyDown}
          >
            {capabilities.map((capability, index) => {
              const isActive = index === activeIndex

              return (
                <button
                  type="button"
                  role="tab"
                  key={capability.number}
                  ref={(node) => { tabRefs.current[index] = node }}
                  id={`capability-tab-${capability.number}`}
                  aria-selected={isActive}
                  aria-controls={`capability-panel-${capability.number}`}
                  tabIndex={isActive ? 0 : -1}
                  data-tone={capability.tone}
                  className={`strategic-capabilities__tab ${isActive ? 'strategic-capabilities__tab--active' : ''}`}
                  onMouseEnter={() => selectCapability(index)}
                  onFocus={() => selectCapability(index)}
                  onClick={() => selectCapability(index)}
                >
                  <span className="strategic-capabilities__tab-number">{capability.number}</span>
                  <span className="strategic-capabilities__tab-label">{capability.short}</span>
                </button>
              )
            })}
          </div>

          <div
            className="strategic-capabilities__stage"
            role="tabpanel"
            id={`capability-panel-${active.number}`}
            aria-labelledby={`capability-tab-${active.number}`}
            data-tone={active.tone}
          >
            <div className="strategic-capabilities__stage-media">
              <img key={active.image} src={active.image} alt={active.imageAlt} />
              <span className="strategic-capabilities__stage-media-badge">{active.number}</span>
            </div>

            <div className="strategic-capabilities__stage-body">
              <span className="strategic-capabilities__stage-eyebrow">CAPABILITY {active.number} OF 08</span>
              <h3>{active.title}</h3>
              <p>{active.description}</p>
              <span className="strategic-capabilities__stage-tag">Applies to &mdash; {active.appliesTo}</span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default StrategicCapabilities
