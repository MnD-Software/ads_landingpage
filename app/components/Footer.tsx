import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return <footer><div className="footerInner"><div className="footerBrand"><a href="#top" aria-label="Cake City home"><span className="footerBrandIcon"><Image src="/images/cake-city-web-logo.png" alt="" width={803} height={381} /></span><b>CAKE CITY</b></a><p>Celebrating life&apos;s sweet moments.</p></div><div className="footerLinks"><span>ORDER &amp; DISCOVER</span><a href="#branches">Find your branch</a><a href="https://cakecity.co.ke/" target="_blank" rel="noopener noreferrer">Visit cakecity.co.ke <ArrowUpRight /></a></div><div className="footerMeta"><p>© {new Date().getFullYear()} Cake City Kenya</p><small>Made for sweet moments.</small></div></div></footer>;
}
