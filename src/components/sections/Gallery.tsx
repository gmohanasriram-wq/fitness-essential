'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { Lightbox, type LightboxItem } from '@/components/ui/Lightbox';
import { gallery } from '@/lib/data/gallery';
import { cn } from '@/lib/utils/cn';

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const lightboxItems: LightboxItem[] = gallery.images.map((img) => ({
    src: img.image || '',
    alt: img.alt,
    caption: `${img.caption} · Concept Environment`,
  }));

  // Editorial layout — large · small · medium · large
  const layoutFor = (index: number) => {
    const mod = index % 4;
    if (mod === 0) return 'md:col-span-8 md:row-span-2 aspect-[16/10]';
    if (mod === 1) return 'md:col-span-4 md:row-span-1 aspect-[4/3]';
    if (mod === 2) return 'md:col-span-4 md:row-span-1 aspect-[4/3]';
    return 'md:col-span-8 md:row-span-1 aspect-[16/10] md:aspect-[16/6]';
  };

  return (
    <section id="gallery" className="section-pad bg-[var(--color-bg)]">
      <div className="container-wide space-y-8 sm:space-y-12 md:space-y-16">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-end">
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal>
              <p className="text-eyebrow text-[var(--color-accent)]">
                {gallery.eyebrow}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="text-h1 text-[var(--color-fg)] max-w-3xl">
                {gallery.headline}
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.16}>
              <p className="text-body-lg text-[var(--color-fg-muted)] max-w-md">
                {gallery.body}
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-auto gap-4 md:gap-6">
          {gallery.images.map((image, i) => (
            <ScrollReveal
              key={image.id}
              delay={0.16 + (i % 3) * 0.08}
              className={cn(layoutFor(i))}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className="group relative w-full h-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
                aria-label={`Open detail for ${image.caption}`}
              >
                <PlaceholderImage
                  src={image.image}
                  label={image.caption}
                  alt={image.alt}
                  index={i}
                  ratio="video"
                  className="h-full w-full transition-transform duration-500 group-hover:scale-[1.015]"
                />
              </button>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.24}>
          <p className="text-eyebrow text-[var(--color-fg-subtle)] text-center">
            {gallery.note}
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
