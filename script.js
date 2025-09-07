// Dark mode toggle with system preference + localStorage
const toggleBtn = document.getElementById("darkToggle");

// Load saved theme or system preference
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  toggleBtn.textContent = "☀️";
} else {
  document.documentElement.classList.remove("dark");
  toggleBtn.textContent = "🌙";
}

// Toggle button click
toggleBtn.addEventListener("click", () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    toggleBtn.textContent = "🌙";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    toggleBtn.textContent = "☀️";
  }
});