# Mongol.net — Business сайт

Холбоо, нийгэмлэг, төрийн бус болон гишүүнчлэлтэй байгууллагын үйл ажиллагааг нэг системд удирдах **Mongol.net** платформын танилцуулга сайт. Бүх текст монгол хэлтэй.

- **Хуудас:** `/` (нүүр), `/contact` (холбоо барих)
- **Технологи:** Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4
- **Production:** `business.mongol.net` (Docker + nginx)

## Агуулга

1. [Хурдан эхлэх](#хурдан-эхлэх)
2. [Командууд](#командууд)
3. [Хуудас, section-ууд](#хуудас-section-ууд)
4. [Төслийн бүтэц](#төслийн-бүтэц)
5. [Хэрхэн засах вэ](#хэрхэн-засах-вэ)
6. [Заавал дагах дүрмүүд](#заавал-дагах-дүрмүүд)
7. [Docker, deploy](#docker-deploy)
8. [Түгээмэл асуудал](#түгээмэл-асуудал)
9. [Хийх ажлууд](#хийх-ажлууд)

## Хурдан эхлэх

Шаардлага: [Node.js](https://nodejs.org) 20.9 буюу түүнээс дээш (Docker image Node 22 ашигладаг, хөгжүүлэлтийг v24-өөр шалгасан), npm.

```bash
git clone https://github.com/Munkhuunuu0603/b2b.git
cd b2b
npm install
npm run dev
```

Хөтөч дээр [http://localhost:3000](http://localhost:3000) нээнэ. Файл засахад хуудас автоматаар шинэчлэгдэнэ. Орчны хувьсагч, өгөгдлийн сан, backend шаардлагагүй.

> 3000 порт өөр програмд эзлэгдсэн бол Next.js өөр порт сонгоно. Өөрөө заах бол `npm run dev -- -p 3100`.

## Командууд

| Команд | Юу хийх вэ |
| --- | --- |
| `npm run dev` | Хөгжүүлэлтийн server (hot reload) |
| `npm run dev:clean` | `.next` (cache)-ийг устгаад dev server асаана. Dev server-ийн алдаа гацсан үед |
| `npm run build` | Production build. Төрлийн шалгалт хийж, хуудсуудыг урьдчилан үүсгэнэ |
| `npm run start` | Build хийсэн хувилбарыг асаана (эхлээд `build`) |
| `npm run lint` | ESLint шалгалт |
| `npx tsc --noEmit` | TypeScript-ийн төрлийн шалгалт |

Commit хийхийн өмнө `npm run build` алдаагүй өнгөрч байгааг шалгана.

## Хуудас, section-ууд

**Нүүр (`/`)** дараах дарааллаар. Цэсний холбоос нь тухайн section-ий `id` руу очно.

| Section | Anchor | Агуулга |
| --- | --- | --- |
| Hero | — | Гарчиг, 3 давуу тал, dashboard-ийн зураг |
| Боломжууд | `#features` | Давхарлан гарч ирдэг (sticky stack) 9 карт |
| Хэрхэн ажилладаг вэ? | `#how-it-works` | Босоо timeline, 4 алхам |
| Үнийн санал | `#pricing` | Standard / Pro / Enterprise багц (үнэгүй), товч нь `/contact` руу |
| Хэнд зориулсан бэ? | `#audience` | Sticky гарчиг, 6 карт |
| Асуулт хариулт | `#faq` | 10 асуулттай accordion |
| Footer | `#contact` | Утас, и-мэйл, сошиал, дээш буцах сум |

**Холбоо барих (`/contact`)** байршил, и-мэйлийн карт болон хүсэлтийн форм.

Цэс: Боломжууд · Хэрхэн ажилладаг вэ? · Үнийн санал · Хэнд зориулсан бэ? · Асуулт хариулт · [Холбоо барих]. 1280px-ээс нарийн дэлгэц дээр цэс нь hamburger-ээр нээгддэг dropdown болно.

## Төслийн бүтэц

```
src/
  app/
    layout.tsx          html, meta, CSS-ийн дараалал (globals → fonts → site → theme), <Scripts/>
    page.tsx            Нүүр хуудас
    contact/page.tsx    Холбоо барих хуудас
    globals.css         Tailwind v4: @theme токен, загварын суурь CSS (том, гараар засахгүй)
    site.css            ЭНЭ САЙТЫН өөрийн засварууд (header, цэс, footer, форм ...) — ЭНД ЗАСНА
    theme.css           Брэндийн өнгө: ногоон #4ce233, хар хөх #170f2a — ӨНГӨ ЭНД ЗАСНА
    fonts/              Inter (local TTF) + fonts.css
  components/
    Header.tsx          Цэс. Нүүр дээр anchor, бусад хуудсанд "/#anchor"
    Footer.tsx
    Contact.tsx         Холбоо барих карт, форм
    ContactForm.tsx     Client component, илгээхэд mailto: нээнэ
    Scripts.tsx         GSAP, Lenis, Swiper зэрэг script-ийг public/-аас ачаална
    home/               Hero, Features, HowItWorks, Pricing, Audience, Faq
public/
  assets/               Зураг, icon фонт (next-sass), vendor JS (assets/runtimes/modern)
  img/                  logo.svg, favicon.svg
  reveal.js, site-nav.js
deploy/                 docker-compose.yml, deploy.sh, nginx тохиргоо
.github/workflows/      Docker image build ба push
```

## Хэрхэн засах вэ

| Хийх зүйл | Хаана |
| --- | --- |
| Текст засах | `src/components/home/*.tsx`, `Header.tsx`, `Footer.tsx`, `Contact.tsx` |
| Брэндийн өнгө | `src/app/theme.css` (токен болон хуучин өнгийн hex хуулбар хоёуланг) |
| Header, цэс, footer, форм-ийн загвар | `src/app/site.css` |
| Зураг солих | `public/assets/img/` дотор файл солиод JSX дэх замыг шинэчилнэ. Зам нь `/assets/...` гэж эхэлнэ |
| Footer-ийн сошиал холбоос | `src/components/Footer.tsx` (одоо `href="#"`) |
| Шинэ Tailwind класс | `src/app` болон `src/components` дотор шууд ашиглана (v4 автоматаар олно) |

`site.css`, `theme.css` нь `globals.css`-ээс хойно, layer-гүйгээр ачаалагддаг тул Tailwind-ийн utility класс дээр давамгайлна. `layout.tsx` дахь import-ын дарааллыг өөрчлөхгүй.

## Заавал дагах дүрмүүд

Загварын animation, цэс, accordion, slider нь React биш, энгийн JavaScript-ээр (`public/`) ажилладаг. Тиймээс:

1. **Hook класс, data атрибутыг нэр солихгүй, устгахгүй.** Эдгээр нь загварын класс биш, script-ийн холбоос: `data-ns-animate`, `data-delay`, `lenis-scroll-to`, `nav-hamburger`, `nav-hamburger-close`, `sidebar`, `show-sidebar`, `accordion`, `accordion-item`, `accordion-action`, `accordion-content`, `step-card`, `step-number`, `data-step`, `data-step-number`, `id="step-N"`, `stack-cards`, `js-stack-cards`, `step-container`, `step-line`, `price-month`, `header-one`.
2. **Хуудас хоорондын холбоос нь энгийн `<a href>`.** `next/link` ашиглахгүй, учир нь script-үүд хуудас бүр дээр шинээр эхэлдэг. Хэрэв client-side routing руу шилжүүлбэл route солигдох бүрт script-үүдийг дахин эхлүүлэх ёстой.
3. **`Scripts.tsx`-ийн дараалал чухал.** `site-nav.js` нь `DOMContentLoaded` үйл явдлаас өмнө ачаалагдах ёстой.
4. **`site.css` дахь `.step-card`, `.step-cards` (min-height, gap)** нь "Хэнд зориулсан бэ?" section-ий алхмын дугаар гэрэлтэхэд хамаатай. Өөрчилбөл тэр нь эвдэрнэ.
5. **Header-ийн цэсний дүрэм `header nav a[href]`** хэлбэртэй (`[href]` нь specificity нэмдэг). Үүнийг хадгална.
6. Бүх харагдах текст монгол хэлтэй байна.

## Docker, deploy

Production нь Docker image-ээр ажилладаг (`next.config.ts` дэх `output: "standalone"`).

```bash
docker build -t mongolnet_b2b .
docker run --rm -p 3000:3000 mongolnet_b2b
```

**CI (`.github/workflows/docker-publish.yml`):** GitHub Actions дээр гараар (`workflow_dispatch`) ажиллуулна. `main` branch-ийг build хийж, `repo.nextsocial.mn/mongolnet_b2b_prod` руу `:<commit sha>` болон `:latest` (эсвэл заасан хувилбар) tag-аар push хийнэ. Нууц үг нь `NSP_NEXUS_USER_PWD` secret-ээс.

**Server дээр (`deploy/`):**

```bash
docker login repo.nextsocial.mn -u nsp     # нэг удаа
cd deploy
./deploy.sh              # :latest-ийг татаж, дахин асаана
./deploy.sh a1b2c3d      # тодорхой tag (гараар буцаахад ч ашиглана)
```

`deploy.sh` нь шинэ image-ийг татаад, health check (120 секунд хүртэл) өнгөрөхгүй бол өмнөх image руу автоматаар буцаана. Хоёр deploy зэрэг ажиллахаас lock-оор сэргийлнэ. `docker-compose.yml` нь апп-ыг зөвхөн `127.0.0.1:3000` дээр ажиллуулж, нийтэд нь nginx (`deploy/nginx/business.mongol.net.conf`) нээнэ. HTTPS: `sudo certbot --nginx -d business.mongol.net`.

**Холбоо барих форм.** Форм нь Server Action-оор (`src/app/contact/actions.ts`) SMTP-ээр `contact@nextsocial.mn` руу и-мэйл илгээнэ. `.env.example`-ийг server дээр `deploy/.env`, локалд `.env.local` болгон хуулж бөглөнө:

```bash
SMTP_USER=...    # Mailjet → Account settings → API Key Management: API Key
SMTP_PASS=...    # мөн тэндээс Secret Key
# заавал биш: SMTP_HOST (in-v3.mailjet.com), SMTP_PORT (587), SMTP_FROM (noreply@nextsocial.mn), CONTACT_TO (contact@nextsocial.mn)
```

`nextsocial.mn` домэйн Mailjet-д SPF, DKIM-ээр тохируулагдсан. Илгээгч хаяг (эсвэл домэйн) Mailjet → Senders & Domains-д бүртгэлтэй байх ёстой. Үнэгүй багц өдөрт 200 и-мэйл.

## Түгээмэл асуудал

**Dev server-д `Cannot find module '@tailwindcss/postcss'` гарвал.** Багц суухаас өмнө dev server ажиллаж байсан бол Turbopack-ийн байнгын cache алдааг хадгалчихдаг. Server-ээ `Ctrl+C`-ээр зогсоогоод cache-ийг устгаж дахин асаана:

```bash
npm run dev:clean
```

**Нэг төсөл дээр хоёр dev server асаах.** Next нь `.next/dev/lock`-оор нэг л server зөвшөөрдөг. Нэмэлт server-ийг тусдаа хавтсаар асаана:

```powershell
$env:NEXT_DIST_DIR = ".next-dev2"
npm run dev -- -p 3001
```

**Өнгө, `@theme` өөрчилсөн ч хуудас шинэчлэгдэхгүй бол** dev server-ээ дахин асаана. Тэр нь `globals.css`-ийн theme-ийн өөрчлөлтийг hot reload хийдэггүй.

## Хийх ажлууд

- Footer-ийн сошиал холбоос `href="#"` (Facebook, Instagram, YouTube, LinkedIn-ийн жинхэнэ хаяг оруулна).
- Үнийн санал хэсэгт үнэ байхгүй. Хэрэгтэй бол нэмнэ.
- Hero-ийн dashboard зураг болон зарим icon нь англи хэлтэй загварын зураг хэвээр.
- `<img>` ашигласан (зургууд урьдчилан оновчлогдсон). Хүсвэл `next/image` руу шилжүүлнэ.
