import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: 'Approach', href: '#approach' },
  { label: 'Track Record', href: '#trackrecord' },
  { label: 'Portfolio', href: '#portfolio' },
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: '#hero',
      start: 'bottom top',
      onEnter: () => setScrolled(true),
      onLeaveBack: () => setScrolled(false),
    });

    return () => {
      trigger.kill();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 border-b border-gold/25 bg-navy/95 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="container-main flex h-16 items-center justify-between md:h-[76px]">
        {/* Brand */}
        <a
          href="#hero"
          className="flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img src="/logo.png" alt="JasKapital" className="h-8 w-8" />
          <span className="font-serif text-[22px] font-semibold tracking-wide text-cream">
            Jas<span className="text-gold">Kapital</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="group relative pb-1 text-sm font-medium uppercase tracking-widest text-[#C9CDD6] transition-colors duration-200 hover:text-white"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="border border-gold px-6 py-3 text-[13px] font-semibold uppercase tracking-widest text-gold transition-all duration-200 hover:bg-gold hover:text-navy"
          >
            Get In Touch
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="flex items-center justify-center p-2.5 text-cream lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-gold/25 bg-navy px-6 pb-4 lg:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex min-h-11 items-center border-b border-white/10 text-sm uppercase tracking-widest text-[#C9CDD6] transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="mt-4 flex min-h-11 items-center justify-center border border-gold px-6 text-[13px] font-semibold uppercase tracking-widest text-gold transition-all duration-200 hover:bg-gold hover:text-navy"
            >
              Get In Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
