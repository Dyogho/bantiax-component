import { useEffect, useMemo, useState } from 'react';
import './scroll-spy-menu.css';

type ScrollSpySection = {
  id: string;
  label: string;
};

type ScrollSpyMenuProps = {
  sections?: ScrollSpySection[];
  offset?: number;
};

const DEFAULT_SECTIONS: ScrollSpySection[] = [
  { id: 'onboarding', label: 'Onboarding' },
  { id: 'core', label: 'Core' },
  { id: 'collections', label: 'Collections' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'cards', label: 'Cards' },
  { id: 'insurance', label: 'Insurance' },
  { id: 'loyalty', label: 'Loyalty' },
  { id: 'orchestration', label: 'Orchestration' },
  { id: 'reporting', label: 'Reporting' },
];

const useScrollSpy = (sectionIds: string[], offset = 110) => {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    if (sectionIds.length === 0) return undefined;

    let frameId = 0;

    const updateActiveSection = () => {
      frameId = 0;

      const checkpoint = window.scrollY + offset + 1;
      const sections = sectionIds
        .map((id) => {
          const element = document.getElementById(id);
          if (!element) return null;

          return {
            id,
            top: element.offsetTop,
          };
        })
        .filter((section): section is { id: string; top: number } => section !== null)
        .sort((a, b) => a.top - b.top);

      if (sections.length === 0) return;

      const isAtPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      const currentSection = isAtPageEnd
        ? sections[sections.length - 1]
        : sections.reduce((current, section) => {
            return section.top <= checkpoint ? section : current;
          }, sections[0]);

      setActiveId((currentId) => (currentId === currentSection.id ? currentId : currentSection.id));
    };

    const requestUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, [sectionIds, offset]);

  return activeId;
};

export default function ScrollSpyMenu({ sections = DEFAULT_SECTIONS, offset = 110 }: ScrollSpyMenuProps) {
  const sectionIds = useMemo(() => sections.map((section) => section.id), [sections]);
  const activeSection = useScrollSpy(sectionIds, offset);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const y = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <nav className="scroll-spy-menu" aria-label="Navegación de secciones">
      <div className="scroll-spy-menu__track">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => scrollTo(section.id)}
            className="scroll-spy-menu__item"
            aria-current={activeSection === section.id ? 'true' : undefined}
          >
            {section.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
