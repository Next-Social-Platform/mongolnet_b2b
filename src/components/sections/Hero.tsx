export default function Hero() {
  return (
    <>
      <section className="hero-section relative xl:pt-[230px] xl:pb-[100px] pt-[170px] pb-20">
        <figure
          data-ns-animate=""
          data-delay="0.3"
          data-offset="0"
          className="opacity-0 h-[765px] w-full top-[13%] md:top-[11%] lg:top-[10%] xl:top-[13%] lp:!top-[15%] left-0 z-[-1] absolute dark:hidden max-w-[2560px]"
        >
          <img
            src="/images/ns-img-76.webp"
            fetchPriority="high"
            alt="hero"
            className="w-full h-full"
          />
        </figure>
        <div className="main-container mb-[70px]">
          <div className="flex flex-col items-center justify-center">
            <span
              data-ns-animate=""
              data-delay="0.1"
              className="opacity-0 badge badge-cyan"
            >
              БАЙГУУЛЛАГЫН ГИШҮҮНЧЛЭЛИЙН НЭГДСЭН ПЛАТФОРМ
            </span>
            <div className="max-w-[822px] mt-5 mb-14 space-y-4 w-full mx-auto text-center">
              <h1 data-ns-animate="" data-delay="0.2" className="opacity-0">
                Бүх гишүүнчлэл
                <br />
                нэг платформ дээр.
              </h1>
              <p
                data-ns-animate=""
                data-delay="0.3"
                className="opacity-0 max-w-xl mx-auto"
              >
                Гишүүд, байгууллагын бүтэц, төлбөр, харилцаа, арга хэмжээг нэг
                системээс хялбар удирдаарай.
              </p>
            </div>
            <div
              data-ns-animate=""
              data-delay="0.4"
              className="opacity-0 w-full text-center"
            >
              <a
                href="#"
                className="btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-lg md:btn-xl w-[90%] md:w-auto"
              >
                <span>Үнийн санал авах</span>
              </a>
            </div>
          </div>
        </div>
        <div className="lp:max-w-[1416px] xl:max-w-[1280px] lg:max-w-[1140px] max-w-[980px] mx-auto relative">
          <figure
            data-ns-animate=""
            data-delay="1.2"
            data-offset="100"
            data-direction="up"
            data-spring="true"
            data-duration="2"
            data-instant="true"
            className="opacity-0 lg:max-w-[282px] sm:max-w-[200px] max-w-[120px] rounded-[20px] overflow-hidden absolute z-20 xl:left-0 xl:top-1/2 xl:-translate-y-1/2 lg:top-20 lg:left-20 -top-10 left-10"
          >
            <img
              src="/images/ns-img-77.webp"
              alt="hero"
              className="w-full rounded-[28px] h-full object-cover block dark:hidden"
            />
          </figure>
          <figure
            data-ns-animate=""
            data-delay="1"
            data-offset="100"
            data-instant="true"
            className="opacity-0 rounded-[20px] relative z-10 overflow-hidden max-w-[860px] xl:mx-0 mx-auto xl:translate-x-[36%] lg:px-0 px-10"
          >
            <img
              src="/images/ns-img-78.webp"
              alt="hero"
              className="w-full h-full object-cover lg:rounded-none rounded-[20px]"
            />
          </figure>
          <figure
            data-ns-animate=""
            data-delay="1.2"
            data-offset="100"
            data-direction="right"
            data-spring="true"
            data-duration="2"
            data-instant="true"
            className="opacity-0 lg:max-w-[320px] sm:max-w-[200px] max-w-[150px] rounded-[20px] overflow-hidden absolute z-20 xl:-right-7 xl:top-1/2 xl:-translate-y-1/2 lg:right-20 lg:bottom-5 xl:bottom-auto sm:right-14 sm:bottom-14 right-[11%] bottom-0"
          >
            <img
              src="/images/ns-img-79.webp"
              alt="hero"
              className="w-full h-full block dark:hidden"
            />
          </figure>
        </div>
      </section>
    </>
  );
}
