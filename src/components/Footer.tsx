export default function Footer() {
  return (
    <footer className="bg-navy py-11 text-[13px] text-[#8D97A6]">
      <div className="container-main flex flex-wrap items-center justify-between gap-4">
        <span className="font-serif text-base text-cream">JasKapital</span>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href="mailto:info@jaskapital.com" className="transition-colors duration-200 hover:text-cream">
            info@jaskapital.com
          </a>
          <span>&copy; 2026 JasKapital. Venture Builder in Fintech &amp; Digital Infrastructure.</span>
        </div>
      </div>
    </footer>
  );
}
