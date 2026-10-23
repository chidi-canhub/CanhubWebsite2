import Link from "next/link";

type ButtonVariant = "primary" | "secondary";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-accent)]";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--brand-accent)] text-white shadow-[0_12px_30px_rgba(43,93,80,0.18)] hover:-translate-y-0.5 hover:bg-[var(--brand-accent-deep)]",
  secondary:
    "border border-[var(--brand-border)] bg-white text-[var(--brand-ink)] hover:-translate-y-0.5 hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const sharedClasses = `${baseClasses} ${variants[variant]} ${className}`.trim();

  if (href.startsWith("#")) {
    return (
      <a href={href} className={sharedClasses}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={sharedClasses}>
      {children}
    </Link>
  );
}
