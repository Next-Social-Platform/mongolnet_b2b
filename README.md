# Mongol.net

Холбоо, нийгэмлэг, төрийн бус болон гишүүнчлэлтэй байгууллагын үйл ажиллагааг нэг системд удирдах **Mongol.net** платформын танилцуулга (landing) хуудас.

Next.js (App Router), React, TypeScript, Tailwind CSS дээр бүтээгдсэн. Хөдөлгөөн нь GSAP, Lenis (зөөлөн гүйлгэлт), `vanilla-infinite-marquee` сангаар хийгдсэн.

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

```
src/
  app/
    layout.tsx        Үндсэн layout, Inter фонт, meta мэдээлэл
    page.tsx          Хуудасны section-уудыг дарааллаар нь угсарсан газар
    globals.css       Бүх стиль (доорх тайлбарыг үз)
  components/
    Header.tsx        Цэс, дээд мэдэгдлийн bar, mobile цэс (client)
    PageEffects.tsx   Бүх animation: reveal, marquee, typewriter, Lenis (client)
    sections/         Нүүр хуудасны хэсгүүд: Hero, Clients, Creators, Steps,
                      Pricing, Results, Integration, Footer
  lib/scroll.ts       Anchor руу / дээд рүү зөөлөн гүйлгэх туслах функц
  types/              Төрлийн тодорхойлолт (springer, vanilla-infinite-marquee)
public/
  images/             Зургууд (WebP/PNG/SVG)
  img/bolomjuud/      "Боломжууд" хэсгийн зургууд
  fonts/              Icon фонт (next-sass)
```

Хуудасны дараалал `src/app/page.tsx` дотор байна. Section нэмэх, хасах, байрыг нь солихдоо тэр файлыг засна.

## Анхаарах зүйлс

- **Next.js-ийн хувилбар шинэ (16.x).** API болон файлын бүтэц таны мэддэг хувилбараас өөр байж болно. Код бичихээсээ өмнө `node_modules/next/dist/docs/` дахь холбогдох гарын авлагыг уншина (дэлгэрэнгүйг `AGENTS.md`-ээс үз).
- **`cacheComponents` идэвхтэй.** Server component дотор `new Date()` зэрэг хугацаанаас хамаарсан кодыг шууд бичвэл `npm run build` унана.
- **`globals.css` нь урьдчилан compile хийсэн Tailwind.** `@import "tailwindcss"` ашигладаггүй, шууд CSS файл байдлаар ачаалагдана. Тиймээс HTML-д шинэ Tailwind класс (жишээ нь `h-[88px]`) нэмэхэд CSS-д байхгүй бол ажиллахгүй. Шинэ утгыг inline `style` эсвэл `globals.css` дотор шууд CSS-ээр нэм.
- **Animation өгөгдлөөр удирдагддаг.** Элемент дээр `data-ns-animate` өгвөл scroll хийхэд гарч ирэх reveal animation идэвхжинэ. Нэмэлт утгууд: `data-delay`, `data-duration`, `data-offset`, `data-direction`, `data-instant` гэх мэт. Бүх логик `PageEffects.tsx` дотор.
- **Marquee (гүйдэг мөр).** Дээд мэдэгдэл, "Байгууллагын хамтын ажиллагааг нэг түвшинд" хэсгийн logo (500px-ээс нарийн дэлгэцэд л гүйнэ), картуудын мөр байдаг. Тохиргоо нь `PageEffects.tsx` дахь `MARQUEES` жагсаалтад.
- **Зураг.** Том зургийг WebP болгож, `public/images/` дотор хадгална. Ашиглагдахгүй зургийг устгаж байх нь хуудасны жинг бага байлгана.

## Deploy

Хамгийн энгийн арга нь [Vercel](https://vercel.com/new). Repository-г холбоод `npm run build`-ийг өөрчлөлтгүй ашиглана. Өөр server дээр байршуулах бол:

```bash
npm install
npm run build
npm run start
```

Дэлгэрэнгүй: [Next.js deployment](https://nextjs.org/docs/app/building-your-application/deploying).
