import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://3craft.digital",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
