import type { CSSProperties, ReactNode } from 'react'
import './landing.css'

type IconProps = {
  className?: string
  size?: number
  style?: CSSProperties
}

type IconName =
  | 'clock'
  | 'key'
  | 'lightbulb'
  | 'arrow-right'
  | 'phone'
  | 'mail'
  | 'map-pin'
  | 'briefcase'
  | 'cpu'
  | 'trending-up'
  | 'globe'
  | 'users'
  | 'dollar-sign'
  | 'check-circle'
  | 'layers'
  | 'smartphone'
  | 'zap'
  | 'bar-chart'
  | 'lock'

type RiskCard = {
  title: string
  desc: string
  icon: IconName
}

const benefits = [
  {
    title: 'Gestión punta a punta automatizada',
    desc: 'Monitoreo continuo y respuestas inmediatas en tiempo real.',
  },
  {
    title: 'El viaje del cliente es seguro',
    desc: 'Infraestructura biométrica robusta contra suplantación.',
  },
  {
    title: 'Rentabilidad y fidelidad de la red',
    desc: 'Modelos analíticos orientados a maximizar el ciclo de retención.',
  },
  {
    title: 'Menos fricción de integración',
    desc: 'Procesos onboarding rápidos y APIs completamente estables.',
  },
  {
    title: 'Focalización inteligente de riesgos',
    desc: 'Segmentación automatizada para control de carteras complejas.',
  },
]

const riskCards: RiskCard[] = [
  {
    title: 'Plataforma Inteligente de Crédito',
    desc: 'Automatiza y evalúa solicitudes en segundos reduciendo drásticamente riesgos operativos.',
    icon: 'smartphone',
  },
  {
    title: 'Modelos de Inteligencia Artificial',
    desc: 'Predicciones precisas basadas en comportamiento transaccional e historiales.',
    icon: 'zap',
  },
  {
    title: 'Monitoreo Continuo de Cartera',
    desc: 'Alertas tempranas y analítica predictiva de salud financiera en tu ecosistema.',
    icon: 'bar-chart',
  },
  {
    title: 'Plataforma de Cobranza Digital',
    desc: 'Estrategias amigables y eficientes para optimizar cada etapa de recuperación.',
    icon: 'layers',
  },
  {
    title: 'Validación de Identidad y Fraude',
    desc: 'Seguridad biométrica avanzada y prevención de riesgos críticos de suplantación.',
    icon: 'lock',
  },
  {
    title: 'Plan de Mitigación Personalizado',
    desc: 'Consultoría de alto nivel diseñada exactamente a la medida de tu industria.',
    icon: 'users',
  },
]

function Icon({ name, className, size = 24, style }: IconProps & { name: IconName }) {
  const commonProps = {
    className,
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    style,
    'aria-hidden': true,
  }

  const paths: Record<IconName, ReactNode> = {
    clock: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    key: (
      <>
        <circle cx="7.5" cy="14.5" r="3.5" />
        <path d="M10 12l8-8 3 3-2 2 2 2-2 2-2-2-4 4" />
      </>
    ),
    lightbulb: (
      <>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12c.7.6 1 1.4 1 2h6c0-.6.3-1.4 1-2a7 7 0 0 0-4-12Z" />
        <path d="M4 4l1.5 1.5M20 4l-1.5 1.5M2 12h2M20 12h2" />
      </>
    ),
    'arrow-right': <path d="M5 12h14M13 5l7 7-7 7" />,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.47-1.13a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92Z" />,
    mail: <path d="M4 4h16v16H4zM4 6l8 7 8-7" />,
    'map-pin': (
      <>
        <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    briefcase: (
      <>
        <path d="M10 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
        <path d="M3 7h18v13H3z" />
        <path d="M3 13h18" />
      </>
    ),
    cpu: (
      <>
        <rect x="8" y="8" width="8" height="8" rx="1" />
        <path d="M4 10h4M4 14h4M16 10h4M16 14h4M10 4v4M14 4v4M10 16v4M14 16v4" />
      </>
    ),
    'trending-up': <path d="M3 17l6-6 4 4 8-8M14 7h7v7" />,
    globe: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    'dollar-sign': <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6" />,
    'check-circle': (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
    layers: <path d="M12 2l9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 17l9 5 9-5" />,
    smartphone: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
    zap: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" />,
    'bar-chart': <path d="M3 3v18h18M7 16v-5M12 16V7M17 16v-8" />,
    lock: (
      <>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    ),
  }

  return <svg {...commonProps}>{paths[name]}</svg>
}

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

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background" aria-hidden="true">
        <img src="/image1.png" alt="" />
        <img src="/image2.png" alt="" />
        <img src="/image3.png" alt="" />
      </div>
      <div className="hero-content">
        <div className="hero-grid">
          <div className="hero-badge-card">
            <Icon name="briefcase" className="hero-icon" size={24} />
            <span className="hero-badge-text">Banca e Infraestructura</span>
          </div>
          <div className="hero-badge-card">
            <Icon name="cpu" className="hero-icon" size={24} />
            <span className="hero-badge-text">Soluciones Automatizadas</span>
          </div>
          <div className="hero-badge-card">
            <Icon name="trending-up" className="hero-icon" size={24} />
            <span className="hero-badge-text">Consultoría Estratégica</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialProof() {
  const logos = ['EQUIFAX', 'EQUALITY', 'CECEPHI', 'BANTIAX_LAB', 'FINTECH PARTNERS', 'RISK DATA']

  return (
    <section className="social-proof" aria-labelledby="allies-title">
      <p id="allies-title" className="section-tag">
        <span className="highlight-text section-tag-highlight">Somos aliados</span>{' '}
        <span className="section-tag-white">de los mejores del mundo</span>
      </p>

      <div className="metrics-grid" aria-label="Métricas de presencia Bantiax">
        <div>
          <div className="metric-number"><Icon name="globe" size={20} className="metric-icon" /> +20</div>
          <p className="metric-label">Países</p>
        </div>
        <div>
          <div className="metric-number"><Icon name="users" size={20} className="metric-icon" /> +500</div>
          <p className="metric-label">Socios Comerciales</p>
        </div>
        <div>
          <div className="metric-number"><Icon name="dollar-sign" size={20} className="metric-icon" /> +90M</div>
          <p className="metric-label">Créditos Otorgados</p>
        </div>
      </div>

      <div className="logos-marquee" aria-label="Empresas colaboradoras">
        <div className="logos-track">
          {[...logos, ...logos].map((logo, index) => (
            <span className="logo-item" key={`${logo}-${index}`}>{logo}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function MultiplierSection() {
  return (
    <section id="beneficios" className="multiplier-section">
      <div className="multiplier-box">
        <div className="multiplier-content">
          <div className="multiplier-header">
            <div>
              <span className="highlight-text eyebrow eyebrow-with-icon">
                <Icon name="key" size={18} />
                Fintech Llave en Mano
              </span>
              <h2 className="multiplier-title">Efecto Multiplicador de Beneficios: incrementas rentabilidad, blindas tu ecosistema y más.</h2>
            </div>
            <a className="btn-primary multiplier-cta" href="#servicios">Contáctanos</a>
          </div>
          <div className="benefits-list">
            {benefits.map((item) => (
              <div key={item.title} className="benefit-item">
                <Icon name="check-circle" className="highlight-text benefit-icon" size={20} />
                <div>
                  <h4 className="benefit-title">{item.title}</h4>
                  <p className="benefit-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="multiplier-mockup">
          <div className="phone-card">
            <div className="phone-notch" />
            <p className="phone-muted">Crédito Comercial</p>
            <p className="phone-greeting">Hola, Socio Bantiax</p>
            <p className="phone-balance">$4,500.20</p>
            <div className="phone-divider" />
            <div className="phone-stats">
              <div className="phone-row"><span>Línea aprobada</span><span className="highlight-text">95% de éxito</span></div>
              <div className="phone-row"><span>Tasa Base</span><span>12.5%</span></div>
            </div>
            <button className="btn-block" type="button">Ver Métricas Avanzadas</button>
          </div>
        </div>
      </div>
    </section>
  )
}

function RiskSection() {
  return (
    <section id="riesgo" className="risk-section">
      <div className="section-heading-left">
        <span className="highlight-text eyebrow eyebrow-with-icon">
          <Icon name="lightbulb" size={18} />
          Soluciones Tecnológicas Financieras
        </span>
        <h2 className="section-title section-title-primary">Transformamos el Riesgo en Rentabilidad</h2>
        <p className="section-description section-description-left">Implementamos capas de inteligencia tecnológica para blindar cada etapa crítica del ciclo de crédito de tu organización.</p>
      </div>

      <div className="risk-grid">
        {riskCards.map((card) => (
          <article key={card.title} className="risk-card">
            <div className="icon-wrapper">
              <Icon name={card.icon} size={20} />
            </div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-desc">{card.desc}</p>
            <a className="card-link" href="#servicios" aria-label={`Ver más sobre ${card.title}`}>
              Ver solución
              <Icon name="arrow-right" size={14} />
            </a>
          </article>
        ))}
        <article className="risk-card risk-card-outline">
          <p>Somos creadores de tecnología e infraestructura propia y escalable.</p>
        </article>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    {
      title: 'Banca e Infraestructura',
      desc: 'Arquitectura financiera preparada para operar productos digitales con seguridad, cumplimiento y capacidad de escala.',
      icon: 'briefcase' as const,
    },
    {
      title: 'Soluciones Automatizadas',
      desc: 'Flujos inteligentes para evaluación, monitoreo, cobranza y gestión operativa en tiempo real.',
      icon: 'cpu' as const,
    },
    {
      title: 'Consultoría Estratégica',
      desc: 'Acompañamiento experto para diseñar, lanzar y optimizar verticales de crédito y modelos Fintech.',
      icon: 'trending-up' as const,
    },
  ]

  return (
    <section id="servicios" className="services-section">
      <div className="services-heading">
        <h2 className="section-title section-title-primary">Nuestros Servicios</h2>
      </div>

      <div className="services-simple-grid">
        {services.map((service) => (
          <article className="service-simple-card" key={service.title}>
            <Icon name={service.icon} className="service-simple-icon" size={30} />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </article>
        ))}
      </div>

      <article className="services-highlight-card">
        <div className="services-highlight-images">
          <img src="/image2.png" alt="Equipo Bantiax colaborando" />
          <img src="/image3.png" alt="Planeación estratégica Bantiax" />
        </div>

        <div className="services-highlight-content">
          <span className="highlight-text eyebrow small">CONSULTORÍA ESTRATÉGICA</span>
          <h3>Transformamos empresas en potencias de financiamiento</h3>

          <div className="services-copy-block">
            <h4>Somos expertos creando y gestionando</h4>
            <p>Creadores, innovadores y estrategas.</p>
          </div>

          <div className="services-copy-block">
            <h4>Creamos Fintech desde cero, con tecnología propia, generando ventajas competitivas.</h4>
            <p>Gestores de potencias de financiamiento.</p>
          </div>

          <div className="services-copy-block">
            <h4>Transformamos el riesgo en récords de rentabilidad.</h4>
            <p>Implementación ágil y cero fricción con el punto de venta.</p>
          </div>

          <div className="services-highlight-footer">
            <a className="btn-primary btn-primary-large" href="#riesgo">Evaluar Ahora</a>
            <div className="stats-card">
              <strong>15+</strong>
              <span>Años de experiencia mínima</span>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

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

export default function Landing() {
  return (
    <div id="top" className="landing-container">
      <Navbar />
      <main>
        {/* Section 1: Hero */}
        <Hero />
        {/* Section 2: Aliados */}
        <SocialProof />
        {/* Section 3: Fintech Llave en Mano */}
        <MultiplierSection />
        {/* Section 4: Soluciones Tecnológicas Financieras */}
        <RiskSection />
        {/* Section 5: Nuestros Servicios */}
        <ServicesSection />
      </main>
      <Footer />
    </div>
  )
}
