"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export function FreightCalculaterLead() {
  return (
    <section className="relative w-full py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
         <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#122343] uppercase tracking-tighter mb-4">
              Advanced <span className="text-[#2ea2f7]">Freight</span> Estimator
            </h2>
            <p className="text-gray-500 text-lg">Calculate precision shipping costs across our global logistics neural network.</p>
         </div>

         <motion.div 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-4xl mx-auto bg-[#122343] p-10 shadow-2xl relative overflow-hidden"
         >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 flex items-center justify-center -translate-y-16 translate-x-16 rounded-full">
               <Icon icon="lucide:ship" className="w-16 h-16 text-white/10" />
            </div>

            <form className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
               <div className="space-y-2">
                 <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Origin Port</label>
                 <select className="w-full bg-transparent border-b-2 border-white/20 py-3 text-white focus:border-[#ef4444] outline-none appearance-none cursor-pointer">
                    <option className="bg-[#122343]">Jebel Ali (AEJEA)</option>
                    <option className="bg-[#122343]">Shenzhen (CNSZX)</option>
                    <option className="bg-[#122343]">Rotterdam (NLRTM)</option>
                 </select>
               </div>
               <div className="space-y-2">
                 <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Destination</label>
                 <select className="w-full bg-transparent border-b-2 border-white/20 py-3 text-white focus:border-[#ef4444] outline-none appearance-none cursor-pointer">
                    <option className="bg-[#122343]">Los Angeles (USLAX)</option>
                    <option className="bg-[#122343]">Hamburg (DEHAM)</option>
                    <option className="bg-[#122343]">Singapore (SGSIN)</option>
                 </select>
               </div>
               <div className="space-y-2">
                 <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Container Type</label>
                 <select className="w-full bg-transparent border-b-2 border-white/20 py-3 text-white focus:border-[#ef4444] outline-none appearance-none cursor-pointer">
                    <option className="bg-[#122343]">20ft Standard (TEU)</option>
                    <option className="bg-[#122343]">40ft High Cube (FEU)</option>
                    <option className="bg-[#122343]">Refrigerated (Reefer)</option>
                 </select>
               </div>

               <div className="col-span-1 md:col-span-2 space-y-2">
                 <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Email for Formal Quote Document</label>
                 <input type="email" placeholder="logistics@company.com" required className="w-full bg-transparent border-b-2 border-white/20 py-3 text-white focus:border-[#ef4444] outline-none" />
               </div>
               
               <div className="col-span-1 border-t-0">
                  <button className="w-full bg-white text-[#122343] py-4 font-black uppercase text-xs tracking-widest hover:bg-[#ef4444] hover:text-white transition-all">
                    Generate Quote
                  </button>
               </div>
            </form>
         </motion.div>
      </div>
    </section>
  );
}
