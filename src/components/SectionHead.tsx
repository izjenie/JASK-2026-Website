import SectionLabel from '@/components/SectionLabel';

interface SectionHeadProps {
  eyebrow: string;
  title: string;
  side?: string;
  onDark?: boolean;
}

export default function SectionHead({ eyebrow, title, side, onDark = false }: SectionHeadProps) {
  return (
    <div
      className={`mb-16 flex flex-col gap-5 border-b pb-11 md:flex-row md:items-end md:justify-between md:gap-10 ${
        onDark ? 'border-cream/15' : 'border-line'
      }`}
    >
      <div>
        <SectionLabel text={eyebrow} onDark={onDark} />
        <h2
          className={`font-serif text-[clamp(30px,3.6vw,46px)] font-semibold leading-[1.15] tracking-tight ${
            onDark ? 'text-cream' : 'text-ink'
          }`}
        >
          {title}
        </h2>
      </div>
      {side ? (
        <p className={`max-w-[320px] text-[15px] leading-[1.65] ${onDark ? 'text-[#9AA3B2]' : 'text-ink-soft'}`}>
          {side}
        </p>
      ) : null}
    </div>
  );
}
