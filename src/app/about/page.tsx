"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { Introduction } from "@/components/sections/Introduction";
import { OurVision } from "@/components/sections/OurVision";
import { Milestone } from "@/components/sections/Milestone";

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* About Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] bg-[#122343] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <Image 
              src="/Images/intro.png"
              alt="Tech ET Co Corporate"
              fill
              className="object-cover"
           />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-[#122343]/90 to-[#122343] z-10" />
        
        <div className="container mx-auto px-6 relative z-20 text-center space-y-6">
           <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-0.5 bg-[#ef4444]" />
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#2ea2f7]">Enterprise Authority</span>
              <div className="w-12 h-0.5 bg-[#ef4444]" />
           </div>
           <h1 className="text-5xl md:text-8xl font-heading font-black text-white leading-tight tracking-tighter uppercase mb-4">
              About <br /> <span className="text-[#2ea2f7] italic decoration-[#ef4444] underline-offset-12 underline">Tech ET Co</span>
           </h1>
           <p className="text-lg text-white/50 leading-relaxed max-w-2xl mx-auto font-normal">
              Redefining global commerce through localized expertise, logistics agility, and state-of-the-art electronics trading from the heart of Dubai.
           </p>
        </div>
        
        {/* Signature Red Accent Bar Support */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#ef4444]" />
      </section>

      {/* Re-using Strategic Corporate Components */}
      <Introduction />
      <OurVision />
      <Milestone />

      {/* Corporate Values Grid */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { label: "Integrity", desc: "Transparent business practices at every level of the global trade corridor.", icon: "lucide:shield-check" },
                { label: "Precision", desc: "Minute-level accuracy in procurement and international logistics scheduling.", icon: "lucide:target" },
                { label: "Momentum", desc: "Driving continuous growth through strategic partnerships and agile trading.", icon: "lucide:trending-up" }
              ].map((val, i) => (
                <div key={i} className="bg-white p-12 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-[#ef4444] transition-all group">
                   <div className="w-16 h-16 rounded-full bg-[#122343]/5 flex items-center justify-center text-[#ef4444] mb-8 group-hover:bg-[#ef4444] group-hover:text-white transition-all">
                      <Icon icon={val.icon} className="w-8 h-8" />
                   </div>
                   <h4 className="text-2xl font-black text-[#122343] mb-4 uppercase tracking-tighter">{val.label}</h4>
                   <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </main>
  );
}
