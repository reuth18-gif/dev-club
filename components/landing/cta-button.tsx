import Link from "next/link";

export function CtaButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1.5 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:bg-forest-muted hover:shadow-md active:scale-[0.98] ${className}`}
    >
      {children}
    </Link>
  );
}
