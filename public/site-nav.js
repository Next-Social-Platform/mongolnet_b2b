// In-page navigation helpers (generated from the static site: in-page links, mobile dropdown, scroll-spy)
// In-page links of the header (menu, logo, mobile sidebar) and the footer's "back to top" arrow.
// Desktop uses the template's smooth scroll (Lenis) as it is. Without Lenis (phones) the template's handler cannot scroll
// (it is cancelled by its own scrollBy, and the open sidebar locks the page), so this handler closes the sidebar first and
// then scrolls smoothly, leaving 100px for the fixed header.
(function () {
  document.querySelectorAll('header a[href^="#"], footer a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var inSidebar = !!a.closest('aside.sidebar');
      if (!inSidebar && window.lenis) return;   // desktop: the template handles it
      var id = a.getAttribute('href');
      var target = id.length > 1 ? document.querySelector(id) : null;
      if (!target) return;
      e.preventDefault(); e.stopImmediatePropagation();
      if (inSidebar) { var close = document.querySelector('.nav-hamburger-close'); if (close) close.click(); }
      setTimeout(function () {
        window.scrollTo({ top: Math.max(0, target.getBoundingClientRect().top + window.pageYOffset - 100), behavior: 'smooth' });
      }, inSidebar ? 350 : 0);
    });
  });
})();

// Scroll-spy: the menu item of the section that is currently under the header gets the "is-active" border.
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('header a.lenis-scroll-to[href^="#"], aside.sidebar a[href^="#"]'));
  var sections = [];
  links.forEach(function (a) { var id = a.getAttribute('href').slice(1); var el = id && id !== 'top' && document.getElementById(id); if (el && sections.indexOf(el) < 0) sections.push(el); });
  // sections that are not in the menu (e.g. #pricing) still end the previous item's range
  ['pricing'].forEach(function (id) { var el = document.getElementById(id); if (el && sections.indexOf(el) < 0) sections.push(el); });
  sections.sort(function (a, b) { return a.offsetTop - b.offsetTop; });
  var line = 140;   // px from the top of the viewport (fixed header + a little)
  var current = null, ticking = false;
  function update() {
    ticking = false;
    var active = null;
    sections.forEach(function (el) { var r = el.getBoundingClientRect(); if (r.top <= line && r.bottom > line) active = el; });
    var id = active ? active.id : null;
    if (id === current) return;
    current = id;
    links.forEach(function (a) { a.classList.toggle('is-active', !!id && a.getAttribute('href') === '#' + id); });
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();

// Mobile dropdown menu: the hamburger toggles it (the template's own handler can only open), a click outside or Esc closes it.
(function () {
  var burger = document.querySelector('.nav-hamburger');
  var menu = document.querySelector('aside.sidebar');
  var close = document.querySelector('.nav-hamburger-close');
  if (!burger || !menu || !close) return;
  burger.addEventListener('click', function (e) {
    if (menu.classList.contains('show-sidebar')) { e.stopImmediatePropagation(); close.click(); }
  }, true);   // capture: must run before the template's handler, which adds the class again
  document.addEventListener('click', function (e) {
    if (menu.classList.contains('show-sidebar') && !menu.contains(e.target) && !burger.contains(e.target)) close.click();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menu.classList.contains('show-sidebar')) close.click(); });
  // the hamburger turns into an X while the menu is open (however it was opened / closed)
  function sync() { burger.classList.toggle('is-open', menu.classList.contains('show-sidebar')); burger.setAttribute('aria-expanded', menu.classList.contains('show-sidebar')); }
  new MutationObserver(sync).observe(menu, { attributes: true, attributeFilter: ['class'] });
  sync();
})();
