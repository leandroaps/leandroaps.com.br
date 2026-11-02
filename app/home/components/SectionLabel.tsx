export function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">
      {n} — {label}
    </p>
  );
}
