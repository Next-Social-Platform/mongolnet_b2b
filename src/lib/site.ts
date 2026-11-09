// Сайтын нийтлэг мэдээлэл. Meta tag, robots, sitemap, JSON-LD бүгд эндээс авна.

export const SITE = {
  name: 'Business.mongol.net',
  // Production хаяг. Өөр домэйн дээр туршихад NEXT_PUBLIC_SITE_URL-ээр дарна.
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://business.mongol.net').replace(/\/$/, ''),
  title: 'Business.mongol.net – Гишүүнчлэлийн нэгдсэн платформ',
  // 160 тэмдэгтийн дотор байлгана (хайлтын үр дүнд таслагдахгүй)
  description:
    'Гишүүдийн бүртгэл, байгууллагын бүтэц, төлбөр тооцоо, коммюнити, арга хэмжээг нэг системд нэгтгэсэн платформ. Вэб сайт, мобайл апп, админ удирдлагатай.',
  keywords: [
    'гишүүнчлэлийн систем',
    'гишүүдийн бүртгэл',
    'гишүүнчлэлийн платформ',
    'цахим үнэмлэх',
    'гишүүнчлэлийн төлбөр',
    'холбоо',
    'төрийн бус байгууллага',
    'мэргэжлийн нийгэмлэг',
    'төгсөгчдийн холбоо',
    'коммюнити',
    'мобайл апп',
    'Business.mongol.net',
  ],
  locale: 'mn_MN',
  themeColor: '#4ce233',
  phone: '+976 9595 1370',
  phoneLink: '+97695951370',
  email: 'contact@nextsocial.mn',
  address: 'Улаанбаатар хот, Баянзүрх дүүрэг 43-р хороо UB tower Plus оффис 1305 тоот',
} as const;

// Хуудас дээр openGraph/twitter-ийг дахин зарлахад layout-ийнх бүхэлдээ дарагддаг тул нийтлэг хэсгийг эндээс авна.
// Линк хуваалцахад (Facebook, X, Messenger ...) гарах зураг: public/img/cover.jpg (1200x628)
const COVER = {
  url: '/img/cover.jpg',
  width: 1200,
  height: 628,
  alt: 'Business.mongol.net – Бүх гишүүнчлэлээ нэг платформоос удирд',
};

export const OG_BASE = {
  type: 'website' as const,
  siteName: SITE.name,
  locale: SITE.locale,
  images: [COVER],
};

export const TWITTER_BASE = {
  card: 'summary_large_image' as const,
  images: [{ url: COVER.url, alt: COVER.alt }],
};
