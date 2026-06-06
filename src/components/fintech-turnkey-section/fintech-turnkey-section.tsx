import { useState } from 'react'
import Button from '@/components/button/button'
import Card from '@/components/card/card'
import DeviceMockup, { type DeviceMockupProps } from '@/components/device-mockup/device-mockup'
import InfoCard from '@/components/info-card/info-card'
import MockupSelector from '@/components/mockup-selector/mockup-selector'

const turnkeyBenefits = [
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

type MockupOption = {
  label: string
  mockup: DeviceMockupProps
}

const mockupOptions: MockupOption[] = [
  {
    label: 'Solo con DNI',
    mockup: {
      src: '/image1.png',
    },
  },
  {
    label: 'Aprobación hasta en 60 seg',
    mockup: {
      src: '/image2.png',
    },
  },
  {
    label: '60% de clientes aprobado',
    mockup: {
      src: '/image3.png',
    },
  },
  {
    label: 'Mora baja',
    mockup: {
      src: '/image1.png',
    },
  },
]

function FintechTurnkeySection() {
  const [activeMockupIndex, setActiveMockupIndex] = useState(0)
  const activeMockup = mockupOptions[activeMockupIndex]?.mockup ?? mockupOptions[0].mockup

  return (
    <section id="beneficios" className="multiplier-section">
      <Card as="div" bg="secondary" className="multiplier-box" text="main" variant="filled">
        <div className="multiplier-header">
          <InfoCard icon="key" iconColor="primary" title="Fintech Llave en Mano" titleColor="main" />
          <a className="multiplier-link" href="#servicios">
            <Button color="primary" size="medium" text="Contáctanos" />
          </a>
        </div>

        <div className="multiplier-summary">
          <h2 className="multiplier-title">Efecto Multiplicador de Beneficios: incrementas rentabilidad, blindas tu ecosistema y más.</h2>
          <p className="multiplier-desc">
            Integramos tecnología, operación y estrategia para lanzar modelos financieros digitales con procesos seguros, escalables y listos para crecer.
          </p>
        </div>

        <div className="multiplier-main">
          <div className="multiplier-info-list">
            {turnkeyBenefits.map((benefit) => (
              <InfoCard
                description={benefit.description}
                descriptionColor="muted"
                icon="check-circle"
                iconColor="primary"
                key={benefit.title}
                size="small"
                title={benefit.title}
                titleColor="main"
              />
            ))}
          </div>
          <div className="multiplier-actions">
            {mockupOptions.map((option, index) => (
              <MockupSelector
                isActive={index === activeMockupIndex}
                key={option.label}
                onClick={() => setActiveMockupIndex(index)}
                text={option.label}
              />
            ))}
          </div>
          <div className="multiplier-mockup">
            <DeviceMockup {...activeMockup} />
          </div>
        </div>
      </Card>
    </section>
  )
}

export default FintechTurnkeySection
