import Button from '../../components/shared/Button'
import Container from '../../components/shared/Container'
import Reveal from '../../components/shared/Reveal'
import './FarmerSolutions.css'

const farmerSupportAreas = [
  'Crop Planning',
  'Crop Nutrition Guidance',
  'Pest & Disease Management',
  'Water Management',
  'Spray Schedule Guidance',
  'AI-Based Farming Insights',
  'Drone Spraying Assistance',
  'Harvest Planning',
  'Market & Selling Guidance',
  'Modern Farming Technologies',
] as const

function FarmerSolutions() {
  return (
    <section
      className="farmer-solutions"
      id="farmer"
      aria-labelledby="farmer-solutions-title"
    >
      <Container>
        <Reveal className="farmer-solutions__intro">
          <p className="farmer-solutions__eyebrow">FOR EVERY FARMER</p>
          <h2 id="farmer-solutions-title">
            Helping Farmers Make Better Decisions Every Season
          </h2>
          <p>
            Agrivex supports farmers across the crop lifecycle with practical
            guidance, digital intelligence, precision practices, and modern
            agricultural technologies.
          </p>
        </Reveal>

        <div className="farmer-solutions__grid" aria-label="Farmer support areas">
          {farmerSupportAreas.map((area, index) => (
            <Reveal
              as="article"
              className="farmer-solutions__item"
              key={area}
              delay={index * 60}
            >
              <span className="farmer-solutions__number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{area}</h3>
            </Reveal>
          ))}
        </div>

        <Reveal className="farmer-solutions__action">
          <Button href="#contact">Register as Farmer</Button>
        </Reveal>
      </Container>
    </section>
  )
}

export default FarmerSolutions
