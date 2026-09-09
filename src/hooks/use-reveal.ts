import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useReveal<T extends HTMLElement>(selector: string, stagger = 0.12) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mq = gsap.matchMedia();
    mq.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from(selector, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      });
    });

    return () => mq.revert();
  }, [selector, stagger]);

  return ref;
}
