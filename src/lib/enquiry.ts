/** Only deliberate, non-personal context is carried into the enquiry URL. */
export function enquiryHref(
  service?: string,
  source?: string,
  intent?: string,
) {
  const query = new URLSearchParams();
  if (service) query.set("service", service);
  if (source) query.set("source", source);
  if (intent) query.set("intent", intent);
  return `/contact${query.size ? `?${query}` : ""}`;
}
