import { LinkButton } from '@/components/ui/Button';
import { hero } from '@/lib/data/hero';
import { cn } from '@/lib/utils/cn';

interface HeroAnimationProps {
  className?: string;
}

export function HeroAnimation({ className }: HeroAnimationProps = {}) {
  return (
    <div className={cn('w-full max-w-xl', className)}>
      {/* Eyebrow: location */}
      <p className="text-eyebrow text-[var(--color-fg-muted)] mb-3 sm:mb-4 md:mb-8 flex items-center gap-2 text-[11px] sm:text-xs">
        <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[var(--color-accent)] shrink-0 inline-block" />
        <span className="tracking-widest">KODUNGAIYUR · CHENNAI</span>
      </p>

      {/* Headline */}
      <h1 className="text-[2.125rem] sm:text-[2.75rem] md:text-display text-[var(--color-fg)] mb-3.5 sm:mb-5 md:mb-8 tracking-tight font-medium leading-[1.04]">
        {hero.headline.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h1>

      {/* Subheadline */}
      <p className="max-w-[34ch] text-body sm:text-body-lg text-[var(--color-fg-muted)] leading-relaxed mb-5 sm:mb-7 md:mb-10">
        {hero.subheadline}
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 items-stretch sm:items-center">
        <LinkButton
          href={hero.primaryCta.href}
          size="lg"
          className="w-full sm:w-auto text-center justify-center font-medium"
        >
          {hero.primaryCta.label}
        </LinkButton>
        <LinkButton
          href={hero.secondaryCta.href}
          variant="ghost"
          size="lg"
          className="w-full sm:w-auto text-center justify-center"
        >
          {hero.secondaryCta.label} →
        </LinkButton>
      </div>
    </div>
  );
}