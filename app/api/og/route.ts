export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return Response.json({ error: "url is required" }, { status: 400 });
  }

  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
        Accept: "text/html,application/xhtml+xml",
      },
      signal: AbortSignal.timeout(6000),
    });

    const html = await res.text();

    const title = extractMeta(html, "og:title") || extractTitle(html);
    const description =
      extractMeta(html, "og:description") || extractMeta(html, "description");
    const image = resolveUrl(url, extractMeta(html, "og:image"));

    return Response.json({ title, description, image, url });
  } catch {
    return Response.json({ title: "", description: "", image: "", url });
  }
}

function extractMeta(html: string, property: string): string {
  const patterns = [
    new RegExp(
      `<meta[^>]+(?:property|name)=["']${property}["'][^>]+content=["']([^"']*?)["']`,
      "i"
    ),
    new RegExp(
      `<meta[^>]+content=["']([^"']*?)["'][^>]+(?:property|name)=["']${property}["']`,
      "i"
    ),
  ];
  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match?.[1]) return match[1];
  }
  return "";
}

function extractTitle(html: string): string {
  const match = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  return match?.[1]?.trim() ?? "";
}

function resolveUrl(base: string, relative: string): string {
  if (!relative) return "";
  try {
    return new URL(relative, base).href;
  } catch {
    return relative;
  }
}
