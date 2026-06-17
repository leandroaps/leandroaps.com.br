export function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7B7B7B] mb-3">
      {n} — {label}
    </p>
  );
}

export function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full border border-[#7B7B7B]/25 text-[#7B7B7B]">
      {label}
    </span>
  );
}
