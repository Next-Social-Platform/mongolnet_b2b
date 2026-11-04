import type Lenis from "lenis";

// Lenis-ийн нэг instance. PageEffects үүсгэж, scroll-той холбоотой бүх газар ашиглана.
let instance: Lenis | null = null;

export function setLenis(lenis: Lenis | null) {
  instance = lenis;
}

export function getLenis() {
  return instance;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function scrollToElement(
  target: string,
  {
    offset = -100,
    duration = 1.7,
  }: { offset?: number; duration?: number } = {},
) {
  if (instance) {
    instance.scrollTo(target, { offset, duration, easing: easeOutCubic });
    return;
  }
  const el = document.querySelector(target);
  if (el) {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY + offset,
      behavior: "smooth",
    });
  }
}

export function scrollToTop({ duration = 1.7 }: { duration?: number } = {}) {
  if (instance) {
    instance.scrollTo(0, { duration, easing: easeOutCubic });
    return;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}
