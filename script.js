// Menú móvil
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
const setMenu = open => {
  menu.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open);
  toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
};
toggle.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

// Aparición suave al hacer scroll
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  }), { threshold: .1 });
  items.forEach(el => io.observe(el));
} else {
  items.forEach(el => el.classList.add('visible'));
}

// Año del footer
document.getElementById('year').textContent = new Date().getFullYear();

// Tema claro / oscuro
const root = document.documentElement;
const themeBtn = document.querySelector('.theme-toggle');
const themeMeta = document.querySelector('meta[name="theme-color"]');
const applyTheme = (t, save) => {
  root.dataset.theme = t;
  themeBtn.setAttribute('aria-pressed', t === 'dark');
  themeMeta.content = t === 'dark' ? '#141110' : '#FBF7F4';
  if (save) { try { localStorage.setItem('tema', t); } catch (e) {} }
};
applyTheme(root.dataset.theme === 'dark' ? 'dark' : 'light', false);
themeBtn.addEventListener('click', () => applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true));
// Si la persona no eligió tema, seguir el del sistema
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  let saved = null; try { saved = localStorage.getItem('tema'); } catch (_) {}
  if (!saved) applyTheme(e.matches ? 'dark' : 'light', false);
});
