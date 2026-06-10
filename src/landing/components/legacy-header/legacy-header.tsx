import { useEffect, useState } from 'react'
import Icon from '@/components/icon/icon'
import { headerData } from '@/landing/data'
import styles from './legacy-header.module.css'

function LegacyHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const headerClassName = [styles.header, isScrolled ? styles.headerScrolled : ''].filter(Boolean).join(' ')

  return (
    <header className={headerClassName}>
      <svg aria-hidden="true" className={styles.logoSprite} focusable="false">
        <defs>
          <linearGradient id="bantiax-green" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="var(--brand-green)" />
            <stop offset="1" stopColor="var(--brand-identity)" />
          </linearGradient>
          <filter id="bantiax-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <symbol id="bantiax-mark" viewBox="0 0 120 120">
          <path d="M 92 80 A 38 38 0 1 1 78 22" stroke="url(#bantiax-green)" strokeWidth="11" fill="none" strokeLinecap="round" />
          <path d="M 72 12 L 96 22 L 80 38 Z" fill="var(--brand-green)" />
          <circle cx="88" cy="22" r="6" fill="var(--brand-cyan)" filter="url(#bantiax-glow)" opacity="0.85" />
          <circle cx="88" cy="22" r="2.5" fill="var(--text-main)" />
        </symbol>
      </svg>
      <div className={styles.inner}>
        <div className={styles.logoWrap}>
          <a className={styles.logoLink} href={headerData.homeHref}>
            <svg aria-hidden="true" className={styles.logoMark}>
              <use href="#bantiax-mark" />
            </svg>
            <div>
              <div className={styles.wordmark}>{headerData.brand}</div>
              <div className={styles.tagline}>{headerData.tagline}</div>
            </div>
          </a>

          <nav aria-label="Principal">
            <ul className={styles.navLinks}>
              {headerData.links.map((link) => (
                <li key={link.label}>
                  <a aria-current={link.ariaCurrent as 'page' | undefined} href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.navRight}>
          <a className={styles.contactButton} href={headerData.cta.href} title={headerData.cta.title}>
            <span>{headerData.cta.label}</span>
            <Icon name={headerData.cta.icon} size="1.125rem" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default LegacyHeader
