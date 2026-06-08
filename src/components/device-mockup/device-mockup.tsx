import type { ComponentPropsWithoutRef } from 'react'
import styles from './device-mockup.module.css'

type DeviceMockupProps = Omit<ComponentPropsWithoutRef<'img'>, 'title' | 'src'> & {
  src: string
  caption?: string
  containerClassName?: string
}

function DeviceMockup({
  src,
  alt = '',
  caption,
  containerClassName = '',
  className = '',
  ...imageProps
}: DeviceMockupProps) {
  const containerClasses = [styles.deviceMockup, containerClassName].filter(Boolean).join(' ')
  const imageClasses = [styles.image, className].filter(Boolean).join(' ')

  return (
    <figure className={containerClasses}>
      {caption ? <figcaption className={styles.title}>{caption}</figcaption> : null}
      <div className={styles.phone}>
        <div className={styles.notch} aria-hidden="true" />
        <img className={imageClasses} src={src} alt={alt} {...imageProps} />
      </div>
    </figure>
  )
}

export default DeviceMockup
export type { DeviceMockupProps }
