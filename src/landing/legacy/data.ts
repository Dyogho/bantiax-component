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

// Header section
export const headerData = {
  homeHref: 'https://doinperu.com/bantiax/',
  brand: 'BANTIAX',
  tagline: 'Fintech Services',
  links: [
    { label: 'HOME', href: 'https://doinperu.com/bantiax/', ariaCurrent: 'page' },
    { label: 'PAGES', href: 'https://doinperu.com/bantiax/', ariaCurrent: 'page' },
  ],
  cta: {
    label: 'Contáctenos',
    href: '#',
    title: 'Horarios y Contacto',
    icon: 'clock' as IconName,
  },
}

// Hero section
export const heroCards: HeroCardData[] = [
  {
    title: 'Fintech llave en mano',
    desc: 'Con tu nueva línea de negocio: incrementas tu rentabilidad, blindas tu ecosistema, generas fidelidad, tienes el control total de tu cadena de valor y obtienes un multiplicador de otros beneficios.',
    icon: 'key',
    imageSrc: '/image1.jpg',
  },
  {
    title: 'Soluciones Tecnológicas',
    desc: 'Transformamos el Riesgo en Rentabilidad. Minimizamos el Riesgo, mejoramos la Recuperación y generamos valor; con la mejor tecnología del mundo.',
    icon: 'lightbulb',
    imageSrc: '/image2.jpg',
  },
  {
    title: 'Consultoría Estratégica',
    desc: 'Implementando Fintech end to end. Te guiaremos en la transformación de tu empresa hacia una potencia de financiamiento rentable e inclusiva.',
    icon: 'brain',
    imageSrc: '/image3.jpg',
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
    'Con tu nueva línea de negocio, agregas inteligencia financiera a tu empresa, tomas el control total de tu cadena de valor y obtienes muchos beneficios.',
  mockupCaption: 'Créditos al instante',
}

export const turnkeyBenefits = [
  {
    title: 'La rentabilidad se eleva estructuralmente',
    description:
      'Por la captura del margen financiero, la venta cruzada y el incremento del gasto; optimizando la rentabilidad del ecosistema.',
    icon: 'benefit-step' as IconName,
  },
  {
    title: 'El gasto del cliente se expande',
    description: 'Comprará más por: mayor ticket de producto, créditos de celulares y de efectivo y seguros.',
    icon: 'benefit-clock' as IconName,
  },
  {
    title: 'Ecosistema de fidelidad en tu control',
    description:
      'Elevas el Life Time Value, convirtiendo al cliente en flujo de caja recurrente. Reduces la fuga por la creación de barreras de salida.',
    icon: 'benefit-heart' as IconName,
  },
  {
    title: 'Monetizas activos',
    description:
      'Conviertes la data transaccional y patrones de consumo en activos predictibles de costo reducido, para elevar el LTV.',
    icon: 'benefit-database' as IconName,
  },
  {
    title: 'Fricción cero en el punto de venta',
    description:
      'Costo de adquisición reducido, sin curva de aprendizaje tradicional, sistema listo para la FFVV, maximizando el margen desde el día uno.',
    icon: 'benefit-zap' as IconName,
  },
]

export const mockupOptions: MockupOptionData[] = [
  { label: 'Solo con DNI', mockup: { src: '/image1.jpg' } },
  { label: 'Aprobación hasta en 60 seg', mockup: { src: '/image2.jpg' } },
  { label: '60% de clientes aprobado', mockup: { src: '/image3.jpg' } },
  { label: 'Mora baja', mockup: { src: '/image1.jpg' } },
]

// Tech solutions section
export const techSolutionsSectionData = {
  id: 'riesgo',
  eyebrowTitle: 'Soluciones Tecnológicas Financieras',
  eyebrowIcon: 'lightbulb' as IconName,
  title: 'Transformamos el Riesgo en Rentabilidad',
  description: 'Minimizamos el riesgo, mejoramos la recuperación, generamos valor e inclusión',
  summary: 'Somos creadores de tecnología e infraestructura propia y escalable.',
}

export const techSolutionCards: IconCard[] = Array.from({ length: 6 }, () => ({
  title: 'Plataforma de Administración de Créditos',
  desc: 'Tendrás la gestión integral de créditos, desde su origen hasta la cobranza y también la automatización de tus procesos; con esta plataforma poderosa e intuitiva.',
  icon: 'device-desktop' as IconName,
}))

// Services section
export const servicesSectionData = {
  id: 'servicios',
  title: 'Nuestros Servicios',
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
    title: 'Fintech\nLlave en Mano',
    desc: 'Arquitectura financiera preparada para operar productos digitales con seguridad, cumplimiento y capacidad de escala.',
    icon: 'key',
  },
  {
    title: 'Soluciones\nTecnológicas Financieras',
    desc: 'Flujos inteligentes para evaluación, monitoreo, cobranza y gestión operativa en tiempo real.',
    icon: 'lightbulb',
  },
  {
    title: 'Consultoría\nEstratégica',
    desc: 'Acompañamiento experto para diseñar, lanzar y optimizar verticales de crédito y modelos Fintech.',
    icon: 'brain',
  },
]

export const servicesHighlightImages: ServicesHighlightImage[] = [
  { src: '/image2.jpg', alt: 'Equipo Bantiax colaborando' },
  { src: '/image3.jpg', alt: 'Planeación estratégica Bantiax' },
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
    { icon: 'phone' as IconName, text: '+511 995 959 524' },
    { icon: 'mail' as IconName, text: 'comercial@bantiax.com' },
    { icon: 'map-pin' as IconName, text: 'Av. Ejercito 1258, Ofic 1301, San Isidro, Lima.' },
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
