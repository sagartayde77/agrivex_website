import Button from '../../components/shared/Button'
import Container from '../../components/shared/Container'
import Reveal from '../../components/shared/Reveal'
import './Contact.css'

const contactDetails = [
  { label: 'Business Email', value: 'contact@agrivex.in' },
  { label: 'Phone', value: '+91 00000 00000' },
  { label: 'Address', value: 'India' },
  { label: 'Business Hours', value: 'Mon – Fri, 9:00 AM – 6:00 PM IST' },
] as const

function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <Container className="contact__container">
        <Reveal className="contact__intro">
          <p className="contact__eyebrow">CONTACT</p>
          <h2 id="contact-title">Reach Agrivex</h2>
          <p>
            Connect with Agrivex for business enquiries, farmer support, dealer
            partnership opportunities, and agricultural technology conversations.
          </p>
        </Reveal>

        <Reveal className="contact__details" delay={120}>
          {contactDetails.map((detail) => (
            <article className="contact__item" key={detail.label}>
              <h3>{detail.label}</h3>
              <p>{detail.value}</p>
            </article>
          ))}
          <Button href="mailto:contact@agrivex.in">Contact Agrivex</Button>
        </Reveal>
      </Container>
    </section>
  )
}

export default Contact
