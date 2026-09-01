import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { LinkButton } from '@/components/ui/Button';
import { finalCta } from '@/lib/data/finalCta';

export function FinalCta() {
  return (
    <section className="section-pad bg-[var(--color-bg)] relative overflow-hidden">
      {/* Subtle crimson ambient glow */}
      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(225,29,72,0.12) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="max-w-4xl mx-auto text-center space-y-5 sm:space-y-8 md:space-y-12">
          <ScrollReveal>
            <p className="text-eyebrow text-[var(--color-accent)] font-mono tracking-widest">
              {finalCta.eyebrow}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h2 className="text-h1 text-[var(--color-fg)]">
              {finalCta.headline.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <p className="text-body-lg text-[var(--color-fg-muted)] max-w-2xl mx-auto">
              {finalCta.body}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.24}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4">
              <LinkButton href={finalCta.primaryCta.href} size="lg">
                {finalCta.primaryCta.label}
              </LinkButton>
              <LinkButton
                href={finalCta.secondaryCta.href}
                variant="secondary"
                size="lg"
              >
                {finalCta.secondaryCta.label}
              </LinkButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
