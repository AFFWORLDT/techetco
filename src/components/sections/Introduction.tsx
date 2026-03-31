"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";

const VALUES = [
  { 
    title: "Global Connectivity", 
    desc: "Seamlessly bridging the gap between manufacturers and global trade markets.", 
    icon: "lucide:connectivity" 
  },
  { 
    title: "Trade Excellence", 
    desc: "Delivering unmatched precision in every transaction from Dubai to the world.", 
    icon: "lucide:award" 
  },
  { 
    title: "Digital Innovation", 
    desc: "Leveraging state-of-the-art trade technologies for maximum logistics efficiency.", 
    icon: "lucide:zap" 
  }
];

export function Introduction() {
  return (
    <section className="relative w-full py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          
          {/* Left Side: Professional Graphic / Image Component */}
          <div className="flex-1 relative w-full group">
            <div className="relative aspect-4/5 w-full bg-[#122343] p-1 shadow-2xl overflow-hidden group-hover:rotate-1 transition-transform">
               <Image 
                  src="/Images/dubai_corporate_hq_1774990313311.png"
                  alt="Techtrade Corporate Hub"
                  fill
                  className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
               />
            </div>
            {/* Red Border Accent */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 border-l-4 border-b-4 border-[#ef4444] z-10" />
            
            {/* Experience Badge */}
            <div className="absolute top-12 -right-12 glass p-10 bg-white/95 border border-gray-100 shadow-3xl text-center hidden md:block">
               <p className="text-4xl font-black text-[#122343] leading-none mb-2">10+</p>
               <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest leading-tight">Years of <br /> Excellence</p>
            </div>
          </div>

          {/* Right Side: Pro UI Content Block */}
          <div className="flex-1 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-0.5 bg-[#ef4444]" />
                 <span className="text-[11px] font-black text-[#122343] uppercase tracking-[0.3em]">About Tech ET Co</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-[#122343] leading-[0.95] tracking-tighter">
                Redefining <br /> <span className="text-[#2ea2f7]">Global Commerce</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed font-normal">
                At TechET Co., we believe trade is more than just business – it’s about building bridges, connecting markets, and empowering growth. Based in Dubai, the world’s hub of innovation and commerce, we specialize in electronics trading. With a passion for excellence and a commitment to transparency, TechET is your trusted partner in navigating global markets and unlocking new opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {VALUES.map((val, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-[#ef4444] group-hover:bg-[#ef4444] group-hover:text-white transition-all">
                    <Icon icon={val.icon || "lucide:check"} className="w-6 h-6" />
                  </div>
                  <div className="text-left space-y-1">
                    <h5 className="font-black text-[#122343] uppercase text-sm tracking-widest">{val.title}</h5>
                    <p className="text-gray-400 text-xs leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 flex justify-center lg:justify-start">
               <button className="flex items-center gap-4 text-[#122343] font-black uppercase tracking-widest text-xs group cursor-pointer">
                  EXPLORE OUR STORY
                  <div className="w-10 h-10 border border-[#ef4444] flex items-center justify-center rounded-full group-hover:bg-[#ef4444] group-hover:text-white transition-all">
                    <Icon icon="lucide:arrow-right" className="w-5 h-5" />
                  </div>
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
