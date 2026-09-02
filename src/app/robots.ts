import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// output: "export" 下这是个 Route Handler，Next 要求显式声明静态。
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
