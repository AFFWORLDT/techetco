"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export function BulkOrderForm() {
  return (
    <section className="relative w-full py-32 bg-[#122343] overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-[#ef4444]/5 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
         <motion.div 
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="lg:w-1/2 space-y-6"
         >
            <div className="flex items-center gap-4">
               <div className="w-12 h-0.5 bg-[#ef4444]" />
               <span className="text-[11px] font-black uppercase text-[#2ea2f7] tracking-[0.5em]">Enterprise Only</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
               Secure <span className="text-[#ef4444]">High-Volume</span> Supply Contracts
            </h2>
            <p className="text-white/50 leading-relaxed text-lg">
               Submit your specific component requirements. Our trading desk guarantees priority allocation and uncompromised quality assurance for orders exceeding 50,000 units.
            </p>
            <ul className="space-y-4 pt-4 text-sm font-bold text-white uppercase tracking-wide">
               <li className="flex items-center gap-3"><Icon icon="lucide:check-circle" className="text-[#2ea2f7]" /> Priority Customs Clearance</li>
               <li className="flex items-center gap-3"><Icon icon="lucide:check-circle" className="text-[#2ea2f7]" /> Direct OEM Sourcing</li>
               <li className="flex items-center gap-3"><Icon icon="lucide:check-circle" className="text-[#2ea2f7]" /> Escrow Protection Available</li>
            </ul>
         </motion.div>

         <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="lg:w-[500px] w-full bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl"
         >
            <h3 className="text-2xl font-black text-white uppercase mb-8">Submit Bulk Inquiry</h3>
            <form className="space-y-6">
               <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Component Name / SKU</label>
                    <input type="text" required className="w-full bg-black/20 border-b border-white/10 py-3 text-white focus:border-[#ef4444] outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Target Volume</label>
                    <input type="number" required placeholder="50,000+" className="w-full bg-black/20 border-b border-white/10 py-3 text-white focus:border-[#ef4444] outline-none transition-colors" />
                  </div>
               </div>
               <div>
                  <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Required Delivery Date</label>
                  <input type="date" required className="w-full bg-black/20 border-b border-white/10 py-3 text-white/50 focus:text-white focus:border-[#ef4444] outline-none transition-colors" />
               </div>
               <div>
                  <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Corporate Email</label>
                  <input type="email" required className="w-full bg-black/20 border-b border-white/10 py-3 text-white focus:border-[#ef4444] outline-none transition-colors" />
               </div>
               <button className="w-full bg-[#ef4444] text-white py-4 font-black uppercase tracking-widest text-xs hover:bg-[#2ea2f7] transition-all flex justify-center items-center gap-2">
                 Request Trading Quote <Icon icon="lucide:arrow-right" />
               </button>
            </form>
         </motion.div>
      </div>
    </section>
  );
}
