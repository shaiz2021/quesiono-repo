import { Instagram, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Social marks. LinkedIn and Instagram come from lucide; X is hand-authored
 * because lucide's Twitter glyph is the old bird and no longer matches the brand.
 */
export function SocialIcon({
  name,
  className,
}: {
  name: "linkedin" | "instagram" | "x";
  className?: string;
}) {
  if (name === "linkedin") return <Linkedin className={className} aria-hidden />;
  if (name === "instagram") return <Instagram className={className} aria-hidden />;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn(className)}
      aria-hidden
      focusable="false"
    >
      <path d="M17.53 3h3.2l-6.99 7.99L22 21h-6.4l-4.62-6.04L5.6 21H2.4l7.3-8.34L2 3h6.4l4.34 5.74L17.53 3Zm-1.12 16h1.77L7.68 4.76H5.78L16.41 19Z" />
    </svg>
  );
}
