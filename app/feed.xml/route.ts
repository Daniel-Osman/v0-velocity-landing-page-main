import { articles } from "@/lib/articles"

export const runtime = 'edge';

export async function GET() {
  const baseUrl = "https://velocity.tech"

  const rssItems = articles
    .slice(0, 20)
    .map(
      (article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${baseUrl}/article/${article.slug}</link>
      <guid isPermaLink="true">${baseUrl}/article/${article.slug}</guid>
      <description><![CDATA[${article.excerpt}]]></description>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <category>${article.category}</category>
      <author>${article.author.name}</author>
      <enclosure url="${baseUrl}${article.image}" type="image/jpeg" />
    </item>`,
    )
    .join("")

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>VELOCITY - Tech Publication</title>
    <link>${baseUrl}</link>
    <description>High-speed tech news, AI insights, hardware reviews, and deals.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/logo.png</url>
      <title>VELOCITY</title>
      <link>${baseUrl}</link>
    </image>
    ${rssItems}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
