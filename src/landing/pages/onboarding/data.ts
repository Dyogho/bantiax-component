import type { IconName } from '@/components/icon/icon'

export type OnboardingSubSection = {
  id: string
  label: string
}

export const onboardingSectionData = {
  id: 'onboarding-detail',
  eyebrowTitle: 'ECOSISTEMA INTEGRAL',
  eyebrowIcon: 'bolt' as IconName,
  title: 'Nuestro Ecosistema de Soluciones',
  description: 'Explora cada módulo de nuestra plataforma tecnológica financiera.',
}

export const onboardingSections: OnboardingSubSection[] = [
  { id: 'admin-creditos', label: 'Plataforma Admin de Créditos' },
  { id: 'onboarding', label: 'Onboarding' },
  { id: 'motor-decision', label: 'Motor de Decisión de Riesgos' },
  { id: 'score-riesgos', label: 'Score de Riesgos Celular' },
  { id: 'bloqueo-celulares', label: 'Herramienta de Bloqueo' },
  { id: 'validacion-identidad', label: 'Validación de Identidad' },
  { id: 'seguros-celulares', label: 'Seguros para Celulares' },
]
