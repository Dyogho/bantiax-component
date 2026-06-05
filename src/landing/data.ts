import type { IconName } from '@/components/icon/icon'

export type Benefit = {
  title: string
  desc: string
}

export type IconCard = {
  title: string
  desc: string
  icon: IconName
}

export const heroCards: IconCard[] = [
  {
    title: 'Banca e Infraestructura',
    desc: 'Creamos infraestructura financiera digital preparada para operar, escalar y proteger cada etapa del negocio.',
    icon: 'briefcase',
  },
  {
    title: 'Soluciones Automatizadas',
    desc: 'Automatizamos evaluación, monitoreo, cobranza y operación con tecnología propia y flujos inteligentes.',
    icon: 'cpu',
  },
  {
    title: 'Consultoría Estratégica',
    desc: 'Acompañamos el diseño, lanzamiento y optimización de modelos Fintech con foco en rentabilidad.',
    icon: 'trending-up',
  },
]

export const partnerLogos = ['EQUIFAX', 'EQUALITY', 'CECEPHI', 'BANTIAX_LAB', 'FINTECH PARTNERS', 'RISK DATA']

export const benefits: Benefit[] = [
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
