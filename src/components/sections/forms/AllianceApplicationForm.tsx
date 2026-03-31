"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export function AllianceApplicationForm() {
  return (
    <section className="py-32 bg-[#0F111A] text-white overflow-hidden relative border-t border-white/5">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
         >
            <h2 className="text-5xl font-black uppercase tracking-tight mb-6">Strategic Alliance <span className="text-[#ef4444]">Application</span></h2>
            <p className="text-white/50 text-lg">
              We vet potential partners rigorously to ensure total synergy in global expansion. Submit your corporate alliance proposal for executive review.
            </p>
         </motion.div>

         <motion.form 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-[#122343] border border-white/10 p-12 shadow-2xl"
         >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
               <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Enterprise Name</label>
                  <input type="text" required className="w-full bg-white/5 border border-white/10 py-3 px-4 text-white focus:border-[#2ea2f7] outline-none" />
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Global HQ Region</label>
                  <select className="w-full bg-white/5 border border-white/10 py-3 px-4 text-white focus:border-[#2ea2f7] outline-none appearance-none">
                     <option className="bg-[#122343]">Middle East / GCC</option>
                     <option className="bg-[#122343]">North America</option>
                     <option className="bg-[#122343]">Asia Pacific</option>
                     <option className="bg-[#122343]">Europe</option>
                  </select>
               </div>
               <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Primary Synergy Objective</label>
                  <select className="w-full bg-white/5 border border-white/10 py-3 px-4 text-white focus:border-[#2ea2f7] outline-none appearance-none">
                     <option className="bg-[#122343]">Co-Warehousing & Distribution</option>
                     <option className="bg-[#122343]">Joint Electronics Procurement</option>
                     <option className="bg-[#122343]">Technological IP Sharing</option>
                     <option className="bg-[#122343]">Investment / Equity Capital</option>
                  </select>
               </div>
               <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Strategic Proposal Overview</label>
                  <textarea rows={4} required className="w-full bg-white/5 border border-white/10 py-3 px-4 text-white focus:border-[#2ea2f7] outline-none" placeholder="Detail the mutual value generation..."></textarea>
               </div>
               <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Executive Email Contact</label>
                  <input type="email" required className="w-full bg-white/5 border border-white/10 py-3 px-4 text-white focus:border-[#2ea2f7] outline-none" />
               </div>
            </div>

            <button className="w-full bg-[#ef4444] hover:bg-[#2ea2f7] text-white py-5 font-black uppercase tracking-[0.2em] text-sm transition-all shadow-xl">
               Submit Board Proposal
            </button>
         </motion.form>
      </div>
    </section>
  );
}
