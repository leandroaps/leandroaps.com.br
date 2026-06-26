export function LinkedInButton({ url, className = "" }: { url: string; className?: string }) {
  return (
    <a
      href={`https://www.linkedin.com/in/leandroaps/details/${url}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-xs text-[#7B7B7B] hover:text-[#222222] transition-colors duration-300 ${className}`}
    >
      See on LinkedIn →
    </a>
  );
}
