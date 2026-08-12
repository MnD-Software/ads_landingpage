declare global{interface Window{dataLayer?:Record<string,unknown>[]}}
const UTM_KEYS=["utm_source","utm_medium","utm_campaign","utm_content","utm_term"] as const;
export function campaignContext(){if(typeof window==="undefined")return {};const params=new URLSearchParams(window.location.search);return Object.fromEntries(UTM_KEYS.map(key=>[key,params.get(key)]).filter(([,value])=>value))}
export function trackEvent(event:string,data:Record<string,unknown>={}){if(typeof window==="undefined")return;window.dataLayer=window.dataLayer||[];window.dataLayer.push({event,...data,...campaignContext()})}
