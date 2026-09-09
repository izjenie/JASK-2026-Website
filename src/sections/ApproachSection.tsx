import SectionHead from '@/components/SectionHead';
import { useReveal } from '@/hooks/use-reveal';

const pillars = [
  {
    title: 'AI Innovation',
    description:
      'Applied AI across fintech and other industries, backed by technical diligence rather than trend-chasing.',
  },
  {
    title: 'Financial Acumen',
    description:
      'Underwriting discipline drawn from institutional finance: capital structure, unit economics, and regulatory fluency.',
  },
  {
    title: 'Risk Management',
    description:
      'Structured governance and portfolio construction designed to hold through market and regulatory cycles.',
  },
  {
    title: 'Global Network',
    description:
      'Cross-border relationships across Southeast Asia ecosystem, connecting portfolio companies to capital and partners.',
  },
];

export default function ApproachSection() {
  const sectionRef = useReveal<HTMLElement>('.approach-el');

  return (
    <section id="approach" ref={sectionRef} className="bg-paper py-28 md:py-32">
      <div className="container-main">
        <div className="approach-el">
          <SectionHead
            eyebrow="Approach"
            title="Dual Expertise in Technology & Finance"
            side="We back founders at the intersection of applied AI and financial systems, where technical depth and capital discipline compound together."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`approach-el border-line py-8 lg:py-10 ${
                i !== pillars.length - 1 ? 'border-b lg:border-b-0 lg:border-r' : ''
              }`}
            >
              <div className="mr-0 lg:mr-9">
                <div className="mb-5 font-serif text-sm font-semibold tracking-wide text-gold-deep">
                  0{i + 1}
                </div>
                <h3 className="mb-3 font-serif text-[21px] font-semibold text-ink">{p.title}</h3>
                <p className="text-[14.5px] leading-[1.65] text-ink-soft">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
