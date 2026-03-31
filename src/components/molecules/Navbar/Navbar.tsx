import { useState, useEffect } from 'react';
import './Navbar.css';
import Button from '../../atoms/Button/Button';

const navItems = [
  { id: 'hero', label: 'Início' },
  { id: 'projects', label: 'Projetos' },
  { id: 'experience', label: 'Experiência' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Formação' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
      aria-label="Navegação principal"
    >
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo" onClick={closeMobileMenu}>
          TL<span>.</span>
        </a>

        {/* Desktop Menu */}
        <div className="navbar-menu">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-navbar-cta">
            Contato
          </a>
        </div>

        {/* Mobile Toggle */}
        <Button
          open={isMobileMenuOpen}
          onClick={toggleMobileMenu}
          ariaLabel="Abrir menu"
          className="navbar-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </Button>

        {/* Mobile Menu Dropdown */}
        <div className={`navbar-mobile ${isMobileMenuOpen ? 'navbar-mobile--open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="nav-link-mobile"
              onClick={closeMobileMenu}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-navbar-cta-mobile" onClick={closeMobileMenu}>
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
