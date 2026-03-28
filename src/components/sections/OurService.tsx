"use client";

import { Icon } from "@iconify/react";

const SERVICES = [
  { name: "Freight Forwarder", desc: "Expert logistics management for your global cargo needs.", icon: "lucide:container" },
  { name: "Haulier", desc: "Reliable land transportation and delivery solutions.", icon: "lucide:truck" },
  { name: "Free Zone Company", desc: "Comprehensive setup and trade support in Dubai's Free Zones.", icon: "lucide:building-2" },
  { name: "Clearing Agent", desc: "Efficient customs clearance and documentation services.", icon: "lucide:clipboard-check" },
  { name: "Airline Agent", desc: "Optimizing air freight and logistics across the globe.", icon: "lucide:plane" },
  { name: "Shipping Agent", desc: "Marine logistics and maritime trade expertise.", icon: "lucide:ship" }
];

export function OurService() {
  return (
    <section id="services" className="relative w-full py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-6 mb-20 animate-in fade-in duration-1000">
          <div className="w-12 h-1 bg-[#ef4444] rounded-full" />
          <h2 className="text-4xl md:text-5xl font-heading font-black text-[#122343]">
            Our Trading <span className="text-[#2ea2f7]">Expertise</span>
          </h2>
          <p className="max-w-2xl text-gray-400 text-lg leading-relaxed">
            We provide specialized digital solutions and trading support across Dubai's most vital economic sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx}
              className="relative p-12 rounded-sm border border-gray-100 bg-white hover:bg-[#122343] hover:border-[#122343] hover:shadow-2xl transition-all duration-500 group overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-[#122343]/5 flex items-center justify-center text-[#122343] mb-8 group-hover:bg-white/10 group-hover:text-white transition-all">
                  <Icon icon={service.icon} className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-black text-[#122343] mb-4 uppercase tracking-wider group-hover:text-white transition-colors">
                  {service.name}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                  {service.desc}
                </p>
                <div className="pt-8 opacity-0 group-hover:opacity-100 transform translate-x-[-20px] group-hover:translate-x-0 transition-all">
                  <Icon icon="lucide:arrow-right" className="w-6 h-6 text-[#2ea2f7]" />
                </div>
              </div>
              {/* Subtle hover background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ef4444]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
