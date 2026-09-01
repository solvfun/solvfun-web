import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import localFont from "next/font/local";
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

export const metadata: Metadata = {
  title: "Solvfun - Self-Custody Solana Wallet for Meme Trading",
  description:
    "Trade meme coins on Solana with full control of your keys. Lightning-fast swaps, self-custody security, and a seamless mobile experience.",
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
