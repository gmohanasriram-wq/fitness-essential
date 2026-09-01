'use client';

import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

export interface LightboxItem {
  src: string;
  alt: string;
  caption?: string;
}

interface LightboxProps {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
}

export function Lightbox({ items, index, onClose }: LightboxProps) {
  const reduced = useReducedMotion();
  const [prevIndex, setPrevIndex] = useState(index);
  const [internalIndex, setInternalIndex] = useState(index ?? 0);

  if (index !== prevIndex) {
    setPrevIndex(index);
    if (index !== null) {
      setInternalIndex(index);
    }
  }

  const goPrev = useCallback(
    () => setInternalIndex((i) => (i - 1 + items.length) % items.length),
    [items.length]
  );
  const goNext = useCallback(
    () => setInternalIndex((i) => (i + 1) % items.length),
    [items.length]
  );

  useEffect(() => {
    if (index === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [index, onClose, goPrev, goNext]);

  const open = index !== null;
  const current = open ? items[internalIndex] : null;

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption ?? current.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-bg)]/95 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close lightbox"
            className="absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          >
            <X className="h-5 w-5" />
          </button>

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label="Previous image"
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                aria-label="Next image"
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <motion.figure
            key={internalIndex}
            initial={{ opacity: 0, scale: reduced ? 1 : 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduced ? 0 : 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[min(92vw,1400px)] max-h-[80vh]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.src}
              alt={current.alt}
              className={cn(
                'max-h-[80vh] w-auto max-w-full object-contain',
                'border border-[var(--color-border)]'
              )}
            />
            {(current.caption || current.alt) && (
              <figcaption className="mt-4 text-center text-eyebrow text-[var(--color-fg-muted)]">
                {current.caption ?? current.alt}
              </figcaption>
            )}
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
