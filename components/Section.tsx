type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function Section({ children, className = "", id }: Props) {
  return (
    <section id={id} className={`mx-auto max-w-page px-5 py-16 sm:py-20 ${className}`}>
      {children}
    </section>
  );
}
