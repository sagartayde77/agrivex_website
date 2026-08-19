import Reveal from '../../components/shared/Reveal'
import agrivexLogo from '../../assets/logo/agrivex-logo.png'
import './AgrivexEcosystem.css'

const ecosystemStages = [
  {
    number: '01',
    title: 'Research & Understanding',
    description:
      'Field knowledge and practical understanding help identify the needs of modern agriculture.',
  },
  {
    number: '02',
    title: 'Agricultural Products',
    description:
      'Reliable agricultural and crop-protection products form the foundation of Agrivex.',
  },
  {
    number: '03',
    title: 'Farm',
    description:
      'Our work stays connected to the realities, challenges, and opportunities found in the field.',
  },
  {
    number: '04',
    title: 'Protect & Support',
    description:
      'The right products, knowledge, and relationships help farmers protect their crops and move forward.',
  },
  {
    number: '05',
    title: 'Partnerships',
    description:
      'Strong dealer and customer relationships help connect Agrivex products with the agricultural community.',
  },
  {
    number: '06',
    title: 'Growth',
    description:
      'Better relationships, dependable products, and agricultural understanding create long-term growth.',
  },
] as const

function EcosystemCard({
  stage,
  side,
  delay,
}: {
  stage: (typeof ecosystemStages)[number]
  side: 'left' | 'right'
  delay: number
}) {
  return (
    <Reveal
      as="article"
      className={`ecosystem-card ecosystem-card--${side}`}
      delay={delay}
    >
      <div className="ecosystem-card__connector" aria-hidden="true">
        <span />
      </div>

      <div className="ecosystem-card__number">{stage.number}</div>

      <div className="ecosystem-card__body">
        <h3>{stage.title}</h3>
        <p>{stage.description}</p>
      </div>
    </Reveal>
  )
}

function AgrivexEcosystem() {
  const leftStages = ecosystemStages.slice(0, 3)
  const rightStages = ecosystemStages.slice(3, 6)

  return (
    <section
      className="agrivex-ecosystem"
      id="ecosystem"
      aria-labelledby="agrivex-ecosystem-title"
    >
      <div className="agrivex-ecosystem__container">
        <Reveal className="agrivex-ecosystem__header">
          <div className="agrivex-ecosystem__label">
            <span>02</span>
            <i />
            <strong>AGRIVEX ECOSYSTEM</strong>
          </div>

          <div className="agrivex-ecosystem__header-content">
            <h2 id="agrivex-ecosystem-title">
              One ecosystem.
              <br />
              Connected by purpose.
            </h2>

            <p>
              Agrivex brings together field understanding, dependable
              agricultural products, farmers, dealers, and long-term
              partnerships to create sustainable agricultural growth.
            </p>
          </div>
        </Reveal>

        <div className="agrivex-ecosystem__hub">
          <div className="agrivex-ecosystem__column agrivex-ecosystem__column--left">
            {leftStages.map((stage, index) => (
              <EcosystemCard
                key={stage.number}
                stage={stage}
                side="left"
                delay={index * 120}
              />
            ))}
          </div>

          <Reveal className="agrivex-ecosystem__center">
            <div className="agrivex-ecosystem__orbit agrivex-ecosystem__orbit--outer" />
            <div className="agrivex-ecosystem__orbit agrivex-ecosystem__orbit--inner" />

            <div className="agrivex-ecosystem__logo">
              <img src={agrivexLogo} alt="Agrivex" />
            </div>

            <span className="agrivex-ecosystem__center-label">
              AGRICULTURE
              <br />
              ECOSYSTEM
            </span>
          </Reveal>

          <div className="agrivex-ecosystem__column agrivex-ecosystem__column--right">
            {rightStages.map((stage, index) => (
              <EcosystemCard
                key={stage.number}
                stage={stage}
                side="right"
                delay={360 + index * 120}
              />
            ))}
          </div>
        </div>

        <Reveal className="agrivex-ecosystem__footer">
          <span>FIELD</span>
          <i />
          <span>PRODUCT</span>
          <i />
          <span>PARTNERSHIP</span>
          <i />
          <span>GROWTH</span>
        </Reveal>
      </div>
    </section>
  )
}

export default AgrivexEcosystem