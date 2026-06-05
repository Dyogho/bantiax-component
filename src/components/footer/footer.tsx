import Icon from '@/components/icon/icon'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-badge">B</div>
            BANTIAX
          </div>
          <ul className="footer-contact-list">
            <li><Icon name="phone" size={16} /> +51 984 000 000</li>
            <li><Icon name="mail" size={16} /> contacto@bantiax.com</li>
            <li><Icon name="map-pin" size={16} /> Lima, Perú</li>
          </ul>
          <div className="footer-socials" aria-label="Redes sociales">
            <a href="#top" aria-label="LinkedIn">in</a>
            <a href="#top" aria-label="Instagram">ig</a>
            <a href="#top" aria-label="Facebook">fb</a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Nosotros</h4>
          <ul>
            <li><a href="#top">Aliados</a></li>
            <li><a href="#top">El equipo</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Servicios</h4>
          <ul>
            <li><a href="#beneficios">Fintech Llave en Mano</a></li>
            <li><a href="#riesgo">Soluciones Tecnológicas</a></li>
            <li><a href="#servicios">Consultoría</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Soluciones Tecnológicas</h4>
          <ul>
            <li><a href="#riesgo">Plataforma de Créditos</a></li>
            <li><a href="#riesgo">Motor de Riesgos</a></li>
            <li><a href="#riesgo">Indicadores de Riesgos</a></li>
            <li><a href="#riesgo">Bloqueo de Celulares</a></li>
            <li><a href="#riesgo">Validación Facial</a></li>
            <li><a href="#riesgo">Seguros</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Bantiax. Todos los derechos reservados.</div>
    </footer>
  )
}

export default Footer
