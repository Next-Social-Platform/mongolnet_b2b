export default function Clients() {
  return (
    <>
      <section
        className="py-16 lg:py-28 xl:py-39 bg-white"
        aria-labelledby="clients-heading"
        itemScope
        itemType="https://schema.org/Organization"
        aria-label="Trusted clients and partners"
      >
        <div className="main-container">
          <div className="relative overflow-hidden text-center">
            <h2
              id="clients-heading"
              data-ns-animate=""
              data-delay="0.1"
              className="mx-auto mb-14 max-w-[800px] text-center font-normal"
              itemProp="description"
            >
              Байгууллагын{" "}
              <span className="text-ns-linen" itemProp="numberOfEmployees">
                хамтын
              </span>{" "}
              ажиллагааг нэг түвшинд.
            </h2>
            <div data-ns-animate="" data-delay="0.2">
              <div
                className="logos-marquee-container mt-14 overflow-hidden"
                role="img"
                aria-label="Logos of trusted companies and brands using AI Voice Generator"
                itemScope
                itemType="https://schema.org/ItemList"
              >
                <div className="flex items-center justify-center gap-x-14">
                  <figure
                    className="ml-14 h-[80px] w-[80px] shrink-0"
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/Organization"
                    role="img"
                    aria-label="Байгууллагын лого"
                  >
                    <img
                      src="/images/icons/01.webp"
                      alt="Байгууллагын лого"
                      width="80"
                      height="80"
                      loading="lazy"
                      decoding="async"
                      itemProp="logo"
                    />
                  </figure>
                  <figure
                    className="h-[80px] w-[80px] shrink-0"
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/Organization"
                    role="img"
                    aria-label="Бид-Ерэн-Найм ТББ лого"
                  >
                    <img
                      src="/images/icons/02.webp"
                      alt="Бид-Ерэн-Найм ТББ лого"
                      width="80"
                      height="80"
                      loading="lazy"
                      decoding="async"
                      itemProp="logo"
                    />
                  </figure>
                  <figure
                    className="h-[80px] w-[80px] shrink-0"
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/Organization"
                    role="img"
                    aria-label="Бид-Ерэн-Найм ТББ лого"
                  >
                    <img
                      src="/images/icons/03.webp"
                      alt="Бид-Ерэн-Найм ТББ лого"
                      width="80"
                      height="80"
                      loading="lazy"
                      decoding="async"
                      itemProp="logo"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div
              className="absolute bottom-[0%] left-0 h-[80px] w-[80px] sm:h-[130px] md:w-[150px] xl:left-[-20%] 2xl:w-[455px]"
              style={{
                background:
                  "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #fff 39.14%)",
              }}
              aria-hidden="true"
              role="presentation"
              aria-label="Decorative left gradient fade"
            />
            <div
              className="absolute right-0 bottom-[0%] h-[80px] w-[80px] rotate-180 sm:h-[130px] md:w-[150px] xl:right-[-20%] 2xl:w-[455px]"
              style={{
                background:
                  "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #fff 39.14%)",
              }}
              aria-hidden="true"
              role="presentation"
              aria-label="Decorative right gradient fade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
