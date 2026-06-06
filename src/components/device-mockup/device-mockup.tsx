import type { ComponentPropsWithoutRef } from 'react'
import styles from './device-mockup.module.css'

type DeviceMockupProps = Omit<ComponentPropsWithoutRef<'img'>, 'title'> & {
  containerClassName?: string
}

function DeviceMockup({
  src = '/image1.png',
  alt = '',
  containerClassName = '',
  className = '',
  ...imageProps
}: DeviceMockupProps) {
  const containerClasses = [styles.deviceMockup, containerClassName].filter(Boolean).join(' ')
  const imageClasses = [styles.image, className].filter(Boolean).join(' ')

  return (
    <figure className={containerClasses}>
      <figcaption className={styles.title}>Créditos al instante</figcaption>
      <div className={styles.phone}>
        <div className={styles.notch} aria-hidden="true" />
        <img className={imageClasses} src={src} alt={alt} {...imageProps} />
      </div>
    </figure>
  )
}

export default DeviceMockup
export type { DeviceMockupProps }
