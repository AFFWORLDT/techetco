"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function CorporatePage() {
  return (
    <main className="w-full min-h-screen bg-[#050A15] pt-32 pb-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 -right-64 w-[800px] h-[800px] bg-[#ef4444]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <Link href="/" className="group inline-flex items-center gap-4 text-white font-black uppercase tracking-widest text-[10px] mb-12">
           <div className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full group-hover:bg-[#ef4444] group-hover:border-[#ef4444] transition-all">
             <Icon icon="lucide:arrow-left" className="w-4 h-4" />
           </div>
           Return to Hub
        </Link>

        {/* Header Section */}
        <div className="space-y-6 mb-16 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="flex items-center gap-4">
             <div className="w-12 h-1 bg-[#ef4444] rounded-full" />
             <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#2ea2f7]">Corporate Governance</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white leading-tight tracking-tighter uppercase">
             HTML Sitemap
          </h1>
          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
             <span className="text-[10px] text-white/40 uppercase font-black tracking-widest">Last Updated:</span>
             <span className="text-[#ef4444] text-[10px] uppercase font-black tracking-widest">April 01, 2026</span>
          </div>
        </div>

        {/* Prose Content */}
        <div className="prose prose-xl prose-invert max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-a:text-[#2ea2f7] prose-p:text-white/60 leading-relaxed animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-150">
           <h2>1. Introduction & Scope</h2>
           <p>
             At Tech ET Co, operating across the global trans-pacific and Middle Eastern corridors mandates an uncompromising commitment to legal compliance, data security, and operational ethics. This document outlines the fundamental principles and operational directives governing our interaction within the international trade ecosystem.
           </p>
           
           <h2>2. Operational Oversight</h2>
           <p>
             As a central node in Dubai’s electronics logistics network, we rigorously enforce standards that meet and exceed international import/export requirements. Our procurement frameworks process vast quantities of sensitive infrastructure and metadata. To ensure absolute transparency, our executive liaison teams maintain continuous audits.
           </p>

           <blockquote>
             "Integrity in global logistics is not a legal obligation; it is the structural foundation of our enterprise network." — Tech ET Co Compliance Board
           </blockquote>

           <h2>3. Data & Material Handling</h2>
           <p>
             Whether handling encrypted enterprise telemetry, clearing physical silicon shipments through customs, or managing multi-modal freight ledgers, our operating thresholds remain consistent. We deploy zero-trust data architectures and enforce strict vendor-vetting parameters. 
           </p>

           <ul>
             <li>Mandatory ISO certification enforcement across all Tier-1 suppliers.</li>
             <li>End-to-end encryption of all digital procurement communications.</li>
             <li>Rigorous adherence to local and international trade embargos.</li>
           </ul>

           <h2>4. Policy Amendments</h2>
           <p>
             Tech ET Co reserves the right to modify these governance structures in tandem with evolving global regulatory matrices. Stakeholders and clients will be advised of substantial operational pivots through secure channels.
           </p>
           
           <hr className="border-white/10 my-16" />
           <p className="text-sm italic">
             For direct inquiries regarding this specific compliance framework, please contact our Legal & Operations Desk at <a href="mailto:compliance@techetco.com">compliance@techetco.com</a>.
           </p>
        </div>
      </div>
    </main>
  );
}
