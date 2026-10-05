import type { MetadataRoute } from "next";
import { getPublishedVersion } from "@/lib/content/get-site-content";
import { siteUrl } from "@/lib/seo";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const version = await getPublishedVersion();

  return [
    {
      url: siteUrl,
      lastModified: version ? new Date(version.createdAt) : new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
