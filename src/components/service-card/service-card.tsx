import type { IconName } from '@/components/icon/icon'
import Card from '@/components/card/card'
import Icon from '@/components/icon/icon'

type ServiceCardProps = {
  icon: IconName
  title: string
  description: string
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="service-simple-card" variant="transparent">
      <Icon name={icon} className="service-simple-icon" size={30} />
      <h3>{title}</h3>
      <p>{description}</p>
    </Card>
  )
}

export default ServiceCard
export type { ServiceCardProps }
