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
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
      
      <div className={styles.phoneOuter}>
        {/* Botones laterales del dispositivo */}
        <div className={styles.volumeUp} aria-hidden="true" />
        <div className={styles.volumeDown} aria-hidden="true" />
        <div className={styles.power} aria-hidden="true" />

        <div className={styles.phoneInner}>
          <div className={styles.notch} aria-hidden="true">
            {/* Lente de la cámara frontal */}
            <div className={styles.camera} />
          </div>
          
          <img className={imageClasses} src={src} alt={alt} {...imageProps} />
          
          {/* Reflejo simulado en el cristal */}
          <div className={styles.glare} aria-hidden="true" />
        </div>
      </div>
    </figure>
  )
}

export default DeviceMockup
export type { DeviceMockupProps }