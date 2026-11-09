import ProjectCards, { type ProjectCard } from './ProjectCards';

// Зургийг public/img/ дотор хадгалаад төсөл бүрт image: '/img/xxx.webp' гэж бичнэ.
const PROJECTS: ProjectCard[] = [
  { label: 'Bid98', title: 'Төгсөгчдийн нэгдсэн холбоо ТББ', image: '/img/03.webp' },
  { label: 'Enam', title: 'МАН-ын гишүүнчлэл, удирдлагын систем', image: '/img/01.webp' },
  { label: 'Echat', title: 'E-Mongolia Үндэсний чат', image: '/img/02.webp' },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-[80px] md:py-[120px] lg:py-[156px]"
      aria-label="Хэрэгжүүлсэн төслүүд"
    >
      <div className="main-container">
        <div className="text-center mb-14 md:mb-[70px]">
          <span data-ns-animate="" data-delay="0.3" className="badge badge-green mb-3.5 md:mb-5">
            Хэрэгжүүлсэн төсөл
          </span>
          <h2 data-ns-animate="" data-delay="0.4" className="mb-3">
            Бидний хэрэгжүүлсэн <span className="text-primary-500 inline-block">төслүүд</span>
          </h2>
          <p data-ns-animate="" data-delay="0.5" className="max-w-[738px] mx-auto">
            Холбоо, нийгэмлэг, улс төрийн нам, гишүүнчлэлтэй байгууллагуудад зориулан хэрэгжүүлсэн төслүүд болон
            системийн шийдлүүдтэй танилцаарай.
          </p>
        </div>
        <ProjectCards cards={PROJECTS} />
      </div>
    </section>
  );
}
