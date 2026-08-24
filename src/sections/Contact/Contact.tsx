import Button from '../../components/shared/Button'
import Container from '../../components/shared/Container'
import Reveal from '../../components/shared/Reveal'
import './Contact.css'

type ContactDetailType = 'email' | 'phone' | 'address' | 'time'

type ContactDetail = {
  label: string
  value: string
  type: ContactDetailType
  href?: string
}

const contactDetails: ContactDetail[] = [
  {
    label: 'Business Email',
    value: 'contact@agrivexglobal.com',
    href: 'mailto:contact@agrivexglobal.com',
    type: 'email',
  },
  {
    label: 'Phone',
    value: '+91 72760 21972',
    href: 'tel:+917276021972',
    type: 'phone',
  },
  {
    label: 'Phone',
    value: '+91 95036 50545',
    href: 'tel:+919503650545',
    type: 'phone',
  },
  {
    label: 'Address',
    value:
      '1107, Gate No. 559/1 & 564/6, Majestique City, Haveli, Pune, Maharashtra – 412207, India',
    href:
      'https://www.google.com/maps/search/?api=1&query=Majestique+City+Haveli+Pune+Maharashtra+412207',
    type: 'address',
  },
  {
    label: 'Business Hours',
    value: 'Mon – Fri, 9:00 AM – 6:00 PM IST',
    type: 'time',
  },
]

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7.5 3.5 5 5c-.8.5-1.1 1.5-.8 2.4 1.7 5.4 6 9.7 11.4 11.4.9.3 1.9 0 2.4-.8l1.5-2.5c.4-.7.2-1.6-.5-2l-3-1.7c-.6-.3-1.3-.2-1.7.3l-1.2 1.4a13.3 13.3 0 0 1-5.2-5.2l1.4-1.2c.5-.4.6-1.1.3-1.7l-1.7-3c-.4-.7-1.3-.9-2-.5Z" />
    </svg>
  )
}

function AddressIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  )
}

function ConnectIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M16 8a4 4 0 0 0-5.66 0l-3.5 3.5a4 4 0 0 0 5.66 5.66l1.75-1.75" />
      <path d="M8 16a4 4 0 0 0 5.66 0l3.5-3.5a4 4 0 0 0-5.66-5.66l-1.75 1.75" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  )
}

function DetailIcon({ type }: { type: ContactDetailType }) {
  switch (type) {
    case 'email':
      return <EmailIcon />

    case 'phone':
      return <PhoneIcon />

    case 'address':
      return <AddressIcon />

    case 'time':
      return <ClockIcon />

    default:
      return null
  }
}

function Contact() {
  return (
    <section
      className="contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <Container className="contact__container">
        <Reveal className="contact__intro">
          <p className="contact__eyebrow">LET&apos;S CONNECT</p>

          <h2 id="contact-title">
            <span>&nbsp;Good agriculture</span>
            <span className="contact__heading-accent">starts with</span>
            <span>&nbsp;good relationships.</span>
          </h2>

          <p className="contact__description">
            Whether you are looking to work with Agrivex, become a dealer
            partner, or simply want to know more about us, we would be glad
            to hear from you.
          </p>

          <Button href="mailto:contact@agrivexglobal.com?subject=Business%20Enquiry%20for%20Agrivex&body=Hello%20Agrivex%20team%2C%0A%0AI%20would%20like%20to%20get%20in%20touch%20regarding...">
            Talk to Agrivex
          </Button>
        </Reveal>

        <Reveal className="contact__panel" delay={120}>
          <div className="contact__panel-header">
            <div className="contact__panel-title">
              <span className="contact__panel-title-icon">
                <ConnectIcon />
              </span>

              <h3>Connect with Us</h3>
            </div>
          </div>

          <div className="contact__details">
            {contactDetails.map((detail) => {
              const content = (
                <>
                  <span className="contact__icon">
                    <DetailIcon type={detail.type} />
                  </span>

                  <span className="contact__detail-content">
                    <span className="contact__detail-label">
                      {detail.label}
                    </span>

                    <span className="contact__detail-value">
                      {detail.value}
                    </span>
                  </span>

                  {detail.href && (
                    <span className="contact__detail-arrow">
                      <ArrowIcon />
                    </span>
                  )}
                </>
              )

              if (detail.href) {
                return (
                  <a
                    className="contact__detail"
                    href={detail.href}
                    key={`${detail.label}-${detail.value}`}
                    {...(detail.type === 'address'
                      ? {
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        }
                      : {})}
                  >
                    {content}
                  </a>
                )
              }

              return (
                <div
                  className="contact__detail"
                  key={`${detail.label}-${detail.value}`}
                >
                  {content}
                </div>
              )
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default Contact