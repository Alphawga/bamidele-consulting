import Link from "next/link";

type Props = {
  children?: React.ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
  href?: string;
};

export default function BookButton({
  children = "Take the audit",
  variant = "solid",
  className = "",
  href = "/audit",
}: Props) {
  const base =
    "inline-flex items-center px-5 py-3 font-mono text-sm font-medium uppercase tracking-label transition-colors";
  const styles =
    variant === "solid"
      ? "bg-brass text-ink hover:bg-paper"
      : "border border-steel text-paper hover:border-brass hover:text-brass";
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
