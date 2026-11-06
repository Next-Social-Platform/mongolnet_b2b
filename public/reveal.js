/* Safety net: some sections ship "hidden until JS reveals me" hooks that belong to a different JS runtime than the
   one the page loaded. If such an element is on screen and still invisible after a grace period, show it. */
(function () {
  var HOOKS = '[data-ns-animate],[data-ns-avatar],[data-text-reveal],[data-opai-animate],[data-opai-split-text],[data-opai-avatar],.globe-image,[data-mini-prompt-form]';
  function hidden(el) { var s = getComputedStyle(el); return s.opacity === '0' || s.visibility === 'hidden'; }
  function show(el) {
    el.style.setProperty('transition', 'opacity .6s ease', 'important');
    el.style.setProperty('opacity', '1', 'important');
    el.style.setProperty('visibility', 'visible', 'important');
  }
  function start() {
    if (!('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target; io.unobserve(el);
        setTimeout(function () { if (hidden(el)) show(el); }, 1800);
      });
    }, { threshold: 0.1 });
    document.querySelectorAll(HOOKS).forEach(function (el) { io.observe(el); });
  }
  if (document.readyState === 'complete') setTimeout(start, 600); else window.addEventListener('load', function () { setTimeout(start, 600); });
})();
