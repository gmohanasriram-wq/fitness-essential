'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { Lightbox, type LightboxItem } from '@/components/ui/Lightbox';
import { equipment } from '@/lib/data/equipment';

export function Equipment() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Surface concept images in the Lightbox
  const lightboxItems: LightboxItem[] = equipment.items.map((item) => ({
    src: item.image || '',
    alt: item.alt,
    caption: `${item.label} · Concept Environment`,
  }));

  return (
    <section id="equipment" className="section-pad bg-[var(--color-bg-muted)] relative">
      <div className="container-wide space-y-8 sm:space-y-12 md:space-y-16">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-end justify-between">
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal>
              <p className="text-eyebrow text-[var(--color-accent)] tracking-widest font-mono">
                {equipment.eyebrow}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="text-h1 text-[var(--color-fg)] max-w-xl">
                {equipment.headline}
              </h2>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4">
            <ScrollReveal delay={0.16}>
              <p className="text-body text-[var(--color-fg-muted)] max-w-md">
                {equipment.body}
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-3 flex lg:justify-end">
            <ScrollReveal delay={0.24}>
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/60 hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-border-strong)] px-5 py-3 text-label text-[var(--color-fg)] transition-colors group"
              >
                <span>Explore all areas</span>
                <ArrowUpRight className="h-4 w-4 text-[var(--color-accent)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </ScrollReveal>
          </div>
        </div>

        {/* 4-Card Training Environment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {equipment.items.map((item, i) => (
            <ScrollReveal key={item.id} delay={0.16 + i * 0.08}>
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className="group relative w-full h-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-muted)]"
                aria-label={`Open concept view for ${item.label}`}
              >
                <PlaceholderImage
                  src={item.image}
                  label={item.label}
                  alt={item.alt}
                  index={i}
                  ratio="video"
                  className="w-full h-full"
                />
              </button>
            </ScrollReveal>
          ))}
        </div>

        {/* Note */}
        <ScrollReveal delay={0.24}>
          <p className="text-eyebrow text-[var(--color-fg-subtle)] text-center text-[10px] tracking-wider">
            {equipment.note}
          </p>
        </ScrollReveal>
      </div>

      <Lightbox
        items={lightboxItems}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
      />
    </section>
  );
}
