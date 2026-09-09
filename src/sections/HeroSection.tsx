import { useEffect } from 'react';
import gsap from 'gsap';
import MetricCounter from '@/components/MetricCounter';

export default function HeroSection() {
  useEffect(() => {
    const mq = gsap.matchMedia();
    mq.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.hero-eye', { opacity: 0, y: 16, duration: 0.6, delay: 0.15, ease: 'power3.out' });
      gsap.from('.hero-title', { opacity: 0, y: 24, duration: 0.8, delay: 0.3, ease: 'power3.out' });
      gsap.from('.hero-lede', { opacity: 0, y: 16, duration: 0.7, delay: 0.45, ease: 'power3.out' });
      gsap.from('.hero-cta', { opacity: 0, y: 12, duration: 0.6, delay: 0.6, ease: 'power3.out' });
      gsap.from('.hero-metric', { opacity: 0, y: 20, duration: 0.7, stagger: 0.1, delay: 0.7, ease: 'power3.out' });
    });
    return () => mq.revert();
  }, []);

  const handleScrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-navy pb-0 pt-32 text-cream md:pt-44">
      <div className="hero-grid" />
      <div className="container-main relative">
        <div className="max-w-[820px]">
          <div className="hero-eye eyebrow !text-gold">Venture Builder</div>
          <h1 className="hero-title mb-7 font-serif text-[clamp(38px,5.6vw,68px)] font-semibold leading-[1.08] tracking-tight">
            Building the AI-native
            <br />
            backbone of <span className="italic text-gold">Indonesian finance</span>
          </h1>
          <p className="hero-lede mb-11 max-w-[600px] text-[19px] leading-[1.6] text-[#B9C0CC]">
            JasKapital invests seed and growth capital in founders building with AI across fintech
            and digital infrastructure, matching technical conviction with financial discipline.
          </p>
          <div className="hero-cta mb-24 flex flex-wrap items-center gap-4">
            <button
              onClick={() => handleScrollTo('#approach')}
              className="flex min-h-11 items-center bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-wide text-navy transition-all duration-200 hover:bg-gold-light"
            >
              Our Thesis
            </button>
            <button
              onClick={() => handleScrollTo('#portfolio')}
              className="flex min-h-11 items-center border border-cream/35 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-cream transition-all duration-200 hover:border-gold hover:text-gold"
            >
              View Portfolio
            </button>
          </div>
        </div>
      </div>

      <div className="container-main relative">
        <div className="grid grid-cols-1 border-t border-cream/15 md:grid-cols-3">
          <div className="hero-metric border-b border-cream/15 py-9 md:border-b-0 md:border-r md:py-11 md:pr-8">
            <MetricCounter value="12+" label="Portfolio Companies" tier="light" />
          </div>
          <div className="hero-metric border-b border-cream/15 py-9 md:border-b-0 md:border-r md:py-11 md:pr-8">
            <MetricCounter value="$150M+" label="Assets Under Management" tier="light" />
          </div>
          <div className="hero-metric py-9 md:py-11">
            <MetricCounter value="Global" label="Investment Reach" tier="light" />
          </div>
        </div>
      </div>
    </section>
  );
}
