'use client';

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from 'react';
import { cn } from '@/lib/utils/cn';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'header' | 'footer';
}

const emptySubscribe = () => () => { };
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

/**
 * Scroll-Reactive Editorial Typography & Content Component:
 * - Upcoming state: slightly dimmed (opacity: ~0.45) and subtly recessed (translateY: 16px).
 * - Approaching/entering viewport: smoothly brightens to full brilliance (opacity: 1) and settles (translateY: 0).
 * - Settled: remains completely normal, crisp, and 100% bright.
 * - Safe progressive enhancement: SSR HTML is 100% visible (opacity: 1) and initial unrevealed state is never 0.
 * - Full prefers-reduced-motion compliance.
 */
export function ScrollReveal({
  children,
  delay = 0,
  y = 16,
  className,
  as = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isSettled, setIsSettled] = useState(false);
  const isClient = useSyncExternalStore(
    emptySubscribe,
    getClientSnapshot,
    getServerSnapshot
  );

  useEffect(() => {
    // If IntersectionObserver not supported or reduced motion requested, settle immediately
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      const id = setTimeout(() => setIsSettled(true), 0);
      return () => clearTimeout(id);
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      const id = setTimeout(() => setIsSettled(true), 0);
      return () => clearTimeout(id);
    }

    const element = ref.current;
    if (!element) {
      const id = setTimeout(() => setIsSettled(true), 0);
      return () => clearTimeout(id);
    }

    // If already in viewport on initial page load, settle immediately
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setIsSettled(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSettled(true);
          observer.unobserve(element);
        }
      },
      {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.05,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const Component = as;

  return (
    <Component
      ref={ref as any}
      className={cn(
        'transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100',
        isClient && !isSettled
          ? 'opacity-45 translate-y-4'
          : 'opacity-100 translate-y-0',
        className
      )}
      style={{
        transitionDelay: isSettled ? `${delay}s` : '0s',
      }}
    >
      {children}
    </Component>
  );
}
