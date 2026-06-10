import type { IconName } from '@/components/icon/icon'

export const solutionsSectionData = {
  id: 'solutions',
  eyebrowTitle: 'SOLUCIONES TECNOLÓGICAS FINANCIERAS',
  eyebrowIcon: 'foco-idea' as IconName,
  title: 'Transformamos el Riesgo en Rentabilidad',
  description: 'Minimizamos el riesgo, mejoramos la recuperación, generamos valor e inclusión.',
  badgeText: 'Somos creadores de tecnología e infraestructura propia y escalable',
}

export const solutionsList = [
  {
    title: 'Plataforma de Administración de Créditos',
    description: 'Gestión integral del ciclo de vida de los créditos: desde la solicitud digital hasta la cobranza automática y reportes en tiempo real.',
    icon: 'device-desktop' as IconName,
  },
  {
    title: 'Motor de Decisiones de Riesgo',
    description: 'Evaluación crediticia inteligente y automatizada en segundos, optimizando la aprobación y controlando la morosidad.',
    icon: 'brain' as IconName,
  },
  {
    title: 'Bloqueo de Dispositivos Celulares (Kigo)',
    description: 'Tecnología avanzada para el bloqueo remoto de dispositivos como garantía digital, reduciendo la mora drásticamente.',
    icon: 'lock' as IconName,
  },
  {
    title: 'Identidad y Validación Facial',
    description: 'Verificación biométrica e identidad digital integrada para mitigar el fraude y asegurar un onboarding rápido y seguro.',
    icon: 'users' as IconName,
  },
  {
    title: 'Seguros y Microseguros Integrados',
    description: 'Protección personalizada embebida en el flujo de solicitud, añadiendo valor y seguridad al ecosistema del cliente.',
    icon: 'check-circle' as IconName,
  },
  {
    title: 'Indicadores y Score de Pago',
    description: 'Modelos predictivos avanzados que analizan patrones de consumo para estimar la probabilidad de pago y comportamiento futuro.',
    icon: 'bar-chart' as IconName,
  },
]

export const ecosystemData = [
  {
    id: 'clients',
    label: 'Clientes',
    icon: 'autentificacion-ok-m/16',
    bubbles: [
      { id: 'admin-creditos', label: 'Plataforma Admin de Créditos', icon: 'desktop-dollar' as IconName },
      { id: 'onboarding', label: 'Onboarding', icon: 'bolt' as IconName }
    ]
  },
  {
    id: 'core',
    label: 'Core',
    icon: 'conexiones-m/16',
    bubbles: [
      { id: 'bloqueo-celulares', label: 'Bloqueo de celulares', icon: 'phone-block' as IconName },
      { id: 'score-riesgos', label: 'Score de Riesgos Celulares', icon: 'phone-search' as IconName },
      { id: 'motor-decision', label: 'Motor de Decisión de Riesgos', icon: 'risk-motor' as IconName },
    ]
  },
  {
    id: 'risk',
    label: 'Riesgo',
    icon: 'escudo-seguridad-m/16',
    bubbles: [
      { id: 'validacion-identidad', label: 'Validación de identidad', icon: 'user-search' as IconName },
      { id: 'seguros-celulares', label: 'Seguros para celulares', icon: 'escudo-corazon' as IconName },
    ]
  },
]

