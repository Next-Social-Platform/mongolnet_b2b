export default function Creators() {
  return (
    <>
      <section
        id="features"
        className="space-y-[76px] overflow-hidden py-[80px] md:py-[120px] lg:py-[154px]"
        aria-labelledby="team-heading"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <div className="main-container space-y-5">
          <span
            data-ns-animate=""
            data-delay="0.1"
            className="badge badge-ivory"
          >
            СИСТЕМИЙН БОЛОМЖУУД
          </span>
          <div className="space-y-3">
            <h2 data-ns-animate="" data-delay="0.2" className="font-normal">
              Байгууллагын бүх
              <br />
              <span className="text-ns-linen">хэрэгцээ</span> нэг дор.
            </h2>
            <p
              data-ns-animate=""
              data-delay="0.3"
              className="text-tagline-1 text-secondary font-normal"
            >
              Гишүүнчлэлийн бүртгэлээс эхлээд төлбөр, харилцаа, арга хэмжээ
              <br />
              хүртэл бүх үйл ажиллагааг нэг платформд нэгтгэнэ.
            </p>
          </div>
        </div>
        <div
          data-ns-animate=""
          data-delay="0.3"
          className="cards-marquee-container"
          role="img"
          aria-label="Voice styles for creators and teams"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          <div className="flex items-center justify-center gap-x-6">
            <div
              className="ml-6 w-[343px] shrink-0 space-y-6"
              role="listitem"
              itemScope
              itemType="https://schema.org/ImageObject"
              aria-label="Байгууллагын бүтэц"
            >
              <div className="space-y-2">
                <h3 className="text-heading-5 font-normal" itemProp="name">
                  Байгууллагын бүтэц
                </h3>
                <p
                  itemProp="description"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    minHeight: "3em",
                    maxWidth: "335px",
                    whiteSpace: "normal",
                  }}
                >
                  Салбар, хороо, нэгж, албан тушаалын шаталсан бүтцийг удирдана.
                </p>
              </div>
              <figure className="max-w-[343px] overflow-hidden rounded-4xl max-sm:h-[300px]">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/img/bolomjuud/01.webp"
                  alt="Байгууллагын бүтэц"
                  className="size-full object-cover"
                  itemProp="contentUrl"
                  title="Байгууллагын бүтэц"
                />
              </figure>
            </div>
            <div
              className="w-[343px] shrink-0 space-y-6"
              role="listitem"
              itemScope
              itemType="https://schema.org/ImageObject"
              aria-label="Гишүүний бүртгэл"
            >
              <div className="space-y-2">
                <h3 className="text-heading-5 font-normal" itemProp="name">
                  Гишүүний бүртгэл
                </h3>
                <p
                  itemProp="description"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    minHeight: "3em",
                    maxWidth: "290px",
                    whiteSpace: "normal",
                  }}
                >
                  Гишүүний бүртгэл, ангилал, цахим үнэмлэх.
                </p>
              </div>
              <figure className="max-w-[343px] overflow-hidden rounded-4xl max-sm:h-[300px]">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/img/bolomjuud/02.webp"
                  alt="Гишүүний бүртгэл"
                  className="size-full object-cover"
                  itemProp="contentUrl"
                  title="Гишүүний бүртгэл"
                />
              </figure>
            </div>
            <div
              className="w-[343px] shrink-0 space-y-6"
              role="listitem"
              itemScope
              itemType="https://schema.org/ImageObject"
              aria-label="Төлбөр, хураамж"
            >
              <div className="space-y-2">
                <h3 className="text-heading-5 font-normal" itemProp="name">
                  Төлбөр, хураамж
                </h3>
                <p
                  itemProp="description"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    minHeight: "3em",
                    maxWidth: "290px",
                    whiteSpace: "normal",
                  }}
                >
                  Гишүүнчлэлийн татвар, төлбөр, хураамжийн бүртгэл, хяналт.
                </p>
              </div>
              <figure className="max-w-[343px] overflow-hidden rounded-4xl max-sm:h-[300px]">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/img/bolomjuud/03.webp"
                  alt="Төлбөр, хураамж"
                  className="size-full object-cover"
                  itemProp="contentUrl"
                  title="Төлбөр, хураамж"
                />
              </figure>
            </div>
            <div
              className="w-[343px] shrink-0 space-y-6"
              role="listitem"
              itemScope
              itemType="https://schema.org/ImageObject"
              aria-label="Чат, шуурхай харилцаа"
            >
              <div className="space-y-2">
                <h3 className="text-heading-5 font-normal" itemProp="name">
                  Чат, шуурхай харилцаа
                </h3>
                <p
                  itemProp="description"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    minHeight: "3em",
                    maxWidth: "290px",
                    whiteSpace: "normal",
                  }}
                >
                  Хувийн болон групп чат, зураг, файл хуваалцах.
                </p>
              </div>
              <figure className="max-w-[343px] overflow-hidden rounded-4xl max-sm:h-[300px]">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/img/bolomjuud/04.webp"
                  alt="Чат, шуурхай харилцаа"
                  className="size-full object-cover"
                  itemProp="contentUrl"
                  title="Чат, шуурхай харилцаа"
                />
              </figure>
            </div>
            <div
              className="w-[343px] shrink-0 space-y-6"
              role="listitem"
              itemScope
              itemType="https://schema.org/ImageObject"
              aria-label="Коммюнити орон зай"
            >
              <div className="space-y-2">
                <h3 className="text-heading-5 font-normal" itemProp="name">
                  Коммюнити орон зай
                </h3>
                <p
                  itemProp="description"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    minHeight: "3em",
                    maxWidth: "290px",
                    whiteSpace: "normal",
                  }}
                >
                  Нийтлэл, сэтгэгдэл, өрөө, санал асуулга.
                </p>
              </div>
              <figure className="max-w-[343px] overflow-hidden rounded-4xl max-sm:h-[300px]">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/img/bolomjuud/05.webp"
                  alt="Коммюнити орон зай"
                  className="size-full object-cover"
                  itemProp="contentUrl"
                  title="Коммюнити орон зай"
                />
              </figure>
            </div>
            <div
              className="w-[343px] shrink-0 space-y-6"
              role="listitem"
              itemScope
              itemType="https://schema.org/ImageObject"
              aria-label="Мэдээ, мэдээлэл"
            >
              <div className="space-y-2">
                <h3 className="text-heading-5 font-normal" itemProp="name">
                  Мэдээ, мэдээлэл
                </h3>
                <p
                  itemProp="description"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    minHeight: "3em",
                    maxWidth: "290px",
                    whiteSpace: "normal",
                  }}
                >
                  Байгууллагын мэдээ, зарлал, мэдээллийг гишүүдэд хүргэх.
                </p>
              </div>
              <figure className="max-w-[343px] overflow-hidden rounded-4xl max-sm:h-[300px]">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/img/bolomjuud/06.webp"
                  alt="Мэдээ, мэдээлэл"
                  className="size-full object-cover"
                  itemProp="contentUrl"
                  title="Мэдээ, мэдээлэл"
                />
              </figure>
            </div>
            <div
              className="w-[343px] shrink-0 space-y-6"
              role="listitem"
              itemScope
              itemType="https://schema.org/ImageObject"
              aria-label="Мэдэгдэл, сануулга"
            >
              <div className="space-y-2">
                <h3 className="text-heading-5 font-normal" itemProp="name">
                  Мэдэгдэл, сануулга
                </h3>
                <p
                  itemProp="description"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    minHeight: "3em",
                    maxWidth: "290px",
                    whiteSpace: "normal",
                  }}
                >
                  Гишүүдэд шаардлагатай мэдэгдэл, сануулга хүргэх.
                </p>
              </div>
              <figure className="max-w-[343px] overflow-hidden rounded-4xl max-sm:h-[300px]">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/img/bolomjuud/07.webp"
                  alt="Мэдэгдэл, сануулга"
                  className="size-full object-cover"
                  itemProp="contentUrl"
                  title="Мэдэгдэл, сануулга"
                />
              </figure>
            </div>
            <div
              className="w-[343px] shrink-0 space-y-6"
              role="listitem"
              itemScope
              itemType="https://schema.org/ImageObject"
              aria-label="Арга хэмжээний удирдлага"
            >
              <div className="space-y-2">
                <h3 className="text-heading-5 font-normal" itemProp="name">
                  Арга хэмжээ
                </h3>
                <p
                  itemProp="description"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    minHeight: "3em",
                    maxWidth: "290px",
                    whiteSpace: "normal",
                  }}
                >
                  Арга хэмжээний бүртгэл, календарь, төлбөр, QR ирц.
                </p>
              </div>
              <figure className="max-w-[343px] overflow-hidden rounded-4xl max-sm:h-[300px]">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/img/bolomjuud/08.webp"
                  alt="Арга хэмжээний удирдлага"
                  className="size-full object-cover"
                  itemProp="contentUrl"
                  title="Арга хэмжээний удирдлага"
                />
              </figure>
            </div>
            <div
              className="w-[343px] shrink-0 space-y-6"
              role="listitem"
              itemScope
              itemType="https://schema.org/ImageObject"
              aria-label="Байгууллагын танилцуулга"
            >
              <div className="space-y-2">
                <h3 className="text-heading-5 font-normal" itemProp="name">
                  Байгууллагын танилцуулга
                </h3>
                <p
                  itemProp="description"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    minHeight: "3em",
                    maxWidth: "335px",
                    whiteSpace: "normal",
                  }}
                >
                  Байгууллагын түүх, зорилго, дүрэм журам, албан ёсны мэдээлэл.
                </p>
              </div>
              <figure className="max-w-[343px] overflow-hidden rounded-4xl max-sm:h-[300px]">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/img/bolomjuud/09.webp"
                  alt="Байгууллагын танилцуулга"
                  className="size-full object-cover"
                  itemProp="contentUrl"
                  title="Байгууллагын танилцуулга"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
