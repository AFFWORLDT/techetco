"use client";

import { Icon } from "@iconify/react";

export function ThankYou() {
  return (
    <section className="relative w-full py-32 bg-[#122343] overflow-hidden">
      {/* Cinematic Background Decorative Hub */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#ef4444]/20 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ef4444]/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center space-y-12">
        <div className="flex justify-center mb-12 animate-in zoom-in duration-1000">
           <div className="w-24 h-24 rounded-full border border-[#ef4444] bg-[#ef4444]/10 flex items-center justify-center text-[#ef4444] shadow-2xl">
              <Icon icon="lucide:check-circle-2" className="w-12 h-12" />
           </div>
        </div>

        <div className="space-y-6">
           <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-0.5 bg-[#ef4444]" />
              <span className="text-[11px] font-black uppercase text-[#2ea2f7] tracking-[0.5em]">Your Gateway to Global Trading</span>
              <div className="w-12 h-0.5 bg-[#ef4444]" />
           </div>
           
           <h2 className="text-5xl md:text-8xl font-heading font-black text-white leading-tight tracking-tighter uppercase">
             Thank <span className="text-[#2ea2f7] italic decoration-[#ef4444] underline-offset-12 underline">You</span>
           </h2>
        </div>

        <p className="text-xl md:text-2xl text-white/50 font-medium max-w-3xl mx-auto leading-relaxed">
          We appreciate your strategic inquiry. Our trade specialists will review your requirements and connect with you shortly to explore high-value partnership opportunities with <span className="text-white font-bold">Tech ET Co</span>.
        </p>

        <div className="pt-16 border-t border-white/5 max-w-xl mx-auto flex flex-col items-center gap-6">
           <p className="text-[10px] uppercase font-black text-white/30 tracking-[0.5em]">
             Tech ET Co • Dubai Global Trade Nexus
           </p>
           <button className="flex items-center gap-4 text-white font-black uppercase tracking-widest text-[10px] bg-[#ef4444] px-12 py-4 shadow-xl hover:bg-[#d93a3a] transition-all">
              BACK TO GLOBAL HUB
              <Icon icon="lucide:arrow-right" className="w-4 h-4" />
           </button>
        </div>
        
        {/* Red Vertical Bar Overlay Left */}
        <div className="absolute top-1/2 left-0 w-1 h-48 bg-[#ef4444] -translate-y-1/2 opacity-60" />
      </div>
    </section>
  );
}
