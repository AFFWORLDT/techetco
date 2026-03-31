"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export function DataUnlockForm() {
  return (
    <section className="py-24 bg-[#122343] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#2ea2f7]/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-white/5 border border-white/10 p-1 lg:p-2 rounded-2xl shadow-2xl flex flex-col lg:flex-row items-center justify-between"
         >
            <div className="lg:w-1/2 p-8 lg:p-12">
               <div className="inline-block bg-[#ef4444] text-white font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-widest mb-6 shadow-lg">
                  Q3 Restricted Data Report
               </div>
               <h3 className="text-3xl lg:text-5xl font-black text-white uppercase leading-tight mb-4">
                 Unlock the Global <span className="text-[#2ea2f7]">Procurement Metric</span>
               </h3>
               <p className="text-white/50 mb-8 leading-relaxed">
                 Access our proprietary 64-page analysis on predicted semiconductor shortages and oceanic freight rate projections for Q4 2026. Explicitly for verified corporate buyers.
               </p>
               
               <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-sm text-white/80 font-bold uppercase">
                     <div className="w-6 h-6 rounded-full bg-[#2ea2f7]/20 flex items-center justify-center text-[#2ea2f7]"><Icon icon="lucide:bar-chart-2" className="w-3 h-3" /></div>
                     Pricing Volatility Forecast
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white/80 font-bold uppercase">
                     <div className="w-6 h-6 rounded-full bg-[#2ea2f7]/20 flex items-center justify-center text-[#2ea2f7]"><Icon icon="lucide:activity" className="w-3 h-3" /></div>
                     Regional Output Metrics
                  </li>
               </ul>
            </div>

            <div className="lg:w-1/2 w-full p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-white/10 bg-black/20 rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none">
               <h4 className="text-xl font-bold text-white uppercase mb-6 tracking-wide">Request Secure Access</h4>
               <form className="space-y-4">
                  <input type="text" required placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-[#2ea2f7] outline-none transition-colors" />
                  <input type="email" required placeholder="Corporate Email Required" className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-[#2ea2f7] outline-none transition-colors" />
                  <input type="text" required placeholder="Enterprise Title" className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-[#2ea2f7] outline-none transition-colors" />
                  
                  <motion.button 
                     whileHover={{ scale: 1.01 }}
                     whileTap={{ scale: 0.99 }}
                     className="w-full mt-4 bg-[#2ea2f7] text-white py-4 flex items-center justify-center gap-2 font-black uppercase text-xs tracking-widest hover:bg-[#ef4444] transition-colors rounded-sm shadow-xl"
                  >
                     <Icon icon="lucide:lock-keyhole-open" className="w-4 h-4" /> Download PDF Report
                  </motion.button>
               </form>
               <p className="text-[10px] text-white/30 uppercase text-center mt-4">Confidential. Will not be distributed.</p>
            </div>
         </motion.div>
      </div>
    </section>
  );
}
