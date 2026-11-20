import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { HeroAnimation } from './HeroAnimation';
import { hero } from '@/lib/data/hero';

export function Hero() {
  const heroImageSrc = hero.image?.src || '/images/hero/hero-concept.jpg';
  const heroImageAlt = hero.image?.alt || 'Fitness Essentials training facility concept';

  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-[var(--color-bg)] md:min-h-[100dvh]"
    >
      <div className="relative z-10 flex flex-col md:flex-row md:min-h-[100dvh] w-full">
        {/* Left side: editorial typography */}
        <div className="w-full px-6 pt-20 pb-10 sm:px-10 sm:pt-24 sm:pb-12 md:py-24 md:px-12 lg:px-16 md:flex-1 md:flex md:flex-col md:justify-center relative">
          {/* Subtle architectural reticles */}
          <div className="absolute top-8 right-8 h-3 w-3 border-t border-r border-[var(--color-accent)]/40 pointer-events-none hidden md:block" />
          <div className="absolute bottom-8 right-8 h-3 w-3 border-b border-r border-[var(--color-accent)]/40 pointer-events-none hidden md:block" />

          <HeroAnimation />
        </div>

        {/* Right side: cinematic visual treatment */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-auto md:flex-1 md:min-h-[100dvh] overflow-hidden bg-[var(--color-bg-muted)] border-t md:border-t-0 md:border-l border-[var(--color-border)]/60">
          {/* Concept Hero Image */}
          <Image
            src={heroImageSrc}
            alt={heroImageAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center scale-100 transition-transform duration-1000 ease-out"
          />

          {/* Cinematic Vignette & Edge Blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-[var(--color-bg)]/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)]/70 via-transparent to-transparent pointer-events-none hidden md:block" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--color-bg)] to-transparent pointer-events-none z-10 hidden md:block" />

          {/* Corner reticles (desktop only for clean mobile composition) */}
          <div className="absolute top-6 left-6 h-3 w-3 border-t border-l border-[var(--color-accent)] pointer-events-none z-10 hidden md:block" />
          <div className="absolute top-6 right-6 h-3 w-3 border-t border-r border-[var(--color-accent)] pointer-events-none z-10 hidden md:block" />
          <div className="absolute bottom-6 left-6 h-3 w-3 border-b border-l border-[var(--color-accent)] pointer-events-none z-10 hidden md:block" />
          <div className="absolute bottom-6 right-6 h-3 w-3 border-b border-r border-[var(--color-accent)] pointer-events-none z-10 hidden md:block" />

          {/* Actual logo brand badge (tablet/desktop) */}
          <div className="absolute top-6 right-6 z-20 hidden md:flex items-center gap-2.5 bg-[var(--color-bg)]/85 backdrop-blur-md px-3 py-1.5 border border-[var(--color-border)]">
            <Image
              src="/fitness-essentials-logo.png"
              alt="Fitness Essentials logo"
              width={60}
              height={16}
              className="h-4 w-auto opacity-80 object-contain"
            />
            <span className="text-[10px] tracking-widest text-[var(--color-fg-muted)] font-mono uppercase">
              Kodungaiyur
            </span>
          </div>

          {/* Floating Location Badge (desktop only) */}
          <div className="absolute bottom-8 right-8 z-20 hidden md:flex items-center gap-3.5 bg-[var(--color-bg-elevated)]/90 backdrop-blur-md border border-[var(--color-border)] px-4 py-3 shadow-2xl">
            <div className="flex h-8 w-8 items-center justify-center rounded-none bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 text-[var(--color-accent)] shrink-0">
              <MapPin className="h-4 w-4" />
            </div>
            <div className="text-left">
              <p className="text-eyebrow text-[var(--color-fg)] text-[11px] tracking-wider leading-tight">
                KODUNGAIYUR
              </p>
              <p className="text-eyebrow text-[var(--color-fg-muted)] text-[10px] tracking-wider mt-0.5">
                CHENNAI · TAMIL NADU
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}