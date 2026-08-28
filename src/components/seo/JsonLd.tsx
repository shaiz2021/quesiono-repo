/**
 * Renders a JSON-LD graph as a script tag.
 *
 * `<` is escaped to < so a stray "</script>" inside any string field
 * cannot break out of the script element.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
