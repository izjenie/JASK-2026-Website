import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import SectionLabel from '@/components/SectionLabel';
import PortfolioCard from '@/components/PortfolioCard';

gsap.registerPlugin(ScrollTrigger);

const companies = [
  {
    image: '/images/portfolio-mcash.jpg',
    category: 'Digital Infrastructure',
    name: 'MCASH',
    description:
      'Accelerating the transition to clean energy with electric vehicle infrastructure and decentralized wireless access.',
  },
  {
    image: '/images/portfolio-nfcx.jpg',
    category: 'Digital Consumer Experience',
    name: 'NFCX',
    description:
      'Complete EV infrastructure, digital product aggregation, and cloud advertising platform for brick-and-mortar retailers.',
  },
  {
    image: '/images/portfolio-risetai.jpg',
    category: 'Artificial Intelligence',
    name: 'Riset.ai',
    description:
      'Advanced Computer Vision solutions aligning AI systems with human intention for intelligent retail and transportation.',
  },
];

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from('.portf-el', {
        opacity: 0, y: 30, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 85%', once: true },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="bg-white py-28 md:py-36">
      <div className="container-main">
        <div className="portf-el mb-14">
          <SectionLabel text="Portfolio" />
          <h2 className="mt-4 font-serif text-display-l text-ink">Companies Shaping the Future</h2>
          <div className="mt-4 h-px w-10 bg-gradient-to-r from-gold to-green-accent" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {companies.map((co) => (
            <div key={co.name} className="portf-el">
              <PortfolioCard
                image={co.image}
                category={co.category}
                name={co.name}
                description={co.description}
              />
            </div>
          ))}
        </div>

        <div className="portf-el mt-10">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 text-caption uppercase tracking-wider text-blue-accent transition-all duration-200 hover:underline"
          >
            View All Investments
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
