import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/405"],
    },
    sitemap: "https://cricfyhub.com/sitemap.xml",
  };
}
