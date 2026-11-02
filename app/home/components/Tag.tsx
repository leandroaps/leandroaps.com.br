export function Tag({ label, className = "" }: { label: string; className?: string }) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full border border-border text-muted-foreground transition-colors duration-300 ${className}`}
    >
      {label}
    </span>
  );
}
