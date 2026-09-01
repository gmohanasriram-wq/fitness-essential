import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { experience } from '@/lib/data/experience';

export function Experience() {
  return (
    <section id="experience" className="section-pad bg-[var(--color-bg)] relative">
      <div className="container-page space-y-8 sm:space-y-12 md:space-y-20">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-7 space-y-4 md:space-y-6">
            <ScrollReveal>
              <p className="text-eyebrow text-[var(--color-accent)] font-mono">
                {experience.eyebrow}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="text-h1 text-[var(--color-fg)]">
                {experience.headline.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.16}>
              <PlaceholderImage
                src={experience.image?.src}
                alt={experience.image?.alt}
                label="The floor"
                caption="Editorial view"
                index={0}
                ratio="video"
              />
            </ScrollReveal>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {experience.pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.index} delay={0.16 + i * 0.08}>
              <article className="space-y-3 md:space-y-4 pt-6 md:pt-8 border-t border-[var(--color-border)]">
                <p className="text-eyebrow text-[var(--color-accent)] font-mono">
                  {pillar.index}
                </p>
                <h3 className="text-h3 text-[var(--color-fg)]">{pillar.title}</h3>
                <p className="text-body text-[var(--color-fg-muted)]">
                  {pillar.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Closing line */}
        <ScrollReveal delay={0.24}>
          <p className="text-h3 text-[var(--color-fg-muted)] max-w-3xl">
            {experience.closing}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
