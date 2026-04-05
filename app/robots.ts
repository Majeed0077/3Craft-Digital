import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://3craft.digital/sitemap.xml",
    host: "https://3craft.digital",
  };
}
