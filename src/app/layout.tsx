import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mongol.net",
  description:
    "Mongol.net нь холбоо, нийгэмлэг, төрийн бус болон гишүүнчлэлтэй байгууллагуудын үйл ажиллагааг нэг системд удирдахад зориулагдсан.",
  icons: {
    icon: "/images/shared/favicon.svg",
    shortcut: "/images/shared/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="mn"
      data-force-theme="light"
      className={`light ${inter.variable}`}
    >
      <body className="bg-white">{children}</body>
    </html>
  );
}
