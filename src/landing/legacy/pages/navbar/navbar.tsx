import Icon from '@/components/icon/icon'
import { navbarData } from '@/landing/legacy/data'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo-badge">{navbarData.badge}</div>
        <span className="logo-text">{navbarData.brand}</span>
      </div>
      <div className="nav-links">
        {navbarData.links.map((link) => (
          <a href={link.href} key={link.label}>
            {link.label}
          </a>
        ))}
      </div>
      <a className="btn-primary navbar-cta" href={navbarData.cta.href}>
        <Icon name={navbarData.cta.icon} size={18} />
        <span>{navbarData.cta.label}</span>
      </a>
    </nav>
  )
}

export default Navbar
