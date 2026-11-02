export function LinkedInButton({
  url,
  label,
  className = "",
}: {
  url: string;
  label: string;
  className?: string;
}) {
  return (
    <a
      href={`https://www.linkedin.com/in/leandroaps/details/${url}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 ${className}`}
    >
      {label}
    </a>
  );
}
