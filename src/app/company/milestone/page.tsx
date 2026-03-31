"use client";

import { motion } from "framer-motion";
import { SupplierVettingLead } from "@/components/sections/forms/SupplierVettingLead";

export default function MilestonePage() {
  const milestones = [
    { year: "2024", title: "Idea & Foundation", desc: "Conceptualized Tech ET Co in Dubai with a vision to become a trusted global trading partner." },
    { year: "2025", title: "Company Establishment", desc: "Officially registered in Dubai, focusing on high-end electronics, shipping, and specialized procurement." },
    { year: "2026", title: "Market Expansion", desc: "Built strong supplier networks across Asia and the Middle East, preparing for international partnerships." }
  ];

  return (
    <main className="w-full min-h-screen bg-[#122343] pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-5xl">
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
         >
            <h1 className="text-5xl md:text-8xl font-heading font-black text-white leading-tight tracking-tighter uppercase mb-4">
               Our <span className="text-[#ef4444] italic">Milestones</span>
            </h1>
         </motion.div>

         <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-white/20 before:to-transparent">
            {milestones.map((m, i) => (
              <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                 <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/50 bg-[#122343] text-[#ef4444] group-hover:bg-[#ef4444] group-hover:text-white group-hover:border-[#ef4444] transition-all shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <div className="w-2 h-2 bg-current rounded-full" />
                 </div>
                 <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 border border-white/10 p-6 rounded-sm shadow-xl hover:bg-white/10 transition-all">
                    <div className="flex items-center justify-between mb-2">
                       <h3 className="font-bold text-white text-xl uppercase tracking-widest">{m.title}</h3>
                       <span className="text-[#2ea2f7] font-black text-2xl">{m.year}</span>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">{m.desc}</p>
                 </div>
              </motion.div>
            ))}
         </div>
         <div className="mt-32">
            <SupplierVettingLead />
         </div>
      </div>
    </main>
  );
}
