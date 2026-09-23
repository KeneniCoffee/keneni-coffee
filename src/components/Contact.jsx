import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaWhatsapp, FaDirections } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact-section section">
      <div className="container contact-card">
        <div className="section-heading left-align">
          <p className="eyebrow dark">Contact us</p>
          <h2 className="section-title">Kenani Coffee</h2>
        </div>

        <div className="contact-info">
          <p><FaMapMarkerAlt /> Location: Robe, Ethiopia</p>
          <p><FaPhoneAlt /> Phone: 0912101721</p>
          <p><FaEnvelope /> Email: kenenicoffee1@gmail.com</p>
        </div>

        <div className="contact-hours">
          <h3>Opening Hours</h3>
          <p>Monday – Sunday</p>
          <p>8:00 AM – 9:00 PM</p>
        </div>

        <div className="contact-actions">
          <a href="tel:0912101721" className="primary-btn">
            <FaPhoneAlt /> Call Us
          </a>
          <a href="https://wa.me/251912101721" target="_blank" rel="noreferrer" className="secondary-btn">
            <FaWhatsapp /> WhatsApp
          </a>
          <a
            href="https://maps.google.com/?q=Robe+Ethiopia"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            <FaDirections /> Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
