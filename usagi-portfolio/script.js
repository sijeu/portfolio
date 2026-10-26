const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute(
    'aria-label',
    open ? 'Close navigation' : 'Open navigation',
  );
});

nav.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }),
);

document.querySelector('.theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const dark = document.body.classList.contains('dark');
  document.querySelector('.theme-toggle').textContent = dark ? '☾' : '☼';
  document.querySelector('meta[name="theme-color"]').content = dark
    ? '#25242a'
    : '#fff4d5';
  localStorage.setItem('usagi-theme', dark ? 'dark' : 'light');
});

if (localStorage.getItem('usagi-theme') === 'dark') {
  document.body.classList.add('dark');
  document.querySelector('.theme-toggle').textContent = '☾';
}

const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('.nav a')];
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((link) =>
          link.classList.toggle('active', link.hash === `#${entry.target.id}`),
        );
      }
    }),
  { rootMargin: '-30% 0px -60% 0px' },
);

sections.forEach((section) => observer.observe(section));