import type { IconName } from '@/components/icon/icon'
import Card, { CARD_INTERACTION } from '@/components/card/card'
import Icon from '@/components/icon/icon'
import styles from './solution-card.module.css'

type SolutionCardProps = {
  icon: IconName
  title: string
  description: string
  href?: string
}

function SolutionCard({ icon, title, description, href = '#servicios' }: SolutionCardProps) {
  return (
    <Card className={styles.solutionCard} interaction={CARD_INTERACTION.ACTIVE} variant="filled">
      <span className={styles.iconCircle} aria-hidden="true">
        <Icon name={icon} size={28} />
      </span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.footer}>
        <span className={styles.divider} />
        <a className={styles.link} href={href} aria-label={`Ver más sobre ${title}`}>
          <Icon name="arrow-right" size={16} />
        </a>
      </div>
    </Card>
  )
}

export default SolutionCard
export type { SolutionCardProps }
