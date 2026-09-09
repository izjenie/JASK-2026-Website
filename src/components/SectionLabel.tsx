interface SectionLabelProps {
  text: string;
  centered?: boolean;
  onDark?: boolean;
}

export default function SectionLabel({ text, centered = false, onDark = false }: SectionLabelProps) {
  return (
    <div className={`eyebrow ${centered ? 'justify-center' : ''} ${onDark ? '!text-gold' : '!text-gold-deep'}`}>
      {text}
    </div>
  );
}
