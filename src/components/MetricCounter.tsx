import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface MetricCounterProps {
  value: string;
  label: string;
  light?: boolean;
}

export default function MetricCounter({ value, label, light = false }: MetricCounterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const numericMatch = value.match(/^([$])?([\d.]+)(.*)/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseFloat(numericMatch[2]);
    const prefix = numericMatch[1] || '';
    const suffix = numericMatch[3] || '';
    const isDecimal = numericMatch[2].includes('.');

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
  }, [value]);

  return (
    <div ref={containerRef} className="flex flex-col items-start">
      <span className={`font-serif text-data ${light ? 'text-white' : 'text-ink'}`}>
        {displayValue}
      </span>
      <span className={`mt-2 text-caption uppercase ${light ? 'text-white/60' : 'text-slate'}`}>
        {label}
      </span>
    </div>
  );
}
