"use client";

import { Icon } from "@iconify/react";

const STRATEGIC_POINTS = [
  { 
    title: "Market Access", 
    desc: "Unlocking seamless entry into Dubai’s global trade ecosystem for electronics and beyond.", 
    icon: "lucide:globe" 
  },
  { 
    title: "Logistics Agility", 
    desc: "Implementing state-of-the-art logistics protocols for rapid, secure, and reliable shipping.", 
    icon: "lucide:truck" 
  },
  { 
    title: "Client Centricity", 
    desc: "Building long-term, high-value partnerships through transparency and strategic support.", 
    icon: "lucide:users" 
  }
];

export function OurVision() {
  return (
    <section className="relative w-full py-32 bg-[#122343] text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          
          {/* Left Side: Strategic Insight Content Block */}
          <div className="flex-1 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-0.5 bg-[#ef4444]" />
                 <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2ea2f7]">Our Vision</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-black leading-tight tracking-tight drop-shadow-2xl">
                Elevating the Standard of <br /> <span className="text-white italic opacity-80 decoration-[#ef4444] decoration-2 underline-offset-8 underline">Trade Intelligence</span>
              </h2>
              <p className="text-lg text-white/50 leading-relaxed font-normal max-w-xl">
                 At Tech ET Co, our vision is to establish a frictionless global trading network where technology and logistics converge to empower every partner.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {STRATEGIC_POINTS.map((point, i) => (
                  <div key={i} className="bg-white/5 p-8 rounded-sm hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all group">
                     <Icon icon={point.icon} className="w-8 h-8 text-[#2ea2f7] mb-6 group-hover:scale-110 transition-transform" />
                     <h5 className="font-black uppercase text-sm tracking-widest text-white mb-2">{point.title}</h5>
                     <p className="text-white/40 text-[11px] leading-relaxed">{point.desc}</p>
                  </div>
               ))}
            </div>
          </div>

          {/* Right Side: Visual Graphical Element (Trade Metrics) */}
          <div className="flex-1 w-full relative">
             <div className="relative aspect-square md:aspect-4/3 bg-white/5 p-12 overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#ef4444]/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#2ea2f7]/10 rounded-full blur-[80px]" />
                
                <div className="relative h-full flex flex-col items-center justify-center text-center space-y-8">
                   <div className="w-24 h-24 bg-[#ef4444] rounded-full flex items-center justify-center text-white shadow-xl animate-pulse">
                      <Icon icon="lucide:chart-pie" className="w-12 h-12" />
                   </div>
                   <div className="space-y-2">
                      <h4 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Strategic Impact</h4>
                      <p className="text-[10px] uppercase font-black text-[#2ea2f7] tracking-[0.5em]">Future Trade Hub</p>
                   </div>
                   <div className="flex items-center gap-12 pt-8">
                      <div className="text-center">
                         <p className="text-2xl font-black text-white leading-none">Global</p>
                         <p className="text-[10px] uppercase text-white/40 font-bold mt-1">Network</p>
                      </div>
                      <div className="w-px h-12 bg-white/10" />
                      <div className="text-center">
                         <p className="text-2xl font-black text-white leading-none">Agile</p>
                         <p className="text-[10px] uppercase text-white/40 font-bold mt-1">Logistics</p>
                      </div>
                   </div>
                </div>
             </div>
             
             {/* Red Vertical Bar Overlay */}
             <div className="hidden lg:block absolute top-12 -right-6 w-1 h-[70%] bg-[#ef4444]" />
          </div>

        </div>
      </div>
    </section>
  );
}
