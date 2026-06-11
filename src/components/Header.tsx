import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <button 
            className="logo-button"
            onClick={() => scrollToSection('hero')}
          >
            Pramod Pattanayak
          </button>
        </div>

        <button 
          className="menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <button className="nav-link" onClick={() => scrollToSection('about')}>
            About
          </button>
          <button className="nav-link" onClick={() => scrollToSection('roles')}>
            Roles
          </button>
          <button className="nav-link" onClick={() => scrollToSection('skills')}>
            Skills
          </button>
          <button className="nav-link" onClick={() => scrollToSection('focus')}>
            Focus
          </button>
          <button className="nav-link" onClick={() => scrollToSection('contact')}>
            Contact
          </button>
        </nav>
      </div>
    </header>
  )
}
