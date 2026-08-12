"use client";
import {useEffect} from "react";import {Hero} from "./Hero";import {BranchSelector} from "./BranchSelector";import {TrustSection} from "./TrustSection";import {Footer} from "./Footer";import {MobileStickyCTA} from "./MobileStickyCTA";import {trackEvent} from "@/lib/analytics";
export function LandingPage(){useEffect(()=>trackEvent("page_view",{source:"landing_page"}),[]);return <main><Hero/><BranchSelector/><TrustSection/><Footer/><MobileStickyCTA/></main>}
