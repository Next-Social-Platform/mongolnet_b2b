'use client';

import { useState } from 'react';

export type ProjectCard = {
  /** Жижиг шошго (төслийн нэр) */
  label: string;
  /** Том гарчиг (төслийн товч тайлбар) */
  title: string;
  /** Картын зураг (public/ доторх зам). Хоосон бол градиент суурь харагдана. */
  image?: string;
};

// Том дэлгэц дээр хулганаа аваачсан карт өргөсөж, бусад нь нарийсна. Жижиг дэлгэц дээр бүх карт задгай.
export default function ProjectCards({ cards }: { cards: ProjectCard[] }) {
  const [active, setActive] = useState(0);

  return (
    <div data-ns-animate="" data-delay="0.5">
      <div
        data-process-expand=""
        className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:items-center lg:justify-center gap-6"
      >
        {cards.map((card, i) => (
          <div
            key={card.label}
            data-process-expand-card=""
            data-active={active === i ? '' : undefined}
            data-has-image={card.image ? '' : undefined}
            tabIndex={0}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            className="w-full lg:w-auto lg:flex-[1_1_0%] lg:data-active:flex-[1.393_1_0%] transition-all duration-800 ease-out h-125 xl:h-135 rounded-xl overflow-hidden group/process-card p-6 relative outline-none"
          >
            <figure className="size-full absolute opacity-100 transition-opacity duration-900 ease-out top-0 left-0">
              {card.image ? (
                <img src={card.image} alt={card.label} className="size-full object-cover" />
              ) : (
                <div
                  aria-hidden="true"
                  className="project-card-bg size-full bg-[linear-gradient(135deg,#170f2a_0%,#1f5a26_55%,#4ce233_100%)]"
                />
              )}
            </figure>
            <div className="project-card-overlay size-full absolute opacity-100 transition-opacity duration-900 ease-out inset-0 bg-linear-to-t from-black to-transparent to-55%"></div>
            <div data-process-content="" className="space-y-3 absolute z-30 transition-transform duration-900 ease-out">
              <span className="block text-accent">
                {card.label}
              </span>
              <h3 className="w-62.5 transition-all duration-500 ease-out text-accent font-medium text-heading-6 md:text-heading-5 font-inter-tight">
                {card.title}
              </h3>
            </div>
            <h3 className="text-accent transition-colors duration-500 ease-out absolute bottom-6 right-6 text-heading-4 md:text-heading-3 lg:text-heading-2 font-inter-tight">
              .{String(i + 1).padStart(2, '0')}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
