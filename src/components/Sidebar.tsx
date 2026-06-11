export default function Sidebar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <button className="sidebar-link" onClick={() => scrollToSection('about')}>
          <span>About</span>
        </button>
        <button className="sidebar-link" onClick={() => scrollToSection('roles')}>
          <span>Roles</span>
        </button>
        <button className="sidebar-link" onClick={() => scrollToSection('skills')}>
          <span>Skills</span>
        </button>
        <button className="sidebar-link" onClick={() => scrollToSection('focus')}>
          <span>Focus</span>
        </button>
        <button className="sidebar-link" onClick={() => scrollToSection('coming-soon')}>
          <span>Coming Soon</span>
        </button>
        <button className="sidebar-link" onClick={() => scrollToSection('contact')}>
          <span>Contact</span>
        </button>
      </nav>
    </aside>
  )
}
