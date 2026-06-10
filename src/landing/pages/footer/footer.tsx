import Icon from '@/components/icon/icon'
import { footerData } from '@/landing/data'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <img alt={footerData.brand} src="https://doinperu.com/bantiax/wp-content/uploads/2026/06/Bantiax_logo-300x141.png" />
          </div>
          <ul className="footer-contact-list">
            {footerData.contacts.map((contact) => (
              <li key={contact.text}>
                <Icon name={contact.icon} size={16} /> {contact.text}
              </li>
            ))}
          </ul>
          <div className="footer-socials" aria-label="Redes sociales">
            {footerData.socials.map((social) => (
              <a href={social.href} aria-label={social.label} key={social.label}>
                {social.text}
              </a>
            ))}
          </div>
        </div>
        {footerData.columns.map((column) => (
          <div className="footer-col" key={column.title}>
            <h4>{column.title}</h4>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">{footerData.copyright}</div>
    </footer>
  )
}

export default Footer
