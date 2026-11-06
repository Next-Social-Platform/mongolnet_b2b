import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <div data-theme="mortgage-services" style={{ display: "contents" }}>
      <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-20 xl:pt-[180px] xl:pb-[100px]" aria-label="Contact Information and Form">
        <div className="main-container">
          <div className="space-y-[70px]">
            <div className="mx-auto max-w-[680px] space-y-3 text-center">
              <h2 data-ns-animate="" data-delay="0.2">
                Бидэнтэй{" "}
                <span className="text-primary-500">
                  холбогдоорой.
                </span>
              </h2>
              <p data-ns-animate="" data-delay="0.3">
                Системийн талаар асуух зүйл, техникийн тусламж эсвэл зөвлөгөө хэрэгтэй бол манай багтай холбогдоорой. Бид таны асуултад хариулж, хэрэгцээнд тань тохирсон шийдлийг санал болгоход үргэлж бэлэн.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:items-start lg:gap-8 xl:gap-[70px]">
              <div data-ns-animate="" data-delay="0.4" className="flex flex-col gap-8 md:flex-row lg:flex-col">
                <div className="bg-primary-500 relative w-full space-y-6 overflow-hidden rounded-[20px] p-11 text-center md:max-w-[371px]">
                  <figure className="mx-auto size-10 overflow-hidden">
                    <img src="/assets/img/80c212b8cbe8.svg" alt="Office location icon" className="size-full object-cover" />
                  </figure>
                  <div className="space-y-2.5">
                    <p className="text-heading-6 text-accent">
                      Байршил
                    </p>
                    <p className="text-accent">
                      Манлай Баатар Дамдинсүрзнгийн Гудамж, СБД - 8 хороо, UB tower plus office 1305 тоот
                    </p>
                  </div>
                </div>
                <div className="card-item bg-primary-500 relative w-full overflow-hidden rounded-[20px] p-11 text-center md:max-w-[371px]">
                  <div className="space-y-6">
                    <figure className="mx-auto size-10 overflow-hidden">
                      <img src="/assets/img/3add6072857d.svg" alt="Email icon" className="size-full object-cover" />
                    </figure>
                    <div className="space-y-2.5">
                      <p className="text-heading-6 text-accent">
                        И-мэйл
                      </p>
                      <p className="text-accent">
                        <a href="mailto:contact@nextsocial.mn">
                          contact@nextsocial.mn
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-primary-500 relative w-full overflow-hidden rounded-[20px] p-11 text-center md:max-w-[371px]">
                  <div className="space-y-6">
                    <figure className="mx-auto size-10 overflow-hidden">
                      <svg className="size-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#fff" }} aria-label="Phone icon">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </figure>
                    <div className="space-y-2.5">
                      <p className="text-heading-6 text-accent">
                        Утас
                      </p>
                      <p className="text-accent">
                        <a href="tel:+97695951370">
                          +976 9595 1370
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-ns-animate="" data-delay="0.3" className="dark:bg-background-6 mx-auto w-full max-w-[847px] rounded-4xl bg-white p-6 md:p-8 lg:p-11">
                <ContactForm className="space-y-8">
                  <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    <div className="w-full space-y-2 lg:max-w-[364px]">
                      <label htmlFor="fullname" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                        Таны нэр
                      </label>
                      {" "}
                      <input type="text" id="fullname" name="fullname" placeholder="Нэрээ оруулна уу" required autoComplete="name" className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-6 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent h-[48px] w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none xl:h-[41px]" />
                    </div>
                    <div className="w-full max-w-[364px] space-y-2">
                      <label htmlFor="number" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                        Утасны дугаар
                      </label>
                      {" "}
                      <input type="text" id="number" name="number" placeholder="Утасны дугаараа оруулна уу" required autoComplete="tel" className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-6 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent h-[48px] w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none xl:h-[41px]" />
                    </div>
                  </div>
                  {" "}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                      Төрөл
                    </label>
                    {" "}
                    <select id="subject" name="subject" required className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-6 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent h-[48px] w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none xl:h-[41px] cursor-pointer" defaultValue="">
                      <option value="" disabled>
                        Сонгоно уу
                      </option>
                      <option value="Санал хүсэлт">
                        Санал хүсэлт
                      </option>
                      <option value="Үнийн санал">
                        Үнийн санал
                      </option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                      Захидал
                    </label>
                    {" "}
                    <textarea id="message" name="message" rows={7} placeholder="Захидлаа бичнэ үү" required className="dark:bg-background-6 dark:border-stroke-7 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary dark:focus-visible:border-stroke-4/20 placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent w-full rounded-xl border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none" />
                  </div>
                </ContactForm>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
