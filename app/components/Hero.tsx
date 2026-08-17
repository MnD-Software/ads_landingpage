"use client";
import Image from "next/image";
import { ArrowDown, Check, ExternalLink, MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function Hero() {
  const branchHref = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/branches`;
  return (
    <section className="hero" id="top">
      <header>
        <a className="wordmark" href="#top" aria-label="Cake City home">
          <Image src="/images/cake-city-web-logo.png" alt="Cake City — The Cake Experts" width={803} height={381} priority />
        </a>
        <a className="websiteLink" href="https://cakecity.co.ke/" target="_blank" rel="noopener noreferrer">
          Visit our website <ExternalLink />
        </a>
      </header>

      <div className="heroGrid">
        <div className="heroCopy">
          <span className="overline">DIRECT BRANCH ORDERING</span>
          <h1>Your cake.<br />Your branch.<br /><em>Your moment.</em></h1>
          <p>Choose your nearest Cake City branch, start a WhatsApp chat, and plan something delicious with the team who will make it.</p>
          <div className="heroActions">
            <a className="heroCta" href={branchHref} onClick={() => trackEvent("branch_cta_click", { placement: "hero" })}><span className="heroCtaLogo"><Image src="/images/cake-city-web-logo.png" alt="" width={803} height={381} /></span><span>Find my branch</span><ArrowDown /></a>
            <span className="heroWhatsApp"><MessageCircle /> Orders handled on WhatsApp</span>
          </div>
          <div className="heroProof" aria-label="Ordering benefits">
            <span><Check /> 13 convenient branches</span>
            <span><Check /> Direct local assistance</span>
            <span><Check /> Custom cake enquiries</span>
          </div>
        </div>

        <div className="cakeStage promoStage">
          <div className="promoImageWrap">
            <Image src="/images/august-mouthgasms-2026.jpeg" alt="Cake City August Mouthgasms offer — 10% off whole cakes from 1st to 31st August 2026" width={2560} height={2560} priority />
          </div>
        </div>
      </div>
    </section>
  );
}
