import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import MetricCounter from '@/components/MetricCounter';

export default function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-overline', { opacity: 0, y: 20, duration: 0.7, delay: 0.2, ease: 'power3.out' });
      gsap.from('.hero-title', { opacity: 0, y: 30, duration: 0.8, delay: 0.35, ease: 'power3.out' });
      gsap.from('.hero-desc', { opacity: 0, y: 20, duration: 0.7, delay: 0.5, ease: 'power3.out' });
      gsap.from('.hero-cta', { opacity: 0, y: 15, duration: 0.6, delay: 0.65, ease: 'power3.out' });
      gsap.from('.hero-stat', { opacity: 0, y: 30, duration: 0.8, stagger: 0.15, delay: 0.75, ease: 'power3.out' });
    });
    return () => ctx.revert();
  }, []);

  const handleScrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={contentRef} className="bg-navy pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container-main">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">
          {/* Left */}
          <div className="lg:w-[55%]">
            <div className="hero-overline flex items-center gap-2.5">
              <div className="h-1.5 w-1.5 rounded-full bg-green-accent" />
              <p className="text-overline uppercase text-gold tracking-[0.12em]">
                VENTURE CAPITAL
              </p>
            </div>
            <h1 className="hero-title mt-6 font-serif text-display-xl text-white">
              Intelligent Capital for the AI Era
            </h1>
            <p className="hero-desc mt-6 max-w-[520px] text-body-l leading-relaxed text-white/75">
              We empower the next generation of fintech innovators with strategic seed and growth
              capital. Partnering with visionary founders to engineer the future of finance.
            </p>
            <div className="hero-cta mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleScrollTo('#approach')}
                className="rounded bg-gold px-7 py-3 text-[13px] font-medium uppercase tracking-wider text-navy transition-all duration-200 hover:bg-gold-light"
              >
                Our Thesis
              </button>
              <button
                onClick={() => handleScrollTo('#portfolio')}
                className="rounded border border-white/30 px-7 py-3 text-[13px] font-medium uppercase tracking-wider text-white transition-all duration-200 hover:border-white"
              >
                View Portfolio
              </button>
            </div>
          </div>

          {/* Right — Metrics */}
          <div className="lg:w-[45%]">
            <div className="hero-stat rounded-lg border border-white/[0.08] bg-white/[0.04] p-8 md:p-10">
              <div className="flex flex-col gap-8">
                <div className="border-t-2 pt-6" style={{ borderImage: 'linear-gradient(to right, #B8860B, #2E7D4A) 1' }}>
                  <MetricCounter value="12+" label="Portfolio Companies" light />
                </div>
                <div className="border-t border-white/10 pt-6">
                  <MetricCounter value="$150M+" label="Assets Under Management" light />
                </div>
                <div className="border-t border-white/10 pt-6">
                  <MetricCounter value="Global" label="Investment Reach" light />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
