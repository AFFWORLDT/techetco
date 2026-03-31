"use client";

import { Icon } from "@iconify/react";

const MILESTONES = [
  { 
    year: "2024", 
    title: "Idea & Foundation", 
    desc: "Conceptualized Tech ET Co in Dubai with a vision to become a trusted global trading partner.", 
    icon: "lucide:lightbulb" 
  },
  { 
    year: "2025", 
    title: "Company Establishment", 
    desc: "Officially registered in Dubai, focusing on high-end electronics, shipping, and specialized procurement.", 
    icon: "lucide:building-2" 
  },
  { 
    year: "2026", 
    title: "Market Expansion", 
    desc: "Built strong supplier networks across Asia and the Middle East, preparing for international partnerships.", 
    icon: "lucide:trending-up" 
  }
];

export function Milestone() {
  return (
    <section className="relative w-full py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-6 mb-24 max-w-4xl mx-auto">
          <div className="w-12 h-1 bg-[#ef4444] rounded-full mx-auto" />
          <h2 className="text-4xl md:text-6xl font-heading font-black text-[#122343] leading-tight tracking-tighter uppercase">
            Our Strategic <span className="text-[#2ea2f7]">Journey</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed font-normal">
             The evolution of Tech ET Co from a strategic concept to a Dubai-based global trading powerhouse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
           {/* Timeline Line Overlay (Desktop only) */}
           <div className="hidden md:block absolute top-[2.5rem] left-12 right-12 h-0.5 bg-gray-100 z-0" />
           
           {MILESTONES.map((mile, i) => (
             <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-6 group">
                <div className="w-20 h-20 rounded-full bg-[#122343] flex items-center justify-center text-white shadow-2xl transition-transform group-hover:scale-110">
                   <Icon icon={mile.icon} className="w-8 h-8" />
                </div>
                <div className="space-y-4">
                   <div className="flex flex-col items-center gap-1">
                      <span className="text-2xl font-black text-[#ef4444]">{mile.year}</span>
                      <h4 className="text-xl font-black text-[#122343] uppercase tracking-widest">{mile.title}</h4>
                   </div>
                   <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto">{mile.desc}</p>
                </div>
                {/* Red Dot Accent (Top Line Desktop) */}
                <div className="hidden md:block absolute top-[2.3rem] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#ef4444] rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity" />
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
