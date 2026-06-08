import { useState } from 'react'
import { heroCards } from '@/landing/legacy/data'
import HeroCard from '@/components/hero-card/hero-card'

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  const currentIndex = activeIndex

  return (
    <section className="hero">
      <div className="hero-background-wrapper" aria-hidden="true">
        {heroCards.map((card, index) => {
          if (!card.imageSrc) return null
          return (
            <div
              key={card.title}
              className={`hero-background-image ${index === currentIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${card.imageSrc})` }}
            />
          )
        })}
      </div>

      <div className="hero-content">
        <div className="hero-grid">
          {heroCards.map((card, index) => (
            <HeroCard
              description={card.desc}
              icon={card.icon}
              key={card.title}
              title={card.title}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
