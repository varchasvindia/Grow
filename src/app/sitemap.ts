import { projects } from "@/lib/data";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.varchasvindia.com";
  const staticRoutes = ["", "/about", "/services", "/projects", "/contact", "/privacy", "/terms"];
  const projectRoutes = projects.map((p) => `/projects/${p.slug}`);

  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}