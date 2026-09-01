import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 上层目录里还有别的 lockfile，显式指定工作区根目录，避免 Next 猜错。
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
