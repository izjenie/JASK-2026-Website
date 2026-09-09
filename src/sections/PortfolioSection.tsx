import SectionHead from '@/components/SectionHead';
import PortfolioCard from '@/components/PortfolioCard';
import { useReveal } from '@/hooks/use-reveal';

const companies = [
  {
    image: '/images/portfolio-mcash.jpg',
    category: 'Digital Infrastructure',
    name: 'MCASH',
    description:
      'Accelerating the transition to clean energy with electric vehicle infrastructure and decentralized wireless access.',
    link: 'https://www.mcash.id',
  },
  {
    image: '/images/portfolio-nfcx.jpg',
    category: 'Digital Consumer Experience',
    name: 'NFCX',
    description:
      'Complete EV infrastructure, digital product aggregation, and cloud advertising platform for brick-and-mortar retailers.',
    link: 'https://www.nfcindonesia.id',
  },
  {
    image: '/images/portfolio-risetai.jpg',
    category: 'Artificial Intelligence',
    name: 'Riset.ai',
    description:
      'Advanced Computer Vision solutions aligning AI systems with human intention for intelligent retail and transportation.',
    link: 'https://www.riset.ai',
  },
];

export default function PortfolioSection() {
  const sectionRef = useReveal<HTMLElement>('.portf-el');

  return (
    <section id="portfolio" ref={sectionRef} className="bg-paper py-28 md:py-32">
      <div className="container-main">
        <div className="portf-el">
          <SectionHead
            eyebrow="Portfolio"
            title="Companies We've Built With"
            side="Three of our 12+ portfolio companies, across fintech and digital infrastructure."
          />
        </div>

        <div className="portf-el grid grid-cols-1 gap-x-8 gap-y-12 border-t border-line md:grid-cols-3">
          {companies.map((co) => (
            <div key={co.name} className="border-t border-line pt-6 md:border-t-0 md:border-r md:border-line md:pr-8 md:pt-0 [&:nth-child(3)]:md:border-r-0">
              <PortfolioCard
                image={co.image}
                category={co.category}
                name={co.name}
                description={co.description}
                link={co.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
