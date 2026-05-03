import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '@/components/SectionLabel';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from('.contact-el', {
        opacity: 0, y: 30, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 85%', once: true },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="bg-warm-white py-28 md:py-36">
      <div className="container-main">
        <div className="contact-el max-w-[560px]">
          <SectionLabel text="Get In Touch" />
          <h2 className="mt-4 font-serif text-display-l text-ink">Partner with Us</h2>
          <p className="mt-5 text-body-l leading-relaxed text-slate">
            Are you an ambitious founder with a groundbreaking idea in AI or finance? We want to
            hear from you. Let&rsquo;s build the future together.
          </p>

          <div className="mt-10 space-y-3">
            <a href="mailto:info@jaskapital.com" className="block text-base text-blue-accent hover:underline">
              info@jaskapital.com
            </a>
            <p className="text-base text-slate">+6221-50250350</p>
          </div>


        </div>
      </div>
    </section>
  );
}
