"use client";

import { Icon } from "@iconify/react";

const SERVICES = [
  { name: "Electronics Trading", desc: "Supplying high-quality electronic devices and components with competitive pricing to meet the growing demands of global markets.", icon: "lucide:cpu" },
  { name: "Shipping & Logistics", desc: "Providing efficient end-to-end logistics solutions that ensure on-time delivery and smooth international trade operations.", icon: "lucide:ship" },
  { name: "Free Zone Company", desc: "Comprehensive setup and trade support in Dubai's Free Zones.", icon: "lucide:building-2" },
  { name: "Clearing Agent", desc: "Efficient customs clearance and documentation services.", icon: "lucide:clipboard-check" },
  { name: "Airline Agent", desc: "Optimizing air freight and logistics across the globe.", icon: "lucide:plane" },
  { name: "Market Analysis", desc: "Data-driven insights to secure your procurement pipeline.", icon: "lucide:bar-chart-3" }
];

export function OurService() {
  return (
    <section id="services" className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 mb-12 md:mb-20 animate-in fade-in duration-1000">
          <div className="w-8 md:w-12 h-1 bg-[#ef4444] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-heading font-black text-[#122343]">
            Our Trading <span className="text-[#2ea2f7]">Expertise</span>
          </h2>
          <p className="max-w-2xl text-gray-400 text-base md:text-lg leading-relaxed">
            We provide specialized digital solutions and trading support across Dubai's most vital economic sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx}
              className="relative p-8 md:p-12 rounded-sm border border-gray-100 bg-white hover:bg-[#122343] hover:border-[#122343] hover:shadow-2xl transition-all duration-500 group overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#122343]/5 flex items-center justify-center text-[#122343] mb-6 md:mb-8 group-hover:bg-white/10 group-hover:text-white transition-all">
                  <Icon icon={service.icon} className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h4 className="text-lg md:text-xl font-black text-[#122343] mb-3 md:mb-4 uppercase tracking-wider group-hover:text-white transition-colors">
                  {service.name}
                </h4>
                <p className="text-gray-400 text-[13px] md:text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                  {service.desc}
                </p>
                <div className="pt-6 md:pt-8 opacity-0 group-hover:opacity-100 transform translate-x-[-20px] group-hover:translate-x-0 transition-all">
                  <Icon icon="lucide:arrow-right" className="w-5 h-5 md:w-6 md:h-6 text-[#2ea2f7]" />
                </div>
              </div>
              {/* Subtle hover background accent */}
              <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#ef4444]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}
