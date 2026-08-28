import { ImageResponse } from "next/og";

export const runtime = "edge";

/* Palette mirrors tailwind.config.ts. Satori can't read Tailwind, so these are
   the only hardcoded hex values in the project — keep them in step by hand. */
const ink = "#0B0F1C";
const midnight = "#1A2038";
const indigo = "#2B3459";
const champagne = "#C9A961";
const vanilla = "#F2EADA";
const sand = "#E3D6BE";

type CardType = "default" | "service" | "article" | "work";

const badges: Record<CardType, string> = {
  default: "Web Design & Digital Agency",
  service: "Service",
  article: "From the journal",
  work: "Case study",
};

const isCardType = (value: string | null): value is CardType =>
  value === "default" || value === "service" || value === "article" || value === "work";

/**
 * Title size by length. Satori has no text measurement, so this is the trick
 * that stops a 90-character service title running off the card.
 */
function titleSize(length: number): number {
  if (length <= 30) return 82;
  if (length <= 48) return 70;
  if (length <= 72) return 58;
  if (length <= 104) return 48;
  return 42;
}

/**
 * Fetches a static TTF from Google Fonts. Satori needs TTF or WOFF — the old
 * user agent is what makes the CSS API hand back TTF instead of WOFF2.
 *
 * Returns null rather than throwing: a card in the fallback sans is a much
 * better outcome than a 500 where a social preview should be.
 */
async function loadFont(family: string, weight: number): Promise<ArrayBuffer | null> {
  try {
    const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
      family
    )}:wght@${weight}`;

    const css = await fetch(cssUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko",
      },
    }).then((response) => (response.ok ? response.text() : ""));

    const url = /src:\s*url\((https:\/\/[^)]+)\)/.exec(css)?.[1];
    if (!url) return null;

    const font = await fetch(url);
    if (!font.ok) return null;

    return await font.arrayBuffer();
  } catch {
    return null;
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const title =
      searchParams.get("title")?.slice(0, 140) ||
      "Web design and SEO that earns its keep";
    const eyebrow = searchParams.get("eyebrow")?.slice(0, 48) ?? "";
    const typeParam = searchParams.get("type");
    const type: CardType = isCardType(typeParam) ? typeParam : "default";

    const [displayFont, bodyFont] = await Promise.all([
      loadFont("Bricolage Grotesque", 800),
      loadFont("Inter", 500),
    ]);

    const fonts = [
      displayFont ? { name: "Display", data: displayFont, weight: 800 as const, style: "normal" as const } : null,
      bodyFont ? { name: "Body", data: bodyFont, weight: 500 as const, style: "normal" as const } : null,
    ].filter(Boolean) as {
      name: string;
      data: ArrayBuffer;
      weight: 500 | 800;
      style: "normal";
    }[];

    const display = displayFont ? "Display" : "sans-serif";
    const body = bodyFont ? "Body" : "sans-serif";

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: ink,
            backgroundImage: `radial-gradient(900px 520px at 88% -12%, ${indigo} 0%, rgba(11,15,28,0) 62%), radial-gradient(620px 420px at -8% 108%, ${midnight} 0%, rgba(11,15,28,0) 70%)`,
            padding: "64px 72px",
            fontFamily: body,
          }}
        >
          {/* ------------------------------------------------------ top row -- */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "18px",
                  border: `2px solid ${champagne}`,
                  color: champagne,
                  fontSize: "34px",
                  fontFamily: display,
                  fontWeight: 800,
                }}
              >
                Q
              </div>
              <div
                style={{
                  color: vanilla,
                  fontSize: "26px",
                  fontFamily: display,
                  fontWeight: 800,
                  letterSpacing: "0.06em",
                }}
              >
                QUESIONO
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 24px",
                borderRadius: "999px",
                border: `1px solid rgba(242,234,218,0.18)`,
                color: sand,
                fontSize: "20px",
                letterSpacing: "0.04em",
              }}
            >
              {badges[type]}
            </div>
          </div>

          {/* -------------------------------------------------------- title -- */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "28px" }}>
            <div
              style={{
                display: "flex",
                width: "6px",
                height: `${Math.min(title.length > 48 ? 260 : 180, 300)}px`,
                borderRadius: "999px",
                backgroundColor: champagne,
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", maxWidth: "940px" }}>
              {eyebrow ? (
                <div
                  style={{
                    color: champagne,
                    fontSize: "22px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    marginBottom: "22px",
                  }}
                >
                  {eyebrow}
                </div>
              ) : null}
              <div
                style={{
                  color: vanilla,
                  fontSize: `${titleSize(title.length)}px`,
                  fontFamily: display,
                  fontWeight: 800,
                  lineHeight: 1.06,
                  letterSpacing: "-0.02em",
                }}
              >
                {title}
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------- bottom -- */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: `1px solid rgba(242,234,218,0.14)`,
              paddingTop: "28px",
            }}
          >
            <div style={{ color: vanilla, fontSize: "24px", letterSpacing: "0.02em" }}>
              quesiono.com
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              {["Design", "Build", "Rank"].map((word, index) => (
                <div
                  key={word}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    color: index === 2 ? champagne : "rgba(242,234,218,0.55)",
                    fontSize: "22px",
                  }}
                >
                  {index > 0 ? (
                    <div
                      style={{
                        display: "flex",
                        width: "5px",
                        height: "5px",
                        borderRadius: "999px",
                        backgroundColor: "rgba(201,169,97,0.6)",
                      }}
                    />
                  ) : null}
                  {word}
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: fonts.length ? fonts : undefined,
      }
    );
  } catch (error) {
    console.error(`OG image failed: ${error}`);
    return new Response("Failed to generate image", { status: 500 });
  }
}
