interface SectionLabelProps {
  text: string;
  centered?: boolean;
}

export default function SectionLabel({ text, centered = false }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-2.5 ${centered ? 'justify-center' : ''}`}>
      <div className="h-1.5 w-1.5 rounded-full bg-green-accent" />
      <p className="text-overline uppercase text-gold tracking-[0.12em]">
        {text}
      </p>
    </div>
  );
}
