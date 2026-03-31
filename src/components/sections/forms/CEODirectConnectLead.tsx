"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export function CEODirectConnectLead() {
  return (
    <section className="py-32 bg-[#050A15] relative overflow-hidden text-white border-t border-white/5">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10 flex flex-col md:flex-row gap-16 items-center">
         
         <div className="md:w-5/12 space-y-8">
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-[#2ea2f7]">
               Executive Channel
            </div>
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-tight">
               Direct <span className="text-white">Board</span> Access
            </h2>
            <p className="text-white/40 leading-relaxed text-sm">
               For inquiries exceeding $500M in annual volume or requests regarding sovereign-level logistics integrations, bypass the standard queue. Submit your communication directly to the office of the CEO.
            </p>
            <div className="pt-6 border-t border-white/10">
               <div className="flex items-center gap-4 opacity-50">
                  <Icon icon="lucide:lock" className="w-5 h-5 text-white" />
                  <span className="text-xs uppercase font-bold tracking-widest">End-to-End Encrypted Channel</span>
               </div>
            </div>
         </div>

         <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-7/12 w-full bg-[#122343] p-10 border border-white/10 shadow-2xl relative"
         >
            <div className="absolute -top-1 -right-1 w-20 h-20 bg-gradient-to-br from-[#ef4444] to-[#2ea2f7] blur-2xl opacity-30" />
            
            <form className="space-y-6 relative z-10">
               <div>
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Global Executive Name</label>
                  <input type="text" required className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[#ef4444] transition-colors outline-none" />
               </div>
               
               <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Corporate Email</label>
                    <input type="email" required className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[#ef4444] transition-colors outline-none" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Direct Phone</label>
                    <input type="tel" required className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[#ef4444] transition-colors outline-none" placeholder="+1..." />
                  </div>
               </div>

               <div>
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Confidential Memorandum</label>
                  <textarea rows={4} required className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[#ef4444] transition-colors outline-none resize-none" placeholder="Detail the strategic nature of your inquiry..."></textarea>
               </div>

               <button className="w-full mt-4 bg-white text-[#122343] py-5 font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#ef4444] hover:text-white transition-all shadow-xl">
                  Transmit to Board
               </button>
            </form>
         </motion.div>

      </div>
    </section>
  );
}
