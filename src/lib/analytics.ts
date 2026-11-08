"use client";
export const CONSENT_KEY = "quesiono-analytics-consent";
export function analyticsAllowed() {
  if (typeof window === "undefined") return false;
  const nav = navigator as Navigator & { globalPrivacyControl?: boolean };
  if (nav.globalPrivacyControl || navigator.doNotTrack === "1") return false;
  try {
    return localStorage.getItem(CONSENT_KEY) === "granted";
  } catch {
    return false;
  }
}
/** No names, email addresses, free text, URLs with query strings, or budget values. */
export function trackEvent(
  event:
    | "enquiry_start"
    | "enquiry_submit"
    | "enquiry_success"
    | "enquiry_error"
    | "cta_click",
  details: { service?: string; source?: string; kind?: string } = {},
) {
  if (!analyticsAllowed()) return;
  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  const safe = {
    service: details.service?.slice(0, 80),
    source: details.source?.split(/[?#]/)[0].slice(0, 200),
    kind: details.kind?.slice(0, 40),
  };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...safe });
}
