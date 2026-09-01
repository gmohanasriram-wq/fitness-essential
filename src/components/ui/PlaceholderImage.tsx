import Image from 'next/image';
import { cn } from '@/lib/utils/cn';

interface PlaceholderImageProps {
  label: string;
  caption?: string;
  src?: string;
  alt?: string;
  className?: string;
  index?: number;
  ratio?: 'video' | 'square' | 'portrait' | 'tall';
}

/**
 * Cinematic image container used for concept/actual photography and fallback placeholders.
 * Features dark surface with subtle red reticles and typographic metadata.
 */
export function PlaceholderImage({
  label,
  caption,
  src,
  alt,
  className,
  index = 0,
  ratio = 'video',
}: PlaceholderImageProps) {
  const ratioClass = {
    video: 'aspect-[16/10]',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    tall: 'aspect-[4/5]',
  }[ratio];

  // Vary the texture slightly per index when using procedural placeholder
  const seed = (index * 37) % 7;

  return (
    <div
      className={cn(
        'group relative overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-border-strong)] transition-colors duration-500',
        'bg-[var(--color-bg-elevated)]',
        ratioClass,
        className
      )}
      role="img"
      aria-label={alt || label}
    >
      {src ? (
        <>
          <Image
            src={src}
            alt={alt || label}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-center parallax-media transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
          />
          {/* Cinematic dark gradient overlay for optimal legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/95 via-[var(--color-bg)]/30 to-transparent pointer-events-none" />
        </>
      ) : (
        <>
          {/* Subtle gradient texture */}
          <div
            className="absolute inset-0 opacity-80"
            style={{
              background:
                seed % 2 === 0
                  ? 'radial-gradient(circle at 30% 20%, rgba(225,29,72,0.08), transparent 50%), radial-gradient(circle at 80% 80%, rgba(225,29,72,0.04), transparent 55%)'
                  : 'radial-gradient(circle at 70% 30%, rgba(225,29,72,0.07), transparent 50%), radial-gradient(circle at 20% 70%, rgba(225,29,72,0.03), transparent 55%)',
            }}
          />

          {/* Hairline grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(var(--color-fg) 1px, transparent 1px), linear-gradient(90deg, var(--color-fg) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
        </>
      )}

      {/* Corner framing reticles (tablet/desktop) */}
      <div className="absolute top-3.5 left-3.5 h-2.5 w-2.5 border-t border-l border-[var(--color-accent)]/80 pointer-events-none hidden sm:block" />
      <div className="absolute top-3.5 right-3.5 h-2.5 w-2.5 border-t border-r border-[var(--color-accent)]/80 pointer-events-none hidden sm:block" />
      <div className="absolute bottom-3.5 left-3.5 h-2.5 w-2.5 border-b border-l border-[var(--color-accent)]/80 pointer-events-none hidden sm:block" />
      <div className="absolute bottom-3.5 right-3.5 h-2.5 w-2.5 border-b border-r border-[var(--color-accent)]/80 pointer-events-none hidden sm:block" />

      {/* Metadata / Labels */}
      {src ? (
        <div className="absolute inset-0 flex flex-col justify-between p-3.5 sm:p-5 pointer-events-none">
          <span className="text-eyebrow text-[var(--color-accent)] font-mono text-[10px] sm:text-[11px]">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div>
            <p className="text-base sm:text-h3 text-[var(--color-fg)] font-medium tracking-tight">
              {label}
            </p>
            {caption && (
              <p className="mt-0.5 sm:mt-1 text-eyebrow text-[var(--color-fg-muted)] text-[9px] sm:text-[10px]">
                {caption}
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 pointer-events-none">
          <span className="text-eyebrow text-[var(--color-fg-subtle)] mb-2 sm:mb-3 text-[10px] sm:text-xs">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-base sm:text-h3 text-[var(--color-fg)] tracking-tight max-w-md">
            {label}
          </span>
          {caption && (
            <span className="mt-2 sm:mt-3 text-eyebrow text-[var(--color-fg-subtle)] text-[9px] sm:text-[10px]">
              {caption}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
