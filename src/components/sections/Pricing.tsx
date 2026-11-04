export default function Pricing() {
  return (
    <>
      <section id="pricing" className="py-[80px] md:py-[150px]">
        <div className="main-container">
          <div className="space-y-[70px]">
            <div className="space-y-7">
              <div className="space-y-5 text-center">
                <span
                  data-ns-animate=""
                  data-delay="0.1"
                  className="badge badge-ivory"
                >
                  Үнийн санал
                </span>
                <div className="space-y-3 text-center">
                  <h2
                    data-ns-animate=""
                    data-delay="0.2"
                    className="font-normal"
                  >
                    Танай байгууллагад
                    <br />
                    <span className="text-ns-linen">тохирсон</span> багц.
                  </h2>
                  <p
                    data-ns-animate=""
                    data-delay="0.3"
                    className="text-tagline-1 text-secondary font-normal"
                  >
                    Байгууллагын хэмжээ, гишүүдийн тоо,
                    <br />
                    хэрэгцээнд нийцсэн шийдлээ сонгоорой.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="mx-auto grid max-w-[920px] grid-cols-1 items-stretch gap-8 md:grid-cols-2">
                <div
                  data-ns-animate=""
                  data-delay="0.4"
                  data-instant=""
                  className="bg-ns-ivory flex-1 rounded-[20px] p-8 max-lg:w-full"
                >
                  <h3 className="text-heading-5 mb-2.5 font-normal">
                    Standard
                  </h3>
                  <p className="text-secondary/60 mb-6 max-w-[250px]">
                    Жижиг, дунд байгууллагад
                  </p>
                  <div className="mb-7">
                    <h4 className="text-heading-4 font-normal">26,400,000₮</h4>
                    <p className="text-secondary">
                      Тохиргооны нэг удаагийн төлбөр
                    </p>
                  </div>
                  <a
                    href="#"
                    className="btn btn-md btn-white hover:btn-secondary mb-8 block w-full text-center first-letter:uppercase before:content-none"
                  >
                    Үнийн санал авах
                  </a>
                  <p className="text-secondary mb-4 font-medium">
                    Багцад багтах боломжууд
                  </p>
                  <ul className="relative list-none space-y-2.5">
                    <li className="flex items-center gap-2.5">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0"
                      >
                        <rect
                          width="20"
                          height="20"
                          rx="10"
                          fill=""
                          className="fill-white"
                        />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          fill=""
                          className="fill-secondary/60"
                        />
                      </svg>{" "}
                      <span className="text-secondary text-tagline-1 font-normal">
                        Танилцуулга веб сайт
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0"
                      >
                        <rect
                          width="20"
                          height="20"
                          rx="10"
                          fill=""
                          className="fill-white"
                        />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          fill=""
                          className="fill-secondary/60"
                        />
                      </svg>{" "}
                      <span className="text-secondary text-tagline-1 font-normal">
                        iOS, Android гар утасны апп
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0"
                      >
                        <rect
                          width="20"
                          height="20"
                          rx="10"
                          fill=""
                          className="fill-white"
                        />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          fill=""
                          className="fill-secondary/60"
                        />
                      </svg>{" "}
                      <span className="text-secondary text-tagline-1 font-normal">
                        Нэгдсэн админ удирдлагын самбар
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0"
                      >
                        <rect
                          width="20"
                          height="20"
                          rx="10"
                          fill=""
                          className="fill-white"
                        />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          fill=""
                          className="fill-secondary/60"
                        />
                      </svg>{" "}
                      <span className="text-secondary text-tagline-1 font-normal">
                        Байгууллагын мэдээлэл, бүтэц
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0"
                      >
                        <rect
                          width="20"
                          height="20"
                          rx="10"
                          fill=""
                          className="fill-white"
                        />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          fill=""
                          className="fill-secondary/60"
                        />
                      </svg>{" "}
                      <span className="text-secondary text-tagline-1 font-normal">
                        Гишүүний бүртгэл, цахим үнэмлэх
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0"
                      >
                        <rect
                          width="20"
                          height="20"
                          rx="10"
                          fill=""
                          className="fill-white"
                        />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          fill=""
                          className="fill-secondary/60"
                        />
                      </svg>{" "}
                      <span className="text-secondary text-tagline-1 font-normal">
                        QR кодоор гишүүн баталгаажуулах
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0"
                      >
                        <rect
                          width="20"
                          height="20"
                          rx="10"
                          fill=""
                          className="fill-white"
                        />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          fill=""
                          className="fill-secondary/60"
                        />
                      </svg>{" "}
                      <span className="text-secondary text-tagline-1 font-normal">
                        Гишүүнчлэлийн татвар, төлбөр, хураамж
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0"
                      >
                        <rect
                          width="20"
                          height="20"
                          rx="10"
                          fill=""
                          className="fill-white"
                        />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          fill=""
                          className="fill-secondary/60"
                        />
                      </svg>{" "}
                      <span className="text-secondary text-tagline-1 font-normal">
                        Мэдээ, мэдээлэл, мэдэгдэл
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0"
                      >
                        <rect
                          width="20"
                          height="20"
                          rx="10"
                          fill=""
                          className="fill-white"
                        />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          fill=""
                          className="fill-secondary/60"
                        />
                      </svg>{" "}
                      <span className="text-secondary text-tagline-1 font-normal">
                        Чат, групп чат
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0"
                      >
                        <rect
                          width="20"
                          height="20"
                          rx="10"
                          fill=""
                          className="fill-white"
                        />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          fill=""
                          className="fill-secondary/60"
                        />
                      </svg>{" "}
                      <span className="text-secondary text-tagline-1 font-normal">
                        Нийтлэл, өрөө, санал асуулга, файл сан
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0"
                      >
                        <rect
                          width="20"
                          height="20"
                          rx="10"
                          fill=""
                          className="fill-white"
                        />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          fill=""
                          className="fill-secondary/60"
                        />
                      </svg>{" "}
                      <span className="text-secondary text-tagline-1 font-normal">
                        Арга хэмжээ, календарь, ирц
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0"
                      >
                        <rect
                          width="20"
                          height="20"
                          rx="10"
                          fill=""
                          className="fill-white"
                        />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          fill=""
                          className="fill-secondary/60"
                        />
                      </svg>{" "}
                      <span className="text-secondary text-tagline-1 font-normal">
                        Стандарт серверийн багтаамж
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0"
                      >
                        <rect
                          width="20"
                          height="20"
                          rx="10"
                          fill=""
                          className="fill-white"
                        />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          fill=""
                          className="fill-secondary/60"
                        />
                      </svg>{" "}
                      <span className="text-secondary text-tagline-1 font-normal">
                        Субдомэйн
                      </span>
                    </li>
                  </ul>
                </div>
                <div
                  data-ns-animate=""
                  data-delay="0.5"
                  data-instant=""
                  className="flex flex-1 rounded-[20px] bg-cover bg-center bg-no-repeat p-2.5 max-lg:w-full"
                  style={{ backgroundImage: "url('/images/ns-img-25.webp')" }}
                >
                  <div className="flex-1 rounded-[12px] bg-white p-8">
                    <h3 className="text-heading-5 mb-2.5 font-normal">Pro</h3>
                    <p className="text-secondary/60 mb-6">
                      Идэвхтэй гишүүнчлэлтэй байгууллагад
                    </p>
                    <div className="mb-7">
                      <h4 className="text-heading-4 font-normal">
                        45,600,000₮
                      </h4>
                      <p className="text-secondary">
                        Тохиргооны нэг удаагийн төлбөр
                      </p>
                    </div>
                    <a
                      href="#"
                      className="btn btn-md btn-secondary hover:btn-primary mb-8 block w-full text-center first-letter:uppercase before:content-none"
                    >
                      Үнийн санал авах
                    </a>
                    <p className="text-secondary mb-4 font-medium">
                      Багцад багтах боломжууд
                    </p>
                    <ul className="relative list-none space-y-2.5">
                      <li className="flex items-center gap-2.5">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0"
                        >
                          <rect
                            width="20"
                            height="20"
                            rx="10"
                            fill=""
                            className="fill-secondary"
                          />
                          <path
                            d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                            fill=""
                            className="fill-white"
                          />
                        </svg>{" "}
                        <span className="text-secondary text-tagline-1 font-normal">
                          Standard багцын бүх боломж
                        </span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0"
                        >
                          <rect
                            width="20"
                            height="20"
                            rx="10"
                            fill=""
                            className="fill-secondary"
                          />
                          <path
                            d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                            fill=""
                            className="fill-white"
                          />
                        </svg>{" "}
                        <span className="text-secondary text-tagline-1 font-normal">
                          ДАН / ХУР нэвтрэлт, баталгаажуулалт
                        </span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0"
                        >
                          <rect
                            width="20"
                            height="20"
                            rx="10"
                            fill=""
                            className="fill-secondary"
                          />
                          <path
                            d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                            fill=""
                            className="fill-white"
                          />
                        </svg>{" "}
                        <span className="text-secondary text-tagline-1 font-normal">
                          SMS мэдэгдэл
                        </span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0"
                        >
                          <rect
                            width="20"
                            height="20"
                            rx="10"
                            fill=""
                            className="fill-secondary"
                          />
                          <path
                            d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                            fill=""
                            className="fill-white"
                          />
                        </svg>{" "}
                        <span className="text-secondary text-tagline-1 font-normal">
                          Баннер сурталчилгаа
                        </span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0"
                        >
                          <rect
                            width="20"
                            height="20"
                            rx="10"
                            fill=""
                            className="fill-secondary"
                          />
                          <path
                            d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                            fill=""
                            className="fill-white"
                          />
                        </svg>{" "}
                        <span className="text-secondary text-tagline-1 font-normal">
                          Гишүүний хямдрал
                        </span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0"
                        >
                          <rect
                            width="20"
                            height="20"
                            rx="10"
                            fill=""
                            className="fill-secondary"
                          />
                          <path
                            d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                            fill=""
                            className="fill-white"
                          />
                        </svg>{" "}
                        <span className="text-secondary text-tagline-1 font-normal">
                          Богино видео, контент
                        </span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0"
                        >
                          <rect
                            width="20"
                            height="20"
                            rx="10"
                            fill=""
                            className="fill-secondary"
                          />
                          <path
                            d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                            fill=""
                            className="fill-white"
                          />
                        </svg>{" "}
                        <span className="text-secondary text-tagline-1 font-normal">
                          Хандивын сан
                        </span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0"
                        >
                          <rect
                            width="20"
                            height="20"
                            rx="10"
                            fill=""
                            className="fill-secondary"
                          />
                          <path
                            d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                            fill=""
                            className="fill-white"
                          />
                        </svg>{" "}
                        <span className="text-secondary text-tagline-1 font-normal">
                          Өргөтгөсөн серверийн багтаамж
                        </span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0"
                        >
                          <rect
                            width="20"
                            height="20"
                            rx="10"
                            fill=""
                            className="fill-secondary"
                          />
                          <path
                            d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                            fill=""
                            className="fill-white"
                          />
                        </svg>{" "}
                        <span className="text-secondary text-tagline-1 font-normal">
                          Тусдаа домэйн
                        </span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0"
                        >
                          <rect
                            width="20"
                            height="20"
                            rx="10"
                            fill=""
                            className="fill-secondary"
                          />
                          <path
                            d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                            fill=""
                            className="fill-white"
                          />
                        </svg>{" "}
                        <span className="text-secondary text-tagline-1 font-normal">
                          Шинэ боломжуудад эрт хандах эрх
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
