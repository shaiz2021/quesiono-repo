"use client";
import { useEffect } from "react";
/** Session-only source context, sent solely with an enquiry. No advertising IDs. */
export function Attribution() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem("quesiono-attribution")) return;
      const query = new URLSearchParams(location.search);
      const data: Record<string, string> = { landing: location.pathname };
      for (const key of [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_content",
        "utm_term",
      ]) {
        const value = query.get(key);
        if (value) data[key] = value.slice(0, 150);
      }
      if (document.referrer) {
        try {
          data.referrer = new URL(document.referrer).origin;
        } catch {}
      }
      sessionStorage.setItem("quesiono-attribution", JSON.stringify(data));
    } catch {}
  }, []);
  return null;
}
