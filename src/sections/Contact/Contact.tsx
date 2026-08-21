import Button from '../../components/shared/Button'
import Container from '../../components/shared/Container'
import Reveal from '../../components/shared/Reveal'
import './Contact.css'

const contactDetails = [
  {
    number: '01',
    label: 'Business Email',
    value: 'contact@agrivexglobal.com',
    href: 'mailto:contact@agrivexglobal.com',
  },
  {
    number: '02',
    label: 'Phone',
    value: '+91 72760 21972',
    href: 'tel:+917276021972',
  },
  {
    number: '03',
    label: 'Phone',
    value: '+91 95036 50545',
    href: 'tel:+919503650545',
  },
  {
    number: '04',
    label: 'Address',
    value: '1107, Gate No. 559/1 & 564/6, Majestique City, Haveli, Pune, Maharashtra – 412207, India ZaubaCorp',
  },
]

function Contact() {
  return (
    <section
      className="contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <Container className="contact__container">

        <Reveal className="contact__header">
          <div className="contact__label">
            <span className="contact__label-line" />
            <span>CONTACT AGRIVEX</span>
          </div>

          <span className="contact__index">06</span>
        </Reveal>

        <div className="contact__main">

          <Reveal className="contact__message">
            <p className="contact__eyebrow">
              Let&apos;s connect
            </p>

            <h2 id="contact-title">
              Good agriculture
              <span>starts with</span>
              good relationships.
            </h2>

            <p className="contact__description">
              Whether you are looking to work with Agrivex, become a
              dealer partner, or simply want to know more about us,
              we would be glad to hear from you.
            </p>

            <Button href="mailto:contact@agrivexglobal.com">
              Talk to Agrivex
              <span aria-hidden="true">↗</span>
            </Button>
          </Reveal>

          <Reveal
            className="contact__information"
            delay={140}
          >
            <div className="contact__information-heading">
              <span>DIRECT CONTACT</span>

              <span className="contact__status">
                <i />
                AVAILABLE
              </span>
            </div>

            <div className="contact__details">
              {contactDetails.map((detail) => (
                <div
                  className="contact__detail"
                  key={detail.number}
                >
                  <span className="contact__number">
                    {detail.number}
                  </span>

                  <span className="contact__detail-content">
                    <span className="contact__detail-label">
                      {detail.label}
                    </span>

                    {detail.href ? (
                      <a
                        className="contact__detail-value contact__detail-link"
                        href={detail.href}
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span className="contact__detail-value">
                        {detail.value}
                      </span>
                    )}
                  </span>

                  {detail.href && (
                    <a
                      className="contact__arrow"
                      href={detail.href}
                      aria-label={`Contact Agrivex via ${detail.label}`}
                    >
                      ↗
                    </a>
                  )}

                  <span
                    className="contact__detail-line"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>

            <div className="contact__information-footer">
              <span>MON – FRI</span>
              <span>9:00 AM – 6:00 PM IST</span>
            </div>
          </Reveal>

        </div>

        <Reveal
          className="contact__statement"
          delay={220}
        >
          <div className="contact__statement-track">
            <span>FIELD</span>
            <i />
            <span>TRUST</span>
            <i />
            <span>PARTNERSHIP</span>
            <i />
            <span>GROWTH</span>
          </div>
        </Reveal>

      </Container>
    </section>
  )
}

export default Contact