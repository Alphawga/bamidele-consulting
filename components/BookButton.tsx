import Link from "next/link";

type Props = {
  children?: React.ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
};

export default function BookButton({
  children = "Book a call",
  variant = "solid",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center gap-2 rounded-sm px-5 py-3 text-sm font-medium transition-colors";
  const styles =
    variant === "solid"
      ? "bg-accent text-paper hover:bg-accent-ink"
      : "border border-ink/20 text-ink hover:border-accent hover:text-accent";
  return (
    <Link href="/book" className={`${base} ${styles} ${className}`}>
      <span aria-hidden className="font-mono">▸</span>
      {children}
    </Link>
  );
}
