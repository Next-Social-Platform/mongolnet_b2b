# Mongol.net

Холбоо, нийгэмлэг, төрийн бус болон гишүүнчлэлтэй байгууллагын үйл ажиллагааг нэг системд удирдах **Mongol.net** платформын танилцуулга (landing) хуудас.

Next.js (App Router), React, TypeScript, Tailwind CSS дээр бүтээгдсэн.

## Шаардлага

- [Node.js](https://nodejs.org) 20 буюу түүнээс дээш (хөгжүүлэлтийг v24-өөр шалгасан)
- npm

## Асаах

```bash
# 1. Repository татах
git clone https://github.com/Munkhuunuu0603/b2b.git
cd b2b

# 2. Сан суулгах
npm install

# 3. Хөгжүүлэлтийн server асаах
npm run dev
```

Хөтөч дээр [http://localhost:3000](http://localhost:3000) хаягаар нээнэ. Файл засахад хуудас автоматаар шинэчлэгдэнэ.

> 3000 порт өөр програмд эзлэгдсэн бол Next.js өөр порт сонгоно (терминалд харагдана). Өөрөө заах бол `npm run dev -- -p 3100`.

## Командууд

| Команд          | Юу хийх вэ                                         |
| --------------- | -------------------------------------------------- |
| `npm run dev`   | Хөгжүүлэлтийн server (hot reload)                  |
| `npm run build` | Production build. Алдаа, төрлийн шалгалт хийнэ     |
| `npm run start` | Build хийсэн хувилбарыг асаана (эхлээд `build`)    |
| `npm run lint`  | ESLint шалгалт                                     |
| `npx tsc --noEmit` | TypeScript-ийн төрлийн шалгалт                  |

Production хувилбарыг орон нутагт шалгах:

```bash
npm run build
npm run start        # http://localhost:3000
```

## Төслийн бүтэц

Хоёр хуудастай сайт: `/` (нүүр) болон `/contact` (холбоо барих). Дизайн нь `design/` хавтсаар ирсэн Tailwind/GSAP загвар дээр суурилсан.

```
src/
  app/
    layout.tsx        html, meta, CSS-ийн дараалал (globals → fonts → site → theme), <Scripts/>
    page.tsx          Нүүр: Header, Hero, Features, HowItWorks, Pricing, Audience, Faq, Footer
    contact/page.tsx  Холбоо барих хуудас
    globals.css       Tailwind v4: @theme токен, загварын суурь CSS (том, гараар засахгүй)
    site.css          Энэ сайтын өөрийн засварууд (header, цэс, footer, форм ...). ЭНД ЗАСНА
    theme.css         Брэндийн өнгө: ногоон #4ce233, хар хөх #170f2a. ӨНГӨ ЭНД ЗАСНА
    fonts/            Inter (local)
  components/
    Header.tsx, Footer.tsx, Contact.tsx, ContactForm.tsx
    Scripts.tsx       GSAP, Lenis, Swiper зэрэг animation script-ийг public/-аас ачаална
    home/             Нүүр хуудасны section-ууд
public/
  assets/             Зураг, icon фонт, vendor JS (assets/runtimes/modern)
  img/, reveal.js, site-nav.js
design/               Дизайны эх файлууд (git-д орохгүй, .gitignore-д байна)
```

Дэлгэрэнгүй заавар, засахдаа дагах дүрмийг `design/nextjs-handoff/AI-HANDOFF.md` дотроос уншина.

## Анхаарах зүйлс

- **Next.js-ийн хувилбар шинэ (16.x).** API болон файлын бүтэц таны мэддэг хувилбараас өөр байж болно. Код бичихээсээ өмнө `node_modules/next/dist/docs/` дахь гарын авлагыг уншина (`AGENTS.md`-ээс үз).
- **Animation нь энгийн JavaScript.** Загварын animation, цэс, accordion нь React биш, `public/` доторх JS-ээр ажилладаг. `data-ns-animate`, `lenis-scroll-to`, `accordion-*`, `step-card` зэрэг класс, data атрибутыг нэр солихгүй, устгахгүй.
- **Хуудас хоорондын холбоос** нь `next/link` биш энгийн `<a href>` (script-үүд хуудас бүр дээр шинээр эхэлдэг).
- **Tailwind CSS v4** (`@tailwindcss/postcss`). `site.css`, `theme.css` нь `globals.css`-ээс хойно ачаалагддаг тул Tailwind-ийн класс дээр давамгайлна.
- **Холбоо барих форм** нь одоогоор `mailto:` нээдэг (server-гүй). Жинхэнэ илгээлт хэрэгтэй бол `ContactForm.tsx`-ийн `handleSubmit`-ийг API route руу солино.

## Deploy

Хамгийн энгийн арга нь [Vercel](https://vercel.com/new). Repository-г холбоод `npm run build`-ийг өөрчлөлтгүй ашиглана. Өөр server дээр байршуулах бол:

```bash
npm install
npm run build
npm run start
```

Дэлгэрэнгүй: [Next.js deployment](https://nextjs.org/docs/app/building-your-application/deploying).
