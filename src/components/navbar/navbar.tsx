import Icon from '@/components/icon/icon'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo-badge">B</div>
        <span className="logo-text">BANTIAX</span>
      </div>
      <div className="nav-links">
        <a href="#beneficios">Beneficios</a>
        <a href="#riesgo">Gestión de Riesgo</a>
        <a href="#servicios">Servicios</a>
      </div>
      <a className="btn-primary navbar-cta" href="#servicios">
        <Icon name="clock" size={18} />
        <span>Contáctanos</span>
      </a>
    </nav>
  )
}

export default Navbar
