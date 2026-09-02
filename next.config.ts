import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 上层目录里还有别的 lockfile，显式指定工作区根目录，避免 Next 猜错。
  turbopack: {
    root: __dirname,
  },
  // 部署在 Cloudflare Pages：整站导出成静态文件到 out/。
  // 站内没有 Route Handler / Server Action / ISR，所以没有功能损失。
  output: "export",
  // 静态导出没有 Next 的图片优化服务。站内唯一一处 next/image 是 28px 的
  // logo，原图就该按原样发。
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
