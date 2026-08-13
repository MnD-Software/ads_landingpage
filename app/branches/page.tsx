import type { Metadata } from "next";
import Image from "next/image";
import { BranchSelector } from "@/app/components/BranchSelector";

export const metadata: Metadata = {
  title: "Choose a Cake City Branch | WhatsApp Ordering",
  description: "Choose your nearest Cake City branch, browse its catalogue, or order directly on WhatsApp.",
};

export default function BranchesPage() {
  return <main className="directBranchPage">
    <header className="directBranchHeader">
      <a href="/" aria-label="Cake City home"><Image src="/images/cake-city-web-logo.png" alt="Cake City" width={803} height={381} priority /></a>
      <span>Choose a branch</span>
    </header>
    <BranchSelector direct />
  </main>;
}
