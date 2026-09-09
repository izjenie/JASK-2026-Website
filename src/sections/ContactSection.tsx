import SectionHead from '@/components/SectionHead';
import { useReveal } from '@/hooks/use-reveal';

export default function ContactSection() {
  const sectionRef = useReveal<HTMLElement>('.contact-el', 0.1);

  return (
    <section id="contact" ref={sectionRef} className="bg-paper py-28 md:py-32">
      <div className="container-main">
        <div className="contact-el">
          <SectionHead
            eyebrow="Get In Touch"
            title="Building something at the edge of AI and finance?"
            side=""
          />
        </div>

        <div className="contact-el grid grid-cols-1 gap-12 border-t border-line pt-16 md:grid-cols-[1.1fr_1fr] md:gap-20">
          <div>
            <div className="mb-8">
              <div className="mb-2.5 text-[12.5px] uppercase tracking-[0.1em] text-ink-soft">Email</div>
              <a
                href="mailto:info@jaskapital.com"
                className="font-serif text-[26px] font-semibold text-ink transition-colors duration-200 hover:text-gold-deep"
              >
                info@jaskapital.com
              </a>
            </div>
            <div>
              <div className="mb-2.5 text-[12.5px] uppercase tracking-[0.1em] text-ink-soft">Phone</div>
              <div className="font-serif text-[26px] font-semibold text-ink">+6221-50250350</div>
            </div>
          </div>
          <p className="text-[15px] leading-[1.7] text-ink-soft">
            We meet founders early, before the deck is polished and before the metrics are perfect.
            If you are building with AI in fintech or digital infrastructure, reach out.
          </p>
        </div>
      </div>
    </section>
  );
}
