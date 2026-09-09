interface PortfolioCardProps {
  image: string;
  category: string;
  name: string;
  description: string;
  link: string;
}

export default function PortfolioCard({ image, category, name, description, link }: PortfolioCardProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={image} alt={name} className="pf-photo h-full w-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col pt-7">
        <p className="text-[13px] uppercase tracking-[0.05em] text-gold-deep">{category}</p>
        <h3 className="mt-2 font-serif text-[24px] font-semibold text-ink">{name}</h3>
        <p className="mt-2 text-[14.5px] leading-[1.6] text-ink-soft">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block w-fit border-b border-current pb-0.5 text-[13px] font-semibold uppercase tracking-[0.05em] text-ink transition-colors duration-200 hover:text-gold-deep"
        >
          Visit website
        </a>
      </div>
    </div>
  );
}
