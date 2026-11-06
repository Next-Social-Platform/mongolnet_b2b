export default function Hero() {
  return (
    <div data-theme="app-builder" style={{ display: "contents" }}>
      <section className="pt-[150px] md:pt-[190px] lg:pt-[230px] overflow-hidden relative">
        <div className="absolute top-20 z-[-1] left-1/2 -translate-x-1/2" data-ns-animate="" data-delay="0.3" data-offset="20">
          <img src="/assets/img/92759ec22d12.png" alt="Hero background pattern" className="dark:hidden" />
          {" "}
          <img src="/assets/img/73fe06e47d81.png" alt="Hero background pattern" className="hidden dark:inline-block" />
        </div>
        <div className="main-container relative z-10">
          <div className="flex flex-col items-center justify-center mb-14">
            <div className="max-w-[1075px] mb-14 space-y-4 w-full mx-auto text-center">
              <div>
                <span data-ns-animate="" data-delay="0.1" className="badge badge-green">
                  БАЙГУУЛЛАГЫН ГИШҮҮНЧЛЭЛИЙН НЭГДСЭН ПЛАТФОРМ
                </span>
              </div>
              <h1 data-ns-animate="" data-delay="0.2" style={{ fontWeight: "600" }}>
                Бүх гишүүнчлэлээ{" "}
                <span className="text-primary-500">
                  нэг платформоос
                </span>
                {" "}удирд
              </h1>
              <p data-ns-animate="" data-delay="0.3" className="max-w-[650px] mx-auto">
                Гишүүдийн бүртгэл, байгууллагын бүтэц, төлбөр тооцоо, коммюнити, арга хэмжээг нэг системд нэгтгэж, өдөр тутмын ажлаа илүү хялбар, үр дүнтэй зохион байгуулаарай.
              </p>
              <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-9">
                <li data-ns-animate="" data-delay="0.3" className="flex items-center gap-1.5">
                  <span className="bg-secondary dark:bg-accent flex size-[18px] shrink-0 items-center justify-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none" className="shrink-0">
                      <path d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z" className="dark:fill-secondary fill-white" />
                    </svg>
                  </span>
                  {" "}
                  <span className="text-secondary/60 text-tagline-2 dark:text-accent/60">
                    Вэб сайт
                  </span>
                </li>
                <li data-ns-animate="" data-delay="0.4" className="flex items-center gap-1.5">
                  <span className="bg-secondary dark:bg-accent flex size-[18px] shrink-0 items-center justify-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none" className="shrink-0">
                      <path d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z" className="dark:fill-secondary fill-white" />
                    </svg>
                  </span>
                  {" "}
                  <span className="text-secondary/60 text-tagline-2 dark:text-accent/60">
                    Мобайл апп
                  </span>
                </li>
                <li data-ns-animate="" data-delay="0.5" className="flex items-center gap-1.5">
                  <span className="bg-secondary dark:bg-accent flex size-[18px] shrink-0 items-center justify-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none" className="shrink-0">
                      <path d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z" className="dark:fill-secondary fill-white" />
                    </svg>
                  </span>
                  {" "}
                  <span className="text-secondary/60 text-tagline-2 dark:text-accent/60">
                    Нэгдсэн админ удирдлага
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <figure data-ns-animate="" data-delay="0.6" data-offset="100" className="max-w-[1290px] w-full">
            <img src="/assets/img/d090638a7c5d.png" alt="hero-image" className="dark:hidden size-full object-cover scale-[150%] md:scale-100" />
            {" "}
            <img src="/assets/img/a103a629559c.png" alt="hero-image" className="hidden dark:block size-full object-cover scale-[150%] md:scale-100" />
          </figure>
        </div>
      </section>
    </div>
  );
}
