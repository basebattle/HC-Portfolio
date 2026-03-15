interface SectionLabelProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export default function SectionLabel({
  children,
  color = "#00BFA5",
  className = "",
}: SectionLabelProps) {
  return (
    <span
      className={`text-xs font-semibold tracking-[0.18em] uppercase ${className}`}
      style={{ color, fontFamily: "var(--font-dm-sans)" }}
    >
      {children}
    </span>
  );
}
