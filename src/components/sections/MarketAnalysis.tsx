"use client";

import { Icon } from "@iconify/react";

const ANALYTICAL_METRICS = [
  { label: "E-Commerce", value: "25%", color: "#ef4444", growth: "+12%" },
  { label: "Electronics", value: "25%", color: "#2ea2f7", growth: "+8.5%" },
  { label: "Shipping", value: "25%", color: "#122343", growth: "+15.2%" },
  { label: "Market Analysis", value: "25%", color: "#6c757d", growth: "+5.1%" }
];

export function MarketAnalysis() {
  return (
    <section className="relative w-full py-16 md:py-32 bg-[#f8f9fa] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-24">
          
          {/* Left Side: Professional analytical visualization */}
          <div className="flex-1 space-y-8 md:space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                 <div className="w-8 md:w-12 h-1 bg-[#ef4444] rounded-full" />
                 <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#122343]">Market Performance</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-heading font-black text-[#122343] leading-tight tracking-tighter uppercase">
                 Driving the <span className="text-[#2ea2f7]">Trade</span> Equilibrium
              </h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed font-normal max-w-xl">
                 Based in Dubai, we harness global trade momentum through data-driven logistics and precision procurement strategies. Our market growth is defined by strategic agility and high-value partnerships.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 pt-4 md:pt-8">
               {ANALYTICAL_METRICS.map((p, i) => (
                  <div key={i} className="bg-white p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#2ea2f7] transition-all group">
                     <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] uppercase font-black text-gray-400 tracking-widest">{p.label}</span>
                        <span className="text-[#2ea2f7] text-[10px] font-bold">{p.growth}</span>
                     </div>
                     <div className="flex items-center justify-between">
                        <span className="text-2xl md:text-3xl font-black text-[#122343]">{p.value}</span>
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-50 flex items-center justify-center text-[#ef4444] group-hover:bg-[#ef4444] group-hover:text-white transition-all">
                           <Icon icon="lucide:arrow-up-right" className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
          </div>

          {/* Right Side: Visual Data Dashboard */}
          <div className="flex-1 w-full relative max-w-2xl lg:max-w-none mx-auto">
             <div className="relative aspect-square md:aspect-4/3 bg-[#122343] p-8 md:p-12 overflow-hidden shadow-2xl flex flex-col justify-between">
                <div className="space-y-2">
                   <h4 className="text-white font-black uppercase text-lg md:text-xl tracking-tighter">Global Trade Reach</h4>
                   <p className="text-[8px] md:text-[10px] uppercase font-bold text-white/40 tracking-[0.3em] md:tracking-[0.4em]">Real-time Market Sync</p>
                </div>

                <div className="flex-1 flex items-center justify-center py-8 md:py-12">
                   {/* Clean SVG Infographic */}
                   <div className="relative w-48 h-48 md:w-64 md:h-64">
                      {/* Outer Ring */}
                      <div className="absolute inset-0 rounded-full border-4 border-white/5 border-dashed animate-spin-slow" />
                      <div className="absolute inset-4 rounded-full border border-white/10" />
                      
                      {/* Center Hub */}
                      <div className="absolute inset-8 md:inset-12 rounded-full bg-[#ef4444] flex flex-col items-center justify-center text-center shadow-2xl z-10">
                         <Icon icon="lucide:globe" className="w-6 h-6 md:w-8 md:h-8 text-white mb-1" />
                         <span className="text-xl md:text-2xl font-black text-white">92%</span>
                         <span className="text-[7px] md:text-[8px] uppercase font-bold text-white/80">Active</span>
                      </div>

                      {/* Radar Effect */}
                      <div className="absolute inset-0 bg-linear-to-tr from-[#2ea2f7]/20 to-transparent rounded-full animate-radar" />
                   </div>
                </div>

                <div className="pt-6 md:pt-8 border-t border-white/10 grid grid-cols-2 gap-4 text-center">
                   <div>
                      <p className="text-lg md:text-xl text-white font-black">500+</p>
                      <p className="text-[8px] md:text-[9px] uppercase text-white/40 font-bold tracking-widest">Trade Units</p>
                   </div>
                   <div>
                      <p className="text-lg md:text-xl text-white font-black">100%</p>
                      <p className="text-[8px] md:text-[9px] uppercase text-white/40 font-bold tracking-widest">Reliability</p>
                   </div>
                </div>

                {/* Decorative Red Accent */}
                <div className="absolute -bottom-6 -right-6 w-20 h-20 md:w-24 md:h-24 bg-[#ef4444]/20 rounded-full blur-2xl" />
             </div>
             
             {/* Red Vertical Bar Accent Overlay */}
             <div className="hidden lg:block absolute top-[20%] -left-1 w-1 h-[60%] bg-[#ef4444]" />
          </div>

        </div>
      </div>
    </section>

  );
}
