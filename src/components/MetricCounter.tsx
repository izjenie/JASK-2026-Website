import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface MetricCounterProps {
  value: string;
  label: string;
  tier?: 'light' | 'dark' | 'dark-gold';
}

export default function MetricCounter({ value, label, tier = 'dark' }: MetricCounterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isNumeric = /^[$]?[\d.]+/.test(value);
  const [displayValue, setDisplayValue] = useState(isNumeric ? '0' : value);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isNumeric) return;

    const numericMatch = value.match(/^([$])?([\d.]+)(.*)/)!;
    const targetNum = parseFloat(numericMatch[2]);
    const prefix = numericMatch[1] || '';
    const suffix = numericMatch[3] || '';
    const isDecimal = numericMatch[2].includes('.');

    const mq = gsap.matchMedia();
    mq.add('(prefers-reduced-motion: no-preference)', () => {
      const obj = { val: 0 };

      const tween = gsap.to(obj, {
        val: targetNum,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          once: true,
        },
        onUpdate: () => {
          if (isDecimal) {
            setDisplayValue(`${prefix}${obj.val.toFixed(1)}${suffix}`);
          } else {
            setDisplayValue(`${prefix}${Math.round(obj.val)}${suffix}`);
          }
        },
      });

      return () => { tween.kill(); };
    });

    mq.add('(prefers-reduced-motion: reduce)', () => {
      setDisplayValue(value);
    });

    return () => mq.revert();
  }, [value, isNumeric]);

  const numColor = tier === 'dark' ? 'text-ink' : tier === 'dark-gold' ? 'text-gold' : 'text-cream';
  const labelColor =
    tier === 'dark' ? 'text-ink-soft' : tier === 'dark-gold' ? 'text-[#C7CCD6]' : 'text-[#8D97A6]';

  return (
    <div ref={containerRef} className="flex flex-col items-start">
      <span className={`font-serif text-[44px] font-semibold leading-none ${numColor}`}>
        {displayValue}
      </span>
      <span className={`mt-2.5 text-[13px] uppercase tracking-[0.06em] ${labelColor}`}>{label}</span>
    </div>
  );
}
