import './Hero.css'
import heroImage from '../../assets/images/hero/hero_image.jpg'

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero__overlay" />

      <div className="hero__content">
        <h1 className="hero__title">
          Quality Agricultural
          <br />
          Products for
          <br />
          Every Farm
        </h1>

        <p className="hero__description">
          Agrivex supplies trusted agricultural products and crop-protection
          solutions backed by field knowledge, reliable dealer relationships,
          and a farmer-first approach.
        </p>

        <div className="hero__actions">
          <a
            href="#dealer"
            className="hero__button hero__button--primary"
          >
            Become a Dealer
          </a>

          <a
            href="#farmer"
            className="hero__button hero__button--secondary"
          >
            Farmer Support
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero