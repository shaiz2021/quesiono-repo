"use client";
import { useEffect, useState } from "react";
import { analyticsAllowed, CONSENT_KEY, trackEvent } from "@/lib/analytics";
export function AnalyticsConsent({ containerId }: { containerId?: string }) {
  const [show, setShow] = useState(false);
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    try {
      setShow(
        !localStorage.getItem(CONSENT_KEY) &&
          !(navigator as Navigator & { globalPrivacyControl?: boolean })
            .globalPrivacyControl &&
          navigator.doNotTrack !== "1",
      );
    } catch {}
    setAllowed(analyticsAllowed());
    const open = () => setShow(true);
    window.addEventListener("quesiono:privacy-settings", open);
    return () => window.removeEventListener("quesiono:privacy-settings", open);
  }, []);
  useEffect(() => {
    if (!allowed || !containerId || document.getElementById("quesiono-gtm"))
      return;
    const w = window as Window & { dataLayer?: Record<string, unknown>[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    const script = document.createElement("script");
    script.id = "quesiono-gtm";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(containerId)}`;
    document.head.appendChild(script);
  }, [allowed, containerId]);
  useEffect(() => {
    const click = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[href]");
      if (!a) return;
      const url = new URL(a.href);
      if (url.origin === location.origin && url.pathname === "/contact")
        trackEvent("cta_click", {
          source: location.pathname,
          service: url.searchParams.get("service") ?? undefined,
        });
    };
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, []);
  if (!containerId) return null;
  function choose(value: "granted" | "denied") {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {}
    setShow(false);
    setAllowed(value === "granted" && analyticsAllowed());
    if (value === "denied" && document.getElementById("quesiono-gtm"))
      location.reload();
  }
  return (
    <>
      {show && (
        <aside
          aria-label="Analytics preferences"
          className="fixed bottom-4 left-4 right-4 z-40 max-w-md rounded border border-sand bg-white p-5 text-text-dark shadow-lg"
        >
          <h2 className="text-lg font-semibold">
            Help us understand what is useful.
          </h2>
          <p className="mt-3 text-sm text-text-muted">
            Optional analytics measure page visits and enquiries. They stay off
            unless you agree.{" "}
            <a href="/cookie-policy" className="underline">
              Cookie details
            </a>
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={() => choose("denied")}
              className="min-h-11 rounded border border-sand px-4 text-sm"
            >
              Keep analytics off
            </button>
            <button
              onClick={() => choose("granted")}
              className="min-h-11 rounded bg-ink px-4 text-sm text-vanilla"
            >
              Allow analytics
            </button>
          </div>
        </aside>
      )}
      <button
        onClick={() => setShow(true)}
        className="fixed bottom-0 right-0 z-30 rounded-tl border border-sand bg-cream px-3 py-2 text-xs text-text-muted"
      >
        Privacy preferences
      </button>
    </>
  );
}
