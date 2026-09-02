import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import localFont from "next/font/local";
import { siteConfig } from "@/config/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-brand",
  display: "swap",
  weight: ["600", "700"],
});

// Manrope 只给价格数字（.text-price）用。目前没有任何页面渲染价格，
// 所以不预加载：@font-face 仍然声明，第一次真正用到时浏览器才会下载。
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-price",
  display: "swap",
  weight: ["500", "600"],
  preload: false,
});

// Satoshi 自托管（文件来自 Fontshare，ITF Free Font License 允许网站自托管）。
// 之前从 api.fontshare.com 拉 CSS 再拉字体，是一条跨域的阻塞渲染链。
const satoshi = localFont({
  src: [
    { path: "../fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const title = "Solvfun - Self-Custody Solana Wallet for Meme Trading";

export const metadata: Metadata = {
  // solv.fun 是主域，solvfun.com 和两个 www 都 301 到这里。metadataBase 让
  // 各页面的 canonical 和 og:image 都解析成绝对地址。
  metadataBase: new URL(siteConfig.url),
  title,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    title,
    description: siteConfig.description,
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.description,
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable} ${satoshi.variable}`}
    >
      <body className="min-h-screen bg-bg-base text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
