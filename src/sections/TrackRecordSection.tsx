import SectionHead from '@/components/SectionHead';
import MetricCounter from '@/components/MetricCounter';
import { useReveal } from '@/hooks/use-reveal';

export default function TrackRecordSection() {
  const sectionRef = useReveal<HTMLElement>('.track-el');

  return (
    <section id="trackrecord" ref={sectionRef} className="bg-navy text-cream py-28 md:py-32">
      <div className="container-main">
        <div className="track-el">
          <SectionHead
            eyebrow="Track Record"
            title="Results, Measured Plainly"
            side="Performance across our portfolio to date, reported as we underwrite: in returns, valuation, and realized exits."
            onDark
          />
        </div>

        <div className="track-el flex flex-col gap-10 md:flex-row md:gap-0">
          <div className="md:flex-1 md:border-r md:border-cream/15 md:pr-10">
            <MetricCounter value="11x" label="Average ROI" tier="dark-gold" />
          </div>
          <div className="md:flex-1 md:border-r md:border-cream/15 md:px-10">
            <MetricCounter value="$150M+" label="Portfolio Valuation" tier="dark-gold" />
          </div>
          <div className="md:flex-1 md:pl-10">
            <MetricCounter value="5" label="Successful Exits" tier="dark-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
