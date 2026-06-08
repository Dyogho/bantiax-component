import Icon from '@/components/icon/icon'
import styles from './brand-logo.module.css'

type BrandLogoProps = {
  alt: string
  src?: string
}

function BrandLogo({ src, alt }: BrandLogoProps) {
  return (
    <div className={styles.item}>
      <div className={styles.logo}>
        {src ? <Icon alt={alt} className={styles.image} height="5rem" src={src} width="auto" /> : <span className={styles.text}>{alt}</span>}
      </div>
    </div>
  )
}

export default BrandLogo
export type { BrandLogoProps }
