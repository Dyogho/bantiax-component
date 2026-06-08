import type { IconName } from '@/components/icon/icon'

const BANTIAX_ASSET_BASE_URL = 'https://doinperu.com/bantiax/wp-content/themes/BantiaxTheme/images'

// Shared landing content types
export type Benefit = {
  title: string
  desc: string
}

export type IconCard = {
  title: string
  desc: string
  icon: IconName
  imageSrc?: string
}

export type HeroCardData = IconCard & {
  imageSrc: string
}

export type AlliesMetric = {
  title: string
  value: string
  icon?: IconName
  iconSrc?: string
  iconAlt?: string
  iconWidth: string
  iconHeight: string
}

export type PartnerBrand = {
  alt: string
  src?: string
}

export type MockupOptionData = {
  label: string
  mockup: {
    src: string
    alt?: string
    caption?: string
  }
}

export type ServicesHighlightImage = {
  src: string
  alt: string
}

export type FooterLink = {
  label: string
  href: string
}

export type FooterContact = {
  icon: IconName
  text: string
}

export type FooterSocial = {
  label: string
  href: string
  text: string
}

export type FooterColumn = {
  title: string
  links: FooterLink[]
}

// Navbar section
export const navbarData = {
  brand: 'BANTIAX',
  badge: 'B',
  links: [
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Gestión de Riesgo', href: '#riesgo' },
    { label: 'Servicios', href: '#servicios' },
  ],
  cta: {
    label: 'Contáctanos',
    href: '#servicios',
    icon: 'clock' as IconName,
  },
}

// Hero section
export const heroCards: HeroCardData[] = [
  {
    title: 'Banca e Infraestructura',
    desc: 'Creamos infraestructura financiera digital preparada para operar, escalar y proteger cada etapa del negocio.',
    icon: 'briefcase',
    imageSrc: '/image1.png',
  },
  {
    title: 'Soluciones Automatizadas',
    desc: 'Automatizamos evaluación, monitoreo, cobranza y operación con tecnología propia y flujos inteligentes.',
    icon: 'cpu',
    imageSrc: '/image2.png',
  },
  {
    title: 'Consultoría Estratégica',
    desc: 'Acompañamos el diseño, lanzamiento y optimización de modelos Fintech con foco en rentabilidad.',
    icon: 'trending-up',
    imageSrc: '/image3.png',
  },
]

// Allies section
export const alliesSectionData = {
  titleHighlight: 'Somos Aliados',
  title: 'de los mejores del mundo',
  metricsLabel: 'Métricas de presencia Bantiax',
  brandsLabel: 'Empresas colaboradoras',
}

export const alliesMetrics: AlliesMetric[] = [
  {
    title: 'Países',
    value: '+ 20',
    icon: 'globe',
    iconWidth: '3rem',
    iconHeight: '3rem',
  },
  {
    title: 'Socios Comerciales',
    value: '+ 500',
    iconSrc: `${BANTIAX_ASSET_BASE_URL}/aliados.svg`,
    iconAlt: 'Aliados',
    iconWidth: '7.4375rem',
    iconHeight: '5.25rem',
  },
  {
    title: 'Créditos Otorgados',
    value: '+ 90 Millones',
    iconSrc: `${BANTIAX_ASSET_BASE_URL}/mano.svg`,
    iconAlt: 'Mano',
    iconWidth: '5.625rem',
    iconHeight: '4.875rem',
  },
]

export const partnerBrands: PartnerBrand[] = [
  { alt: 'Yape', src: `${BANTIAX_ASSET_BASE_URL}/yape.svg` },
  { alt: 'Equifax', src: `${BANTIAX_ASSET_BASE_URL}/equifax.svg` },
  { alt: 'Vaina', src: `${BANTIAX_ASSET_BASE_URL}/vaina.svg` },
  { alt: 'Facephi', src: `${BANTIAX_ASSET_BASE_URL}/facephi.svg` },
  { alt: 'Equality', src: `${BANTIAX_ASSET_BASE_URL}/equality.svg` },
  { alt: 'Beclever', src: `${BANTIAX_ASSET_BASE_URL}/beclever.svg` },
]

// Fintech turnkey section
export const fintechTurnkeySectionData = {
  id: 'beneficios',
  eyebrowTitle: 'Fintech Llave en Mano',
  eyebrowIcon: 'key' as IconName,
  cta: {
    label: 'Contáctanos',
    href: '#servicios',
  },
  title: 'Efecto Multiplicador de Beneficios: incrementas rentabilidad, blindas tu ecosistema y más.',
  description:
    'Integramos tecnología, operación y estrategia para lanzar modelos financieros digitales con procesos seguros, escalables y listos para crecer.',
  mockupCaption: 'Créditos al instante',
}

export const turnkeyBenefits = [
  {
    title: 'La rentabilidad se eleva estructuralmente',
    description:
      'Por la captura del margen financiero, la venta cruzada y el incremento del gasto; optimizando la rentabilidad del ecosistema.',
  },
  {
    title: 'El gasto del cliente se expande',
    description: 'Comprará más por: mayor ticket de producto, créditos de celulares y de efectivo y seguros.',
  },
  {
    title: 'Ecosistema de fidelidad en tu control',
    description:
      'Elevas el Life Time Value, convirtiendo al cliente en flujo de caja recurrente. Reduces la fuga por la creación de barreras de salida.',
  },
  {
    title: 'Monetizas activos',
    description:
      'Conviertes la data transaccional y patrones de consumo en activos predictibles de costo reducido, para elevar el LTV.',
  },
  {
    title: 'Fricción cero en el punto de venta',
    description:
      'Costo de adquisición reducido, sin curva de aprendizaje tradicional, sistema listo para la FFVV, maximizando el margen desde el día uno.',
  },
]

export const mockupOptions: MockupOptionData[] = [
  { label: 'Solo con DNI', mockup: { src: '/image1.png' } },
  { label: 'Aprobación hasta en 60 seg', mockup: { src: '/image2.png' } },
  { label: '60% de clientes aprobado', mockup: { src: '/image3.png' } },
  { label: 'Mora baja', mockup: { src: '/image1.png' } },
]

// Tech solutions section
export const techSolutionsSectionData = {
  id: 'riesgo',
  eyebrowTitle: 'Soluciones Tecnológicas Financieras',
  eyebrowIcon: 'lightbulb' as IconName,
  title: 'Transformamos el Riesgo en Rentabilidad',
  description:
    'Implementamos capas de inteligencia tecnológica para blindar cada etapa crítica del ciclo de crédito de tu organización.',
  summary: 'Somos creadores de tecnología e infraestructura propia y escalable.',
}

export const techSolutionCards: IconCard[] = [
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

// Services section
export const servicesSectionData = {
  id: 'servicios',
  title: 'NUESTROS SERVICIOS',
  highlight: {
    title: 'CONSULTORÍA ESTRATÉGICA',
    icon: 'briefcase' as IconName,
    heading: 'Transformamos empresas en potencias de financiamiento',
    description: 'Somos expertos creando y gestionando',
    cta: {
      label: 'Contactanos',
      icon: 'clock' as IconName,
    },
    stat: {
      value: '15',
      title: 'Años de experiencia',
    },
  },
}

export const services: IconCard[] = [
  {
    title: 'Banca e Infraestructura',
    desc: 'Arquitectura financiera preparada para operar productos digitales con seguridad, cumplimiento y capacidad de escala.',
    icon: 'briefcase',
  },
  {
    title: 'Soluciones Automatizadas',
    desc: 'Flujos inteligentes para evaluación, monitoreo, cobranza y gestión operativa en tiempo real.',
    icon: 'cpu',
  },
  {
    title: 'Consultoría Estratégica',
    desc: 'Acompañamiento experto para diseñar, lanzar y optimizar verticales de crédito y modelos Fintech.',
    icon: 'trending-up',
  },
]

export const servicesHighlightImages: ServicesHighlightImage[] = [
  { src: '/image2.png', alt: 'Equipo Bantiax colaborando' },
  { src: '/image3.png', alt: 'Planeación estratégica Bantiax' },
]

export const servicesHighlightCards = [
  {
    title: 'Creadores, innovadores y estrategas.',
    description: 'Creamos Fintech desde cero, con tecnología propia, generando ventajas competitivas.',
    icon: 'lightbulb' as IconName,
  },
  {
    title: 'Gestores de potencias de financiamiento',
    description: 'Transformamos el riesgo en récords de rentabilidad.',
    icon: 'trending-up' as IconName,
  },
  {
    title: 'Implementación ágil y cero fricción con el punto de venta',
    icon: 'clock' as IconName,
  },
]

// Footer section
export const footerData = {
  brand: 'BANTIAX',
  badge: 'B',
  contacts: [
    { icon: 'phone' as IconName, text: '+51 984 000 000' },
    { icon: 'mail' as IconName, text: 'contacto@bantiax.com' },
    { icon: 'map-pin' as IconName, text: 'Lima, Perú' },
  ] satisfies FooterContact[],
  socials: [
    { label: 'LinkedIn', href: '#top', text: 'in' },
    { label: 'Instagram', href: '#top', text: 'ig' },
    { label: 'Facebook', href: '#top', text: 'fb' },
  ] satisfies FooterSocial[],
  columns: [
    {
      title: 'Nosotros',
      links: [
        { label: 'Aliados', href: '#top' },
        { label: 'El equipo', href: '#top' },
      ],
    },
    {
      title: 'Servicios',
      links: [
        { label: 'Fintech Llave en Mano', href: '#beneficios' },
        { label: 'Soluciones Tecnológicas', href: '#riesgo' },
        { label: 'Consultoría', href: '#servicios' },
      ],
    },
    {
      title: 'Soluciones Tecnológicas',
      links: [
        { label: 'Plataforma de Créditos', href: '#riesgo' },
        { label: 'Motor de Riesgos', href: '#riesgo' },
        { label: 'Indicadores de Riesgos', href: '#riesgo' },
        { label: 'Bloqueo de Celulares', href: '#riesgo' },
        { label: 'Validación Facial', href: '#riesgo' },
        { label: 'Seguros', href: '#riesgo' },
      ],
    },
  ] satisfies FooterColumn[],
  copyright: '© 2026 Bantiax. Todos los derechos reservados.',
}
