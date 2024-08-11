const theme = localStorage.getItem('theme');
const browserDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (theme !== null) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
} else if (browserDark) {
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
}