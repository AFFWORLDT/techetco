"use client";

import { Icon } from "@iconify/react";

const ROLES = [
  { name: "Freight Forwarder", icon: "lucide:container" },
  { name: "Haulier", icon: "lucide:truck" },
  { name: "Free Zone Company", icon: "lucide:building-2" },
  { name: "Clearing Agent", icon: "lucide:clipboard-check" },
  { name: "Airline Agent", icon: "lucide:plane" },
  { name: "Shipping Agent", icon: "lucide:ship" },
  { name: "Cargo Owner", icon: "lucide:package-check" }
];

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-40 md:py-32 lg:py-20 overflow-hidden bg-[#122343]">
      {/* Cinematic Background Video Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60 scale-105"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-[#122343]/80 via-transparent to-[#122343]/90 z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center space-y-12 md:space-y-20">
        <div className="space-y-6 pt-10 md:pt-20">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-heading font-black text-white leading-tight tracking-tighter drop-shadow-2xl">
            Empowering <br />
            <span className="text-[#2ea2f7] text-glow">Global Trade</span>
          </h1>
          <p className="text-sm md:text-xl text-white/80 font-medium tracking-wide max-w-3xl mx-auto leading-relaxed">
            Welcome to Techtrade Hub. Your premier partner in high-end electronics trading and seamless global logistics, headquartered in the heart of Dubai.
          </p>
        </div>

        {/* Roles Navigation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-y-8 gap-x-4 md:gap-y-12 md:gap-x-6 pt-12 border-t border-white/5 bg-[#122343]/50 backdrop-blur-3xl rounded-[2rem] p-6 md:p-12">
          {ROLES.map((role) => (
            <button 
              key={role.name}
              className="flex flex-col items-center gap-4 md:gap-6 group hover:-translate-y-2 transition-transform cursor-pointer"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white/20 flex items-center justify-center text-white/60 group-hover:text-white group-hover:border-[#2ea2f7] transition-all bg-white/5 relative">
                 <Icon icon={role.icon} className="w-6 h-6 md:w-8 md:h-8" />
                 <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#ef4444] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-[9px] md:text-[11px] font-black text-white/70 group-hover:text-white tracking-widest uppercase text-center leading-relaxed max-w-[80px] md:max-w-[100px]">
                {role.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Techtrade Performance Section - Global Impact */}
      <div className="absolute bottom-0 left-0 w-full bg-white/95 text-[#122343] py-6 md:py-10 shadow-2xl z-30">
        <div className="container mx-auto px-6 text-center space-y-4 md:space-y-6">
          <h3 className="text-[10px] md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-80">
            Techtrade Hub • Strategic Global Growth Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 max-w-5xl mx-auto pt-2 md:pt-4 relative">
             {/* Red accent line in middle - hidden on mobile */}
             <div className="absolute top-10 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#ef4444]/40 hidden md:block" />
             
             <div className="flex items-center justify-center md:justify-start lg:justify-center gap-4">
               <Icon icon="lucide:globe" className="w-6 h-6 md:w-8 md:h-8 text-[#ef4444]" />
               <div className="text-left">
                  <p className="text-2xl md:text-3xl font-black leading-none">92%</p>
                  <p className="text-[8px] md:text-[10px] uppercase font-bold text-gray-400">Global Trade Reach</p>
               </div>
             </div>
             <div className="flex items-center justify-center md:justify-start lg:justify-center gap-4">
               <Icon icon="lucide:cpu" className="w-6 h-6 md:w-8 md:h-8 text-[#ef4444]" />
               <div className="text-left">
                  <p className="text-2xl md:text-3xl font-black leading-none">500+</p>
                  <p className="text-[8px] md:text-[10px] uppercase font-bold text-gray-400">Tech Trading Units</p>
               </div>
             </div>
             <div className="flex items-center justify-center md:justify-start lg:justify-center gap-4">
               <Icon icon="lucide:map-pin" className="w-6 h-6 md:w-8 md:h-8 text-[#ef4444]" />
               <div className="text-left">
                  <p className="text-2xl md:text-3xl font-black leading-none">Dubai</p>
                  <p className="text-[8px] md:text-[10px] uppercase font-bold text-gray-400">Global Headquarters</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>

  );
}
