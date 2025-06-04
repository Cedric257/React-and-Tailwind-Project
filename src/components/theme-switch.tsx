import { useEffect } from "react";

export function ThemeSwitch() {
  useEffect(() => {
    function applySystemTheme() {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(isDark ? "dark" : "light");
    }
    applySystemTheme();

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", applySystemTheme);

    return () => {
      mq.removeEventListener("change", applySystemTheme);
    };
  }, []);

  return null;
}