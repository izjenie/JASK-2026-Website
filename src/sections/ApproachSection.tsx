import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '@/components/SectionLabel';
import PillarCard from '@/components/PillarCard';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    title: 'AI Innovation',
    description:
      'We back visionary founders leveraging artificial intelligence to redefine industries. We provide deep technical guidance alongside capital.',
  },
  {
    title: 'Financial Acumen',
    description:
      'Our financial expertise helps portfolio companies build robust business models, navigate regulation, and grow sustainably.',
  },
  {
    title: 'Risk Management',
    description:
      'We implement institutional-grade risk frameworks to ensure long-term stability and resilience in volatile markets.',
  },
  {
    title: 'Global Network',
    description:
      'Access to a worldwide network of partners, advisors, and potential clients to accelerate go-to-market strategies.',
  },
];

export default function ApproachSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from('.approach-el', {
        opacity: 0, y: 30, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 85%', once: true },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="approach" ref={sectionRef} className="bg-white py-28 md:py-36">
      <div className="container-main">
        <div className="approach-el mb-16 max-w-[640px]">
          <SectionLabel text="Our Approach" />
          <h2 className="mt-4 font-serif text-display-l text-ink">Dual Expertise in Technology & Finance</h2>
          <div className="mt-4 h-px w-10 bg-gradient-to-r from-gold to-green-accent" />
          <p className="mt-5 text-body-l leading-relaxed text-slate">
            We don&rsquo;t just invest; we build. Our team combines deep technical knowledge in
            artificial intelligence with decades of experience in traditional finance. This unique
            intersection allows us to identify and nurture the true disruptors of tomorrow.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.title} className="approach-el">
              <PillarCard title={p.title} description={p.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
