export const siteConfig = {
  name: "Solvfun",
  tagline: "Buy and sell meme coins like lightning.",
  description:
    "Trade meme coins on Solana with full control of your keys. Lightning-fast swaps, self-custody security, and a seamless mobile experience.",
  url: "https://solvfun.com",

  nav: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
  ],

  downloads: {
    apk: {
      label: "Download APK",
      href: "#apk-download",
      enabled: true,
    },
    googlePlay: {
      label: "Google Play",
      href: "#google-play",
      enabled: true,
    },
  },

  social: {
    twitter: "#twitter",
    discord: "#discord",
    telegram: "#telegram",
    github: "#github",
  },

  legal: {
    privacy: "/privacy",
    terms: "/terms",
  },

  copyright: `\u00A9 2025 Solvfun. All rights reserved.`,
} as const;
