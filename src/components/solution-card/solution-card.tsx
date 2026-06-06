import type { IconName } from '@/components/icon/icon'
import Card from '@/components/card/card'
import Icon from '@/components/icon/icon'

type SolutionCardProps = {
  icon: IconName
  title: string
  description: string
  href?: string
}

function SolutionCard({ icon, title, description, href = '#servicios' }: SolutionCardProps) {
  return (
    <Card className="risk-card" variant="filled">
      <div className="icon-wrapper">
        <Icon name={icon} size={20} />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
      <a className="card-link" href={href} aria-label={`Ver más sobre ${title}`}>
        Ver solución
        <Icon name="arrow-right" size={14} />
      </a>
    </Card>
  )
}

export default SolutionCard
export type { SolutionCardProps }
