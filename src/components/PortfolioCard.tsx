import { ArrowRight } from 'lucide-react';

interface PortfolioCardProps {
  image: string;
  category: string;
  name: string;
  description: string;
  link: string;
}

export default function PortfolioCard({ image, category, name, description, link }: PortfolioCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border border-border-gray bg-white shadow-card transition-all duration-300 hover:shadow-card-hover">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-7">
        <p className="text-caption uppercase text-gold">{category}</p>
        <h3 className="mt-2 font-serif text-h3 text-ink">{name}</h3>
        <p className="mt-2 text-body leading-relaxed text-slate line-clamp-3">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-caption uppercase tracking-wider text-blue-accent transition-all duration-200 hover:underline"
        >
          Learn More
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
