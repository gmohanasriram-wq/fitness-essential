import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { brand } from '@/lib/data/brand';

export function BrandStatement() {
  return (
    <section className="section-pad bg-[var(--color-bg)] relative">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-20 items-start">
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 md:space-y-10">
            <ScrollReveal>
              <p className="text-eyebrow text-[var(--color-accent)] font-mono">
                {brand.eyebrow}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="text-h1 text-[var(--color-fg)]">
                {brand.headline.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5 lg:pt-16">
            <ScrollReveal delay={0.16}>
              <div className="relative pl-6 md:pl-8 border-l border-[var(--color-border)]">
                <p className="text-body-lg text-[var(--color-fg-muted)]">
                  {brand.body}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
