import { useState } from 'react';
import { FaCoffee, FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Payment', href: '#payment' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="navbar-wrap">
      <nav className="navbar container" aria-label="Main navigation">
        <a href="#home" className="brand" aria-label="Kenani Coffee home">
          <span className="brand-mark"><FaCoffee /></span>
          <span>Kenani Coffee</span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={handleNavClick}>
              {item.label}
            </a>
          ))}
          <a href="#menu" className="nav-cta" onClick={handleNavClick}>
            View Menu
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
