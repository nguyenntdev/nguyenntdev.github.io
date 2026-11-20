import { useEffect, useState } from 'react';
import { calculateScrollProgress } from './portfolioLogic';

export function useScrollProgress(resetKey: string): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId: number | null = null;

    const updateProgress = () => {
      rafId = null;
      const doc = document.documentElement;
      const scrollY = window.scrollY || doc.scrollTop || 0;
      const scrollHeight = Math.max(doc.scrollHeight, document.body?.scrollHeight ?? 0);
      const viewportHeight = window.innerHeight || doc.clientHeight || 0;
      setProgress(calculateScrollProgress(scrollY, scrollHeight, viewportHeight));
    };

    const scheduleUpdate = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && document.body) {
      resizeObserver = new ResizeObserver(scheduleUpdate);
      resizeObserver.observe(document.body);
    }

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      resizeObserver?.disconnect();
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [resetKey]);

  return progress;
}
