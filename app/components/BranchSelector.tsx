"use client";
import { useMemo, useState } from "react";
import { MessageCircle, Search, Store } from "lucide-react";
import { branches } from "@/data/branches";
import { BranchCard } from "./BranchCard";
import { trackEvent } from "@/lib/analytics";

export function BranchSelector({ direct = false }: { direct?: boolean }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => branches.filter(branch => branch.name.toLowerCase().includes(query.trim().toLowerCase())), [query]);

  return <section className={`branchSection${direct ? " directBranches" : ""}`} id="branches">
    {!direct && <div className="steps" aria-label="How ordering works">
      <div><span>01</span><Store /><p><b>Pick a branch</b><small>Choose the location nearest to you.</small></p></div>
      <div><span>02</span><MessageCircle /><p><b>Start a chat</b><small>Open a direct WhatsApp conversation.</small></p></div>
      <div><span>03</span><span className="cakeGlyph">✦</span><p><b>Plan your cake</b><small>Share the occasion, size and design.</small></p></div>
    </div>}
    {!direct && <div className="sectionIntro">
      <span>FIND YOUR NEAREST CAKE CITY BRANCH</span>
      <h2>Cake City is closer<br />than you think.</h2>
      <p>Search your area or browse all 13 branches below.</p>
    </div>}
    <label className="branchSearch"><Search /><span className="srOnly">Search branches</span><input value={query} onChange={event => { setQuery(event.target.value); trackEvent("branch_search", { search_length: event.target.value.length }); }} placeholder="Try ‘Kilimani’ or ‘Westlands’" /><kbd>{filtered.length} {filtered.length === 1 ? "branch" : "branches"}</kbd></label>
    {filtered.length ? <div className="branchGrid">{filtered.map((branch, index) => <BranchCard branch={branch} index={index} key={branch.name} />)}</div> : <div className="noResults"><b>No branch found for “{query}”</b><p>Try a nearby area or clear your search to see every branch.</p><button onClick={() => setQuery("")}>Show all branches</button></div>}
  </section>;
}
