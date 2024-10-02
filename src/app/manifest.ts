import { siteConfig as siteConfig } from "@/site-config";
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.titleDefault,
    short_name: siteConfig.titleDefault,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
