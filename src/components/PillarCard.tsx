import { Cpu, TrendingUp, Shield, Globe, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  'AI Innovation': Cpu,
  'Financial Acumen': TrendingUp,
  'Risk Management': Shield,
  'Global Network': Globe,
};

interface PillarCardProps {
  title: string;
  description: string;
}

export default function PillarCard({ title, description }: PillarCardProps) {
  const Icon = iconMap[title] || Cpu;

  return (
    <div className="group rounded-lg border border-border-gray bg-soft-gray p-10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover">
      <div className="mb-5 h-0.5 w-12 bg-gradient-to-r from-gold to-green-accent" />
      <Icon className="mb-4 h-7 w-7 text-navy" strokeWidth={1.5} />
      <h3 className="font-serif text-h3 text-ink">{title}</h3>
      <p className="mt-3 text-body leading-relaxed text-slate">{description}</p>
    </div>
  );
}
