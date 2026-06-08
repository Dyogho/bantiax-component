import Icon from '@/components/icon/icon'

const HEADER_LINKS = [
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Gestión de Riesgo', href: '#riesgo' },
  { label: 'Servicios', href: '#servicios' },
] as const

function Header() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo-badge">B</div>
        <span className="logo-text">BANTIAX</span>
      </div>
      <div className="nav-links">
        {HEADER_LINKS.map((link) => (
          <a href={link.href} key={link.label}>
            {link.label}
          </a>
        ))}
      </div>
      <a className="btn-primary navbar-cta" href="#servicios">
        <Icon name="clock" size={18} />
        <span>Contáctanos</span>
      </a>
    </nav>
  )
}

export default Header
