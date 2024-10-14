import { siteConfig } from "@/site-config";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const topLevelDomain: string = siteConfig.topLevelDomain;
  return [
    {
      url: topLevelDomain,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    // {
    //   url: `${topLevelDomain}/blog`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 2,
    // },
  ];
}
