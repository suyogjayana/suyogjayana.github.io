// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Light/dark toggle. Follows the device setting until you click; your choice is remembered.
const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");
const isDark = () =>
  root.dataset.theme
    ? root.dataset.theme === "dark"
    : window.matchMedia("(prefers-color-scheme: dark)").matches;

try {
  const saved = localStorage.getItem("theme");
  if (saved) root.dataset.theme = saved;
} catch (e) {}
updateLabel();

toggle.addEventListener("click", () => {
  root.dataset.theme = isDark() ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  updateLabel();
});

function updateLabel() {
  toggle.textContent = isDark() ? "Light" : "Dark";
}
