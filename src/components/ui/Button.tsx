import { cn } from '@/lib/utils/cn';
import type { ButtonProps, LinkButtonProps } from '@/types';

const base =
  'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 select-none disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] active:scale-[0.99] motion-reduce:transform-none';

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-[var(--color-accent)] text-white font-semibold hover:bg-[var(--color-accent-muted)] hover:shadow-lg hover:shadow-[var(--color-accent)]/20',
  secondary:
    'border border-[var(--color-border)] text-[var(--color-fg)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-bg-elevated)] hover:text-white',
  ghost:
    'text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:translate-x-0.5 motion-reduce:hover:translate-x-0',
};

const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
  default: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-sm sm:text-base',
};

export function Button({
  variant = 'primary',
  size = 'default',
  className,
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  variant = 'primary',
  size = 'default',
  external = false,
  className,
  children,
  href = '#',
  ...props
}: LinkButtonProps) {
  const externalAttrs = external
    ? { target: '_blank', rel: 'noopener noreferrer' as const }
    : {};

  return (
    <a
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...externalAttrs}
      {...props}
    >
      {children}
    </a>
  );
}
