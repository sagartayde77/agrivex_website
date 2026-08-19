import Container from '../../components/shared/Container'
import Reveal from '../../components/shared/Reveal'
import farmerImage from '../../assets/images/farmer/farmer.png'
import './FarmerSolutions.css'

const farmerSolutions = [
  {
    number: '01',
    title: 'Crop Planning',
    description:
      'Better planning from the beginning of the crop cycle helps farmers make informed decisions.',
  },
  {
    number: '02',
    title: 'Crop Nutrition Guidance',
    description:
      'Practical guidance to support healthier crops through informed nutrition management.',
  },
  {
    number: '03',
    title: 'Pest & Disease Management',
    description:
      'Timely understanding and practical approaches to help farmers protect their crops.',
  },
  {
    number: '04',
    title: 'Water Management',
    description:
      'Smarter water planning and efficient resource use throughout the growing season.',
  },
] as const

function FarmerSolutions() {
  return (
    <section
      className="farmer-solutions"
      id="farmer"
      aria-labelledby="farmer-solutions-title"
    >
      <Container>
        <Reveal className="farmer-solutions__header">
          <div className="farmer-solutions__eyebrow">
            <span>03</span>
            <i />
            <strong>FOR EVERY FARMER</strong>
          </div>

          <div className="farmer-solutions__heading">
            <h2 id="farmer-solutions-title">
              Helping farmers make
              <br />
              better decisions.
            </h2>

            <p>
              Agrivex supports farmers across the crop lifecycle with practical
              guidance, field understanding, and modern agricultural solutions.
            </p>
          </div>
        </Reveal>

        <div className="farmer-solutions__layout">
          <Reveal
            className="farmer-solutions__visual"
            delay={120}
          >
            <div className="farmer-solutions__image-wrap">
              <img
                src={farmerImage}
                alt="Agricultural professional working with a farmer"
              />

              <div className="farmer-solutions__image-overlay" />

              <div className="farmer-solutions__image-label">
                <span>AGRIVEX</span>
                <small>FIELD TO FARM</small>
              </div>
            </div>
          </Reveal>

          <div className="farmer-solutions__list">
            {farmerSolutions.map((solution, index) => (
              <Reveal
                as="article"
                key={solution.number}
                className="farmer-solutions__item"
                delay={180 + index * 90}
              >
                <div className="farmer-solutions__item-number">
                  {solution.number}
                </div>

                <div className="farmer-solutions__item-main">
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                </div>

                <div className="farmer-solutions__item-arrow">
                  <span>↗</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FarmerSolutions