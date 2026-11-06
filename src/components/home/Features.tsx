export default function Features() {
  return (
    <div data-theme="app-builder" style={{ display: "contents" }}>
      <section id="features" className="bg-background-2 dark:bg-background-5">
        <div className="main-container">
          <div className="flex lg:flex-row flex-col items-start lg:gap-[100px] md:gap-y-20 gap-y-10 pt-14 md:pt-16 lg:pt-[88px] xl:pt-[150px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[150px]">
            <div className="w-full lg:flex-1 lg:sticky lg:top-28 lg:max-w-full max-w-[520px] lg:mx-0 mx-auto text-center lg:text-left">
              <span data-ns-animate="" data-delay="0.2" className="badge badge-green mb-5">
                Боломжууд
              </span>
              <h2 data-ns-animate="" data-delay="0.3" className="mb-3">
                Байгууллагын бүх хэрэгцээ{" "}
                <span className="text-primary-500">
                  нэг дор
                </span>
              </h2>
              <p data-ns-animate="" data-delay="0.4" className="mb-14 lg:max-w-[620px]">
                Гишүүнчлэлийн бүртгэл, байгууллагын бүтэц, төлбөр тооцоо, коммюнити, арга хэмжээг нэг платформд нэгтгэж, байгууллагынхаа өдөр тутмын үйл ажиллагааг хялбар удирдаарай.
              </p>
            </div>
            <div className="w-full lg:flex-1 stack-cards js-stack-cards lg:max-w-full md:max-w-[65%] max-w-[90%] lg:mx-0 mx-auto">
              <div className="p-8 bg-background-1 dark:bg-background-6 rounded-xl space-y-6 stack-cards__item js-stack-cards__item border border-stroke-1/90 dark:border-stroke-5 max-sm:min-h-[255px]">
                <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="9" y="2" width="6" height="6" rx="1" />
                  <rect x="2" y="16" width="6" height="6" rx="1" />
                  <rect x="9" y="16" width="6" height="6" rx="1" />
                  <rect x="16" y="16" width="6" height="6" rx="1" />
                  <path d="M12 8v3M5 16v-2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2M12 11v5" />
                </svg>
                <div className="space-y-1">
                  <h5>
                    Байгууллагын бүтэц
                  </h5>
                  <p>
                    Салбар, хороо, нэгж, албан тушаалын шаталсан бүтцийг удирдана.
                  </p>
                </div>
              </div>
              <div className="p-8 bg-background-1 dark:bg-background-6 rounded-xl space-y-6 stack-cards__item js-stack-cards__item border border-stroke-1/90 dark:border-stroke-5 max-sm:min-h-[255px]">
                <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <circle cx="9" cy="11" r="2.5" />
                  <path d="M5 17c.8-2 2.3-3 4-3s3.2 1 4 3M15 9h4M15 13h4" />
                </svg>
                <div className="space-y-1">
                  <h5>
                    Гишүүний бүртгэл
                  </h5>
                  <p>
                    Гишүүний бүртгэл, ангилал, цахим үнэмлэх.
                  </p>
                </div>
              </div>
              <div className="p-8 bg-background-1 dark:bg-background-6 rounded-xl space-y-6 stack-cards__item js-stack-cards__item border border-stroke-1/90 dark:border-stroke-5 max-sm:min-h-[255px]">
                <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <path d="M2 10h20M6 15h4" />
                </svg>
                <div className="space-y-1">
                  <h5>
                    Төлбөр, хураамж
                  </h5>
                  <p>
                    Гишүүнчлэлийн татвар, төлбөр, хураамжийн бүртгэл, хяналт.
                  </p>
                </div>
              </div>
              <div className="p-8 bg-background-1 dark:bg-background-6 rounded-xl space-y-6 stack-cards__item js-stack-cards__item border border-stroke-1/90 dark:border-stroke-5 max-sm:min-h-[255px]">
                <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  <path d="M8 9h8M8 13h5" />
                </svg>
                <div className="space-y-1">
                  <h5>
                    Чат, шуурхай харилцаа
                  </h5>
                  <p>
                    Хувийн болон групп чат, зураг, файл хуваалцах.
                  </p>
                </div>
              </div>
              <div className="p-8 bg-background-1 dark:bg-background-6 rounded-xl space-y-6 stack-cards__item js-stack-cards__item border border-stroke-1/90 dark:border-stroke-5 max-sm:min-h-[255px]">
                <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <div className="space-y-1">
                  <h5>
                    Коммюнити орон зай
                  </h5>
                  <p>
                    Нийтлэл, сэтгэгдэл, өрөө, санал асуулга.
                  </p>
                </div>
              </div>
              <div className="p-8 bg-background-1 dark:bg-background-6 rounded-xl space-y-6 stack-cards__item js-stack-cards__item border border-stroke-1/90 dark:border-stroke-5 max-sm:min-h-[255px]">
                <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                  <path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6Z" />
                </svg>
                <div className="space-y-1">
                  <h5>
                    Мэдээ, мэдээлэл
                  </h5>
                  <p>
                    Байгууллагын мэдээ, зарлал, мэдээллийг гишүүдэд хүргэх.
                  </p>
                </div>
              </div>
              <div className="p-8 bg-background-1 dark:bg-background-6 rounded-xl space-y-6 stack-cards__item js-stack-cards__item border border-stroke-1/90 dark:border-stroke-5 max-sm:min-h-[255px]">
                <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
                </svg>
                <div className="space-y-1">
                  <h5>
                    Мэдэгдэл, сануулга
                  </h5>
                  <p>
                    Гишүүдэд шаардлагатай мэдэгдэл, сануулга хүргэх.
                  </p>
                </div>
              </div>
              <div className="p-8 bg-background-1 dark:bg-background-6 rounded-xl space-y-6 stack-cards__item js-stack-cards__item border border-stroke-1/90 dark:border-stroke-5 max-sm:min-h-[255px]">
                <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M8 2v4M16 2v4" />
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
                </svg>
                <div className="space-y-1">
                  <h5>
                    Арга хэмжээ
                  </h5>
                  <p>
                    Арга хэмжээний бүртгэл, календарь, төлбөр, QR ирц.
                  </p>
                </div>
              </div>
              <div className="p-8 bg-background-1 dark:bg-background-6 rounded-xl space-y-6 stack-cards__item js-stack-cards__item border border-stroke-1/90 dark:border-stroke-5 max-sm:min-h-[255px]">
                <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
                </svg>
                <div className="space-y-1">
                  <h5>
                    Байгууллагын танилцуулга
                  </h5>
                  <p>
                    Байгууллагын түүх, зорилго, дүрэм журам, албан ёсны мэдээлэл.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
