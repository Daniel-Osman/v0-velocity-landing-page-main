import type { MetadataRoute } from "next"
import { articles, deals } from "@/lib/articles"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://velocity.tech"

  // Static pages
  const staticPages = [
    "",
    "/ai",
    "/hardware",
    "/deals",
    "/reviews",
    "/guides",
    "/archive",
    "/about",
    "/careers",
    "/contact",
    "/advertise",
    "/privacy",
    "/terms",
    "/cookies",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("hourly" as const) : ("daily" as const),
    priority: route === "" ? 1 : route.startsWith("/a") ? 0.8 : 0.6,
  }))

  // Article pages
  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/article/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }))

  // Deal pages
  const dealPages = deals.map((deal) => ({
    url: `${baseUrl}/deals/${deal.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...articlePages, ...dealPages]
}
