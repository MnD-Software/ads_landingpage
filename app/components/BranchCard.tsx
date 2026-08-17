"use client";
import { ArrowUpRight, MapPin, MessageCircle, ShoppingBag } from "lucide-react";
import type { Branch } from "@/data/branches";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export function BranchCard({ branch }: { branch: Branch; index: number }) {
  let url = "";
  try { url = createWhatsAppUrl(branch.whatsapp, branch.message); }
  catch { if (process.env.NODE_ENV === "development") console.error(`Invalid WhatsApp number for ${branch.name}`); }
  if (!url) return null;
  const click = () => trackEvent("whatsapp_click", { branch: branch.name, phone: branch.whatsapp, source: "landing_page" });
  const catalogueClick = () => trackEvent("catalogue_click", { branch: branch.name, source: "landing_page" });
  const phoneClick = () => trackEvent("phone_click", { branch: branch.name, phone: branch.whatsapp, source: "landing_page" });
  return <article className="branchCard"><div className="cardTop"><div className="locationIcon"><MapPin /></div><span className="availability"><i />Open for orders</span></div><div className="branchDetails"><h3>{branch.name}</h3><a className="phone" href={`tel:+${branch.whatsapp}`} onClick={phoneClick}>{branch.phone}</a></div><div className="cardActions"><a href={branch.catalogueUrl} onClick={catalogueClick} target="_blank" rel="noopener noreferrer" className="catalogue" aria-label={`View Cake City ${branch.name} catalogue`}><ShoppingBag /><span>View catalogue</span><ArrowUpRight /></a><a href={url} onClick={click} target="_blank" rel="noopener noreferrer" className="whatsapp" aria-label={`Chat with Cake City ${branch.name} on WhatsApp`}><MessageCircle /><span>Chat to order</span></a></div></article>;
}
