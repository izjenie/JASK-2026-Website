import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '@/components/SectionLabel';
import MetricCounter from '@/components/MetricCounter';

gsap.registerPlugin(ScrollTrigger);

export default function TrackRecordSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from('.track-el', {
        opacity: 0, y: 30, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 85%', once: true },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="trackrecord" ref={sectionRef} className="bg-warm-white py-28 md:py-36">
      <div className="container-main">
        <div className="track-el text-center mb-14">
          <SectionLabel text="Track Record" centered />
          <h2 className="mt-4 font-serif text-display-l text-ink">Delivering Exceptional Returns</h2>
          <p className="mx-auto mt-5 max-w-[600px] text-body-l leading-relaxed text-slate">
            Our hands-on approach goes beyond capital. We actively work with our portfolio companies
            to refine product-market fit, optimize operations, and scale effectively.
          </p>
        </div>

        <div className="track-el mx-auto mb-2 h-px w-16 bg-gradient-to-r from-gold to-green-accent" />
        <div className="track-el flex flex-col divide-y divide-border-gray border-y border-border-gray md:flex-row md:divide-x md:divide-y-0">
          <div className="flex flex-1 flex-col items-center py-10 md:py-12">
            <MetricCounter value="11x" label="Average ROI" />
          </div>
          <div className="flex flex-1 flex-col items-center py-10 md:py-12 md:border-l md:border-border-gray">
            <MetricCounter value="$150M+" label="Portfolio Valuation" />
          </div>
          <div className="flex flex-1 flex-col items-center py-10 md:py-12 md:border-l md:border-border-gray">
            <MetricCounter value="5" label="Successful Exits" />
          </div>
        </div>
      </div>
    </section>
  );
}
