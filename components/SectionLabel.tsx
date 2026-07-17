type Props = {
  index?: string;
  children: React.ReactNode;
};

export default function SectionLabel({ index, children }: Props) {
  return (
    <p className="label mb-4 flex items-center gap-3">
      {index ? <span className="text-brass">{index}</span> : null}
      <span>{children}</span>
    </p>
  );
}
