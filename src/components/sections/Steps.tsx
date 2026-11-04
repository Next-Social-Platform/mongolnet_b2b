"use client";

import { useEffect, useState } from "react";
import { scrollToElement } from "@/lib/scroll";

const STEPS = [1, 2, 3, 4];

function scrollToStep(n: number) {
  scrollToElement(`#step-${n}`, { offset: -156, duration: 1.5 });
}

export default function Steps() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".step-card");
    if (!cards.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.getAttribute("data-step")));
          }
        });
      },
      {
        root: null,
        rootMargin: "-400px 0px -50% 0px",
        threshold: [0, 0.1, 0.5, 1],
      },
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="how" className="py-[80px] md:py-[120px] lg:py-[156px]">
        <div className="main-container">
          <div className="flex flex-wrap items-start justify-center gap-y-[58px] lg:flex-nowrap lg:gap-x-[58px] lg:gap-y-0">
            <div className="top-[156px] max-w-[629px] space-y-5 lg:sticky">
              <span
                data-ns-animate=""
                data-delay="0.1"
                className="badge badge-ivory"
              >
                Хэрхэн ажилладаг вэ?
              </span>
              <div className="space-y-3">
                <h2 data-ns-animate="" data-delay="0.2" className="font-normal">
                  Нэвтрүүлэхэд <span className="text-ns-linen">хялбар,</span>{" "}
                  ашиглахад ойлгомжтой
                </h2>
                <p
                  data-ns-animate=""
                  data-delay="0.3"
                  className="text-tagline-1 text-secondary font-normal"
                >
                  Байгууллагын хэрэгцээг тодорхойлохоос эхлээд системийг
                  ашиглалтад оруулах хүртэлх үе шат бүрд хамтран ажиллана.
                </p>
              </div>
            </div>
            <div
              data-ns-animate=""
              data-delay="0.1"
              className="bg-ns-ivory sticky top-[156px] hidden h-[564px] w-px lg:block"
            />
            <div
              data-ns-animate=""
              data-delay="0.2"
              className="space-y-8 lg:space-y-60"
            >
              <div
                id="step-1"
                className="step-card bg-ns-ivory relative mx-auto w-[320px] shrink-0 overflow-hidden rounded-4xl p-6 sm:w-[350px] md:h-[456px] md:w-[400px] xl:w-[442px]"
                data-step="1"
              >
                <figure className="bg-ns-linen relative z-10 rounded-[20px] p-2">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/accent/02.webp"
                    alt="step 1"
                    className="size-full object-cover"
                    style={{
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    }}
                  />
                </figure>
                <div
                  className="pointer-events-none absolute bottom-[77px] left-1/2 z-30 h-[262px] w-[641px] -translate-x-1/2 rotate-180 md:bottom-[52px] xl:bottom-[22px]"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #ecfee7 37.44%)",
                  }}
                />
                <div className="relative z-33 mt-16 space-y-3 md:mt-14 lg:mt-6">
                  <h2 className="text-heading-5 lg:text-heading-4 font-normal">
                    Хэрэгцээг тодорхойлох
                  </h2>
                  <p className="text-tagline-2">
                    Байгууллагын бүтэц, гишүүнчлэл, шаардлагыг тодорхойлно.
                  </p>
                </div>
              </div>
              <div
                id="step-2"
                className="step-card bg-ns-ivory relative mx-auto w-[320px] shrink-0 overflow-hidden rounded-4xl p-6 sm:w-[350px] md:h-[456px] md:w-[400px] xl:w-[442px]"
                data-step="2"
              >
                <figure className="bg-ns-linen relative z-10 rounded-[20px] p-2">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/accent/01.webp"
                    alt="step 2"
                    style={{
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    }}
                    className="size-full object-cover"
                  />
                </figure>
                <div
                  className="pointer-events-none absolute bottom-[77px] left-1/2 z-30 h-[262px] w-[641px] -translate-x-1/2 rotate-180 md:bottom-[52px] xl:bottom-[22px]"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #ecfee7 37.44%)",
                  }}
                />
                <div className="relative z-33 mt-16 space-y-3 md:mt-14 lg:mt-6">
                  <h2 className="text-heading-5 lg:text-heading-4 font-normal">
                    Системийн тохиргоо
                  </h2>
                  <p className="text-tagline-2">
                    Байгууллагын мэдээлэл, бүтэц, гишүүдийн тохиргоог хийнэ.
                  </p>
                </div>
              </div>
              <div
                id="step-3"
                className="step-card bg-ns-ivory relative mx-auto w-[320px] shrink-0 overflow-hidden rounded-4xl p-6 sm:w-[350px] md:h-[456px] md:w-[400px] xl:w-[442px]"
                data-step="3"
              >
                <figure className="bg-ns-linen relative z-10 rounded-[20px] p-2">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/accent/03.webp"
                    alt="step 3"
                    className="size-full object-cover"
                  />
                </figure>
                <div
                  className="pointer-events-none absolute bottom-[77px] left-1/2 z-30 h-[262px] w-[641px] -translate-x-1/2 rotate-180 md:bottom-[52px] xl:bottom-[22px]"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #ecfee7 37.44%)",
                  }}
                />
                <div className="relative z-33 mt-16 space-y-3 md:mt-14 lg:mt-6">
                  <h2 className="text-heading-5 lg:text-heading-4 font-normal">
                    Сургалт
                  </h2>
                  <p className="text-tagline-2">
                    Админ болон хэрэглэгчдэд ашиглалтын сургалт өгнө.
                  </p>
                </div>
              </div>
              <div
                id="step-4"
                className="step-card bg-ns-ivory relative mx-auto w-[320px] shrink-0 overflow-hidden rounded-4xl p-6 sm:w-[350px] md:h-[456px] md:w-[400px] xl:w-[442px]"
                data-step="4"
              >
                <figure className="bg-ns-linen relative z-10 rounded-[20px] p-2">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/accent/04.webp"
                    alt="step 4"
                    className="size-full object-cover"
                  />
                </figure>
                <div
                  className="pointer-events-none absolute bottom-[77px] left-1/2 z-30 h-[262px] w-[641px] -translate-x-1/2 rotate-180 md:bottom-[52px] xl:bottom-[22px]"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #ecfee7 37.44%)",
                  }}
                />
                <div className="relative z-33 mt-16 space-y-3 md:mt-14 lg:mt-6">
                  <h2 className="text-heading-5 lg:text-heading-4 font-normal">
                    Ашиглалт, дэмжлэг
                  </h2>
                  <p className="text-tagline-2">
                    Системийг ашиглаж эхэлж, үйлчилгээний нөхцөлийн дагуу
                    техникийн дэмжлэг авна.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-ns-animate=""
              data-delay="0.3"
              className="top-[312px] ml-10 hidden flex-col gap-y-2 lg:sticky lg:top-[156px] lg:ml-0 lg:flex"
            >
              {STEPS.map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => scrollToStep(n)}
                  className={`step-number text-heading-6 flex h-15 w-[44px] cursor-pointer items-center justify-center rounded-full px-4 py-[15px] font-normal transition-colors duration-300 ease-in-out ${
                    active === n
                      ? "bg-ns-linen text-accent"
                      : "bg-ns-ivory text-secondary/40"
                  }`}
                  data-step-number={n}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
