import React from 'react';
import Icon from '@/components/icon/icon';
import { ecosystemData } from '@/landing/pages/solutions-section/data';
import './ecosystem-bubble.css';

const sectionColors = ['#00b0ff', '#00e5ff', '#0081cb', '#00f3ff', '#0072ce'];


export default function EcosystemBubble() {
    const radius = 12; // Radio ampliado un poco para que respiren las burbujas
    const sectionAngle = 360 / ecosystemData.length;
    const pieChartGradient = ecosystemData
        .map((_, index) => {
            const start = index * sectionAngle;
            const end = start + sectionAngle;
            const gap = 0;
            const color = sectionColors[index % sectionColors.length];

            return `transparent ${start}deg ${start + gap}deg, ${color} ${start + gap}deg ${end - gap}deg, transparent ${end - gap}deg ${end}deg`;
        })
        .join(', ');
    const pieChartStyle = {
        '--pie-chart-gradient': `conic-gradient(from 0deg, ${pieChartGradient})`,
    } as React.CSSProperties;

    return (
        <article data-cy="Ecosystem Bubble Component" className="bubble-component">

            {/* Animación de fondo: únicas líneas animadas visibles */}
            <div data-cy="Ecosystem Animation" className="anim-container">
                {[...Array(6)].map((_, i) => (
                    <span key={i} data-cy="Ecosystem Wave" className="wave"></span>
                ))}
                <div className="line-animation" aria-hidden="true">
                    {[...Array(12)].map((_, i) => (
                        <span key={i} className="expanding-line" style={{ '--line-angle': `${i * 30}deg` } as React.CSSProperties}></span>
                    ))}
                </div>
            </div>

            {/* Líneas conectoras circulares de fondo */}
            <div data-cy="Ecosystem Bubble Connector" className="bubble-connector"></div>
            <div className="bubble-connector inner-connector"></div>

            {/* Burbuja Principal Central (3 Secciones) */}
            <div data-cy="Ecosystem Main Bubble" className="main-bubble">
                <div className="content-container">
                    <div className="outer-bubble pie-chart-bg" style={pieChartStyle}></div>
                    <div className="inner-bubble"></div>
                    {ecosystemData.map((section, sectionIndex) => {
                        const labelAngle = sectionIndex * sectionAngle + sectionAngle / 2;
                        const angleInRadians = (labelAngle * Math.PI) / 180;
                        const labelRadius = 3.15;
                        const labelStyle = {
                            '--section-label-x': `${labelRadius * Math.sin(angleInRadians)}rem`,
                            '--section-label-y': `${-labelRadius * Math.cos(angleInRadians)}rem`,
                        } as React.CSSProperties;

                        return (
                            <div key={section.id} className="section-label" style={labelStyle}>
                                <img
                                    src={`https://ssr.col.movistar.es/api/v1/get-glyph/${section.icon}/white`}
                                    width="22"
                                    height="22"
                                    alt=""
                                    role="presentation"
                                    loading="lazy"
                                />
                                <span>{section.label}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Renderizado Dinámico de Burbujas */}
            {ecosystemData.map((section, sectionIndex) => {
                // Cada sección ocupa un ángulo proporcional al total de secciones.
                const startAngle = sectionIndex * sectionAngle;

                return section.bubbles.map((item, bubbleIndex) => {
                    const totalBubblesInSection = section.bubbles.length;

                    // Distribuimos las burbujas dentro de su sección con un pequeño margen.
                    const step = sectionAngle / (totalBubblesInSection + 1);
                    const angleInDegrees = startAngle + (step * (bubbleIndex + 1));

                    // Convertimos grados a radianes para la trigonometría
                    const angleInRadians = (angleInDegrees * Math.PI) / 180;

                    // Fórmulas matemáticas de reloj (0 grados es a las 12 en punto)
                    const x = radius * Math.sin(angleInRadians);
                    const y = -radius * Math.cos(angleInRadians);

                    const bubbleStyle = {
                        '--bubble-x': `${x}rem`,
                        '--bubble-y': `${y}rem`,
                    } as React.CSSProperties;

                    return (
                        <div
                            key={item.id}
                            className={`auxiliary-bubble auxiliary-bubble--${section.id}`}
                            style={bubbleStyle}
                        >
                            <button
                                type="button"
                                tabIndex={0}
                                aria-label={item.label}
                                className="next-link nextLinkOverBox"
                            ></button>

                            <div className="bubble">
                                <div className="outer-bubble"></div>
                                <div className="border"></div>
                                {!item.icon.includes('/') ? (
                                    <div className={`svg-layout-size aux-icon-size transparent-bg ${item.id === 'validacion-identidad' ? 'validation-icon-container' : ''}`}>
                                        <Icon name={item.icon as any} size={item.id === 'validacion-identidad' ? 38 : 20} style={{ color: 'currentColor' }} />
                                    </div>
                                ) : (
                                    <>
                                        <div className="svg-layout-size aux-icon-size icon-nohover transparent-bg">
                                            {/* El ícono se carga en negro por defecto */}
                                            <img src={`https://ssr.col.movistar.es/api/v1/get-glyph/${item.icon}/black`} width="20" height="20" alt="" loading="lazy" />
                                        </div>
                                        <div className="svg-layout-size aux-icon-size icon-hover transparent-bg">
                                            {/* El ícono cambia a blanco en hover */}
                                            <img src={`https://ssr.col.movistar.es/api/v1/get-glyph/${item.icon}/white`} width="20" height="20" alt="" loading="lazy" />
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className="text-container">
                                <span className="text bubble-text text-color--gp--white text-kind--span text-align--center text-wrap--pretty text-size--caption02 text-gp--fontype-light text-border--none text-display--block">
                                    {item.label}
                                </span>
                            </div>
                        </div>
                    );
                });
            })}
        </article>
    );
}