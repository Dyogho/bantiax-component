import ScrollSpyMenu from '@/components/scroll-spy-menu/scroll-spy-menu';
import { onboardingSectionData, onboardingSections } from './data';
import './onboarding.css';

export default function OnboardingSection() {
  return (
    <section id={onboardingSectionData.id} className="onboarding-section">
      <ScrollSpyMenu 
        sections={onboardingSections} 
        containerSelector=".onboarding-content"
        offset={20}
      />

      <div className="onboarding-content">
        {onboardingSections.map((sub) => (
          <div key={sub.id} id={sub.id} className="onboarding-panel">
            <h3 className="onboarding-panel__title">{sub.label}</h3>
            <p className="onboarding-panel__description">
              Contenido de la sección {sub.label}.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
