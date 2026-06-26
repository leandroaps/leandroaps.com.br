export function Tag({ label, className = "" }: { label: string; className?: string }) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full border border-[#7B7B7B]/25 text-[#7B7B7B] transition-colors duration-300 ${className}`}
    >
      {label}
    </span>
  );
}
