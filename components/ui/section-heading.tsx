type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)]">
        {label}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--brand-ink)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[var(--brand-muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
