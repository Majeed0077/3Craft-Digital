import type { MetadataRoute } from "next";
import { SERVICES } from "./data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://3craft.digital",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://3craft.digital/services",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...SERVICES.map((service) => ({
      url: `https://3craft.digital/services/${service.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
  ];
}
