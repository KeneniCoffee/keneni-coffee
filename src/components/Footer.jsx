import { FaFacebookF, FaInstagram, FaTiktok, FaTelegramPlane } from 'react-icons/fa';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Payment', href: '#payment' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <h3>KENANI COFFEE</h3>
          <p>“Fresh Coffee. Warm Moments.”</p>
        </div>

        <div className="footer-links">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="socials" aria-label="Social media links">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok">
            <FaTiktok />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noreferrer" aria-label="Telegram">
            <FaTelegramPlane />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Kenani Coffee. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
