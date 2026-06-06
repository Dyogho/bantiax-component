import { heroCards } from '@/landing/data'
import HeroCard from '@/components/hero-card/hero-card'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background" aria-hidden="true">
        <img src="/image1.png" alt="" />
        <img src="/image2.png" alt="" />
        <img src="/image3.png" alt="" />
      </div>
      <div className="hero-content">
        <div className="hero-grid">
          {heroCards.map((card) => (
            <HeroCard description={card.desc} icon={card.icon} key={card.title} title={card.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
