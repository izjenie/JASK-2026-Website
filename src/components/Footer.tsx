export default function Footer() {
  return (
    <footer className="bg-navy py-20">
      <div className="container-main grid gap-12 md:grid-cols-4">
        {/* Column 1: Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="JasKapital" className="h-7 w-7" />
            <span className="text-base font-medium text-white">JasKapital</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Building Intelligent Capital
          </p>
          <p className="mt-6 text-xs tracking-wider text-white/40">
            &copy; 2026 JasKapital. All Rights Reserved.
          </p>
        </div>

        {/* Column 2: Company */}
        <div>
          <div className="mb-3 h-px w-4 bg-green-accent" />
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-gold">
            Company
          </h4>
          <nav className="flex flex-col gap-3">
            {[
              { label: 'About', href: '#approach' },
              { label: 'Approach', href: '#approach' },
              { label: 'Portfolio', href: '#portfolio' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Column 3: Contact */}
        <div>
          <div className="mb-3 h-px w-4 bg-green-accent" />
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-gold">
            Contact
          </h4>
          <a
            href="mailto:info@jaskapital.com"
            className="block text-sm text-white/60 transition-colors duration-200 hover:text-white"
          >
            info@jaskapital.com
          </a>
          <p className="mt-2 text-sm text-white/60">+6221-50250350</p>
        </div>

        {/* Column 4: Connect */}
        <div>
          <div className="mb-3 h-px w-4 bg-green-accent" />
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-gold">
            Connect
          </h4>
          <div className="flex flex-col gap-3">
            {['LinkedIn', 'Twitter', 'AngelList'].map((social) => (
              <a
                key={social}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
