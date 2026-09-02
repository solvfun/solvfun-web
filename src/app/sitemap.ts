import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// output: "export" 下这是个 Route Handler，Next 要求显式声明静态。
export const dynamic = "force-static";

// 不写 lastModified：静态导出下它只能取到构建时间，每次部署都会变，
// 等于反复告诉 Google「内容更新了」，反而降低这个字段的可信度。
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, priority: 1 },
    { url: `${siteConfig.url}/privacy`, priority: 0.5 },
    { url: `${siteConfig.url}/terms`, priority: 0.5 },
    { url: `${siteConfig.url}/fees`, priority: 0.5 },
  ];
}
