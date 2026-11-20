'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { LinkButton } from '@/components/ui/Button';
import { navLinks } from '@/lib/data/navigation';
import { cn } from '@/lib/utils/cn';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll and handle escape key when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setOpen(false);
      };
      window.addEventListener('keydown', onKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', onKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out',
          scrolled || open
            ? 'bg-[var(--color-bg)]/95 backdrop-blur-md border-b border-[var(--color-border)]'
            : 'bg-transparent border-b border-transparent'
        )}
      >
        <div className="container-page flex h-16 md:h-20 items-center justify-between">
          <a
            href="#top"
            className="flex items-center flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
            aria-label="Fitness Essentials — back to top"
          >
            <Image
              src="/fitness-essentials-logo.png"
              alt="Fitness Essentials logo"
              width={60}
              height={60}
              priority
              className="h-12 w-12 md:h-[54px] md:w-[54px] lg:h-[60px] lg:w-[60px] object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-label text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <LinkButton href="#location" size="default">
              Visit
            </LinkButton>
          </nav>

          {/* Mobile/Tablet Toggle Button */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex h-11 w-11 items-center justify-center border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/80 hover:bg-[var(--color-bg-elevated)] text-[var(--color-fg)] active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile/Tablet Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 lg:hidden bg-[var(--color-bg)]/98 backdrop-blur-xl flex flex-col justify-between pt-20 sm:pt-24 pb-6 px-6 max-h-[100dvh] overflow-y-auto"
            aria-hidden={!open}
          >
            <nav className="flex flex-col gap-3 sm:gap-5 pt-2 sm:pt-4" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={reduced ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: reduced ? 0 : 0.05 + i * 0.05,
                    duration: 0.3,
                  }}
                  className="flex items-center justify-between text-h2 text-[var(--color-fg)] border-b border-[var(--color-border)]/80 py-2.5 sm:pb-5 min-h-[44px] hover:text-[var(--color-accent)] transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="text-eyebrow font-mono text-[var(--color-accent)] text-xs">
                    0{i + 1}
                  </span>
                </motion.a>
              ))}
            </nav>

            <div className="pt-6 sm:pt-8 space-y-4">
              <div className="flex items-center justify-between text-eyebrow text-[var(--color-fg-subtle)] text-[11px] pb-2">
                <span>KODUNGAIYUR</span>
                <span>CHENNAI, TAMIL NADU</span>
              </div>
              <LinkButton
                href="#location"
                size="lg"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Visit the gym
              </LinkButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
