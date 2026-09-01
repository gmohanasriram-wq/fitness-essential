import Image from 'next/image';
import { footer } from '@/lib/data/footer';

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="container-page pt-12 pb-8 sm:py-12 md:py-16">
        <div className="grid gap-6 sm:gap-8 md:gap-12 md:grid-cols-12">
          <div className="md:col-span-5 space-y-4">
            <a
              href="#top"
              className="inline-block flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              aria-label="Fitness Essentials — back to top"
            >
              <Image
                src="/fitness-essentials-logo.png"
                alt="Fitness Essentials logo"
                width={140}
                height={32}
                className="h-6 md:h-7 w-auto object-contain"
              />
            </a>
            <p className="text-body text-[var(--color-fg-muted)] max-w-md">
              {footer.tagline}
            </p>
            <p className="text-eyebrow text-[var(--color-fg-subtle)] font-mono text-[11px] pt-2">
              {footer.location}
            </p>
          </div>

          <div className="md:col-span-3 space-y-4">
            <p className="text-eyebrow text-[var(--color-fg)]">Navigate</p>
            <ul className="space-y-3">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-label text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <p className="text-eyebrow text-[var(--color-fg)]">Location</p>
            <p className="text-body text-[var(--color-fg-muted)]">
              {footer.location}
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Fitness+Essentials+Kodungaiyur+Chennai+Tamil+Nadu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-eyebrow text-[var(--color-accent)] hover:text-[var(--color-fg)] transition-colors border-b border-[var(--color-accent)]/40 hover:border-[var(--color-fg)] pb-1"
            >
              Get directions →
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)]">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-eyebrow text-[var(--color-fg-subtle)] font-mono text-[11px]">
            {footer.copyright}
          </p>
          <p className="text-eyebrow text-[var(--color-fg-subtle)] font-mono text-[11px]">
            Kodungaiyur · Chennai
          </p>
        </div>
      </div>
    </footer>
  );
}
