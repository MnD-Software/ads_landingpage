type MetaPixel = (command: "track" | "trackCustom", event: string, data?: Record<string, unknown>) => void;
declare global { interface Window { dataLayer?: Record<string, unknown>[]; fbq?: MetaPixel } }

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

export function campaignContext() {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return Object.fromEntries(UTM_KEYS.map(key => [key, params.get(key)]).filter(([, value]) => value));
}

export function trackEvent(event: string, data: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const payload = { page_path: window.location.pathname, page_url: window.location.href, ...data, ...campaignContext() };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
  if (!window.fbq) return;
  const customName = `CakeCity_${event.replace(/(^|_)([a-z])/g, (_match, _separator, letter: string) => letter.toUpperCase())}`;
  window.fbq("trackCustom", customName, payload);
  if (event === "catalogue_click") window.fbq("track", "ViewContent", { content_name: `${data.branch} catalogue`, content_category: "Branch catalogue", ...payload });
  if (event === "whatsapp_click") window.fbq("track", "Contact", { contact_method: "WhatsApp", ...payload });
  if (event === "phone_click") window.fbq("track", "Contact", { contact_method: "Phone", ...payload });
  if (event === "branch_search") window.fbq("track", "Search", { search_string: data.search_query, ...payload });
}
