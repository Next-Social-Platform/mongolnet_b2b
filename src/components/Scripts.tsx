'use client';

import { useEffect } from 'react';

// The template's animations / menus / sliders are plain JavaScript (GSAP, Lenis, Swiper ... + main.js) that works on the DOM.
// It is loaded once, in the browser, AFTER React has hydrated the page, so React and the scripts never fight over the markup.
// Pages are linked with normal <a href> (full page loads), so the scripts initialise fresh on every page.
const SCRIPTS = [
  '/assets/runtimes/modern/vendor/swiper.min.js',
  '/assets/runtimes/modern/vendor/leaflet.min.js',
  '/assets/runtimes/modern/vendor/vanilla-infinite-marquee.min.js',
  '/assets/runtimes/modern/vendor/split-text.min.js',
  '/assets/runtimes/modern/vendor/gsap.min.js',
  '/assets/runtimes/modern/vendor/scroll-trigger.min.js',
  '/assets/runtimes/modern/vendor/draw-svg.min.js',
  '/assets/runtimes/modern/vendor/motionpathplugin.min.js',
  '/assets/runtimes/modern/vendor/lenis.min.js',
  '/assets/runtimes/modern/vendor/springer.min.js',
  '/assets/runtimes/modern/vendor/number-counter.js',
  '/assets/runtimes/modern/vendor/stack-card.min.js',
  '/assets/runtimes/modern/main.js',
  '/reveal.js',
  '/site-nav.js', // must be registered before main.js's DOMContentLoaded handlers run
];

function load(src: string) {
  return new Promise<void>((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.async = false;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Failed to load ' + src));
    document.body.appendChild(s);
  });
}

export default function Scripts() {
  useEffect(() => {
    const w = window as unknown as { __siteScripts?: boolean };
    if (w.__siteScripts) return; // React strict mode runs effects twice in dev
    w.__siteScripts = true;
    (async () => {
      for (const src of SCRIPTS) await load(src);
      // the scripts were added after the page had loaded: run the handlers they registered for DOMContentLoaded
      document.dispatchEvent(new Event('DOMContentLoaded', { bubbles: true, cancelable: true }));
    })().catch(console.error);
  }, []);
  return null;
}
