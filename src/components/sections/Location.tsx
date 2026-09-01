import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { LinkButton } from '@/components/ui/Button';
import { location } from '@/lib/data/location';

export function Location() {
  return (
    <section id="location" className="section-pad bg-[var(--color-bg-muted)]">
      <div className="container-wide space-y-8 sm:space-y-12 md:space-y-16">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <ScrollReveal>
                <p className="text-eyebrow text-[var(--color-accent)]">
                  {location.eyebrow}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h2 className="text-h1 text-[var(--color-fg)] max-w-2xl">
                  {location.headline}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.16}>
                <p className="text-body-lg text-[var(--color-fg-muted)] max-w-md">
                  {location.body}
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.24}>
              <div className="space-y-2 pt-8 border-t border-[var(--color-border)]">
                <p className="text-eyebrow text-[var(--color-fg-subtle)]">
                  Address
                </p>
                <p className="text-h3 text-[var(--color-fg)]">
                  {location.cityLine}
                </p>
                <p className="text-body text-[var(--color-fg-muted)] pt-4">
                  India
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.24}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <LinkButton href={location.directionsHref} external size="lg">
                  Get directions →
                </LinkButton>
              </div>
            </ScrollReveal>
          </div>

          {/* Cinematic map placeholder — no fabricated Google Maps embed with invented coordinates */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.16}>
              <a
                href={location.directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative aspect-[4/5] overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-muted)]"
                aria-label="Open directions in Google Maps"
              >
                {/* Hand-drawn topographic-style map composition */}
                <svg
                  className="absolute inset-0 w-full h-full parallax-media transition-transform duration-700 ease-out group-hover:scale-105"
                  viewBox="0 0 400 500"
                  preserveAspectRatio="xMidYMid slice"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="mapGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#0f0f0f" />
                      <stop offset="100%" stopColor="#1a1a1a" />
                    </linearGradient>
                    <radialGradient id="pinGlow" cx="0.5" cy="0.5" r="0.5">
                      <stop offset="0%" stopColor="#e11d48" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#e11d48" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <rect width="400" height="500" fill="url(#mapGrad)" />

                  {/* Grid */}
                  <g stroke="#2a2a2a" strokeWidth="0.5" opacity="0.6">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <line key={`h${i}`} x1="0" y1={i * 62.5} x2="400" y2={i * 62.5} />
                    ))}
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="500" />
                    ))}
                  </g>

                  {/* Streets — stylized, not real */}
                  <g stroke="#3a3a3a" strokeWidth="2" fill="none" opacity="0.55">
                    <path d="M 0 120 Q 120 110 200 140 T 400 130" />
                    <path d="M 0 250 Q 100 230 200 260 T 400 250" />
                    <path d="M 0 380 Q 130 360 200 390 T 400 380" />
                    <path d="M 100 0 Q 120 100 90 250 T 110 500" />
                    <path d="M 250 0 Q 270 120 240 250 T 270 500" />
                  </g>

                  {/* District blocks */}
                  <g fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="0.5" opacity="0.7">
                    <rect x="120" y="160" width="60" height="60" />
                    <rect x="190" y="160" width="40" height="60" />
                    <rect x="290" y="160" width="50" height="60" />
                    <rect x="130" y="280" width="70" height="50" />
                    <rect x="220" y="280" width="50" height="60" />
                    <rect x="290" y="280" width="60" height="60" />
                  </g>

                  {/* Pin glow */}
                  <circle cx="200" cy="260" r="80" fill="url(#pinGlow)" />

                  {/* Pin */}
                  <g transform="translate(200 260)">
                    <circle cx="0" cy="0" r="6" fill="#e11d48" />
                    <circle
                      cx="0"
                      cy="0"
                      r="14"
                      fill="none"
                      stroke="#e11d48"
                      strokeWidth="1.5"
                      opacity="0.8"
                    />
                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="30"
                      stroke="#e11d48"
                      strokeWidth="1.5"
                    />
                  </g>
                </svg>

                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <p className="text-eyebrow text-[var(--color-fg-subtle)]">
                    Kodungaiyur
                  </p>
                  <p className="mt-1 text-h3 text-[var(--color-fg)]">
                    Chennai, Tamil Nadu
                  </p>
                  <p className="mt-4 text-eyebrow text-[var(--color-accent)] group-hover:text-[var(--color-fg)] transition-colors">
                    Open in Google Maps →
                  </p>
                </div>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
