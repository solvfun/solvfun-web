import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
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
      className={`${spaceGrotesk.variable} ${manrope.variable}`}
    >
      <body className="min-h-screen bg-bg-base text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
