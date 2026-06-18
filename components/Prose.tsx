export default function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-neutral max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-ink prose-h2:mt-12 prose-h2:text-2xl prose-a:text-accent prose-strong:text-ink">
      {children}
    </div>
  );
}
