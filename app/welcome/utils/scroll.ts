export function scrollToSection(href: string) {
  const el = document.querySelector(href);
  if (!el) return;
  const top = (el as HTMLElement).offsetTop - 80;
  window.scrollTo({ top, behavior: "smooth" });
}
