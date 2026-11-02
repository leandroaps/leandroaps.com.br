// Light/dark theme. Dark ("Noite suave") is the default; the user's choice is
// stored in localStorage and applied as <html data-theme="light"> by
// THEME_INIT_SCRIPT before first paint (see root.tsx), so there is no flash.
export const THEME_STORAGE_KEY = "theme";

export const THEME_INIT_SCRIPT = `try{if(localStorage.getItem("${THEME_STORAGE_KEY}")==="light")document.documentElement.dataset.theme="light"}catch(e){}`;

export function toggleTheme() {
  const root = document.documentElement;
  const next = root.dataset.theme === "light" ? "dark" : "light";
  if (next === "light") root.dataset.theme = "light";
  else delete root.dataset.theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    // storage unavailable (private mode) — the toggle still works for this page view
  }
}
