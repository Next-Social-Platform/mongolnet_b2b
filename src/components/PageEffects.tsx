"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import InfiniteMarquee from "vanilla-infinite-marquee";
import springerPkg from "springer";
import { setLenis } from "@/lib/scroll";

const springer =
  typeof springerPkg === "function" ? springerPkg : springerPkg.default;

type MarqueeOptions = ConstructorParameters<typeof InfiniteMarquee>[0];

// Анхны template-ийн тохиргоотой яг ижил (gap-ийг сан өөрөө default-аар нь авна).
const MARQUEES: MarqueeOptions[] = [
  {
    element: ".top-nav-marquee",
    speed: 7e4,
    smoothEdges: true,
    pauseOnHover: true,
    direction: "left",
    duplicateCount: 2,
    mobileSettings: { direction: "left", speed: 5e4 },
  },
  {
    element: ".logos-marquee-container",
    speed: 4e4,
    smoothEdges: true,
    direction: "left",
    duplicateCount: 1,
    // 3 logo 500px-ээс дээш өргөнд хөдөлгөөнгүй харагдаж, нарийн дэлгэцэд л гүйнэ.
    breakpointSize: 499,
    destroyOnDesktop: true,
    mobileSettings: { direction: "top", speed: 5e4 },
  },
  {
    element: ".cards-marquee-container",
    speed: 14e4,
    smoothEdges: true,
    direction: "left",
    pauseOnHover: false,
  },
];

function initMarquees() {
  // StrictMode-д effect хоёр удаа ажиллахад marquee давхар клон хийхээс сэргийлнэ.
  MARQUEES.forEach((options) => {
    const el = document.querySelector<HTMLElement>(options.element as string);
    if (!el || el.dataset.marqueeReady) return;
    el.dataset.marqueeReady = "true";
    // Селекторын оронд элементийг шууд өгнө: сан destroy хийхдээ массивыг дэмждэггүй.
    new InfiniteMarquee({ ...options, element: el });
  });
}

function initTypewriter() {
  const text = document.querySelector<HTMLElement>(".typewriter-text");
  const container = document.querySelector<HTMLElement>(
    ".typewriter-text-container",
  );
  if (!text || !container) return;

  const split = new SplitText(text, { type: "chars", tag: "span" });
  gsap.set(split.chars, { opacity: 0 });

  const tl = gsap.timeline({
    scrollTrigger: { trigger: container, start: "top 80%", once: true },
  });
  const charDelay = 3 / split.chars.length;
  split.chars.forEach((char, index) => {
    tl.to(char, { opacity: 1, duration: 0.01 }, index * charDelay);
  });
}

function initFooterDivider() {
  const divider = document.querySelector(".footer-divider");
  if (!divider) return;
  gsap.to(divider, {
    scrollTrigger: {
      trigger: divider,
      start: "top 100%",
      end: "top 50%",
      scrub: false,
      toggleActions: "play none none none",
    },
    width: "100%",
    duration: 1,
    delay: 0.7,
    ease: "power2.out",
  });
}

function initWaves() {
  document
    .querySelectorAll("#voice-wave-svg .wave-path")
    .forEach((path, index) => {
      gsap.to(path, {
        y: -(4 + index * 0.5),
        duration: 1.2 + index * 0.1,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.15,
      });
    });
}

function initReveal() {
  const spring = springer(0.2, 0.8);

  document.querySelectorAll<HTMLElement>("[data-ns-animate]").forEach((el) => {
    const attr = (name: string) => el.getAttribute(name);
    const duration = attr("data-duration")
      ? parseFloat(attr("data-duration")!)
      : 0.6;
    const delay = attr("data-delay") ? parseFloat(attr("data-delay")!) : 0;
    const offset = attr("data-offset") ? parseFloat(attr("data-offset")!) : 60;
    const instant =
      el.hasAttribute("data-instant") && attr("data-instant") !== "false";
    const start = attr("data-start") || "top 90%";
    const end = attr("data-end") || "top 50%";
    const direction = attr("data-direction") || "down";
    const ease = el.hasAttribute("data-spring") ? spring : "power2.out";
    const rotation = attr("data-rotation")
      ? parseFloat(attr("data-rotation")!)
      : 0;
    const type = attr("data-animation-type") || "from";

    el.style.opacity = "1";
    el.style.filter = "blur(0)";

    const vars: gsap.TweenVars = {
      opacity: type === "to" ? 1 : 0,
      filter: type === "to" ? "blur(0)" : "blur(16px)",
      duration,
      delay,
      ease,
    };
    if (rotation !== 0) vars.rotation = rotation;
    if (!instant) {
      vars.scrollTrigger = { trigger: el, start, end, scrub: false };
    }
    switch (direction) {
      case "left":
        vars.x = -offset;
        break;
      case "right":
        vars.x = offset;
        break;
      case "down":
        vars.y = offset;
        break;
      default:
        vars.y = -offset;
    }

    if (type === "to") gsap.to(el, vars);
    else gsap.from(el, vars);
  });
}

function initLenis() {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    ) ||
    window.innerWidth <= 768 ||
    "ontouchstart" in window;
  if (isMobile) return () => {};

  const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  const raf = (time: number) => lenis.raf(time * 1e3);
  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);
  setLenis(lenis);

  return () => {
    gsap.ticker.remove(raf);
    lenis.destroy();
    setLenis(null);
  };
}

/** Хуудасны бүх animation-ыг (reveal, marquee, typewriter, smooth scroll) асаана. */
export default function PageEffects() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    initMarquees();
    const ctx = gsap.context(() => {
      initFooterDivider();
      initTypewriter();
      initWaves();
      initReveal();
    });
    const destroyLenis = initLenis();

    return () => {
      destroyLenis();
      ctx.revert();
    };
  }, []);

  return null;
}
