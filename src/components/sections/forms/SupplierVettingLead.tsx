"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export function SupplierVettingLead() {
  return (
    <section className="py-24 bg-[#0F111A] relative overflow-hidden text-white border-t border-white/10">
      <div className="container mx-auto px-6 max-w-6xl">
         
         <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-5/12 space-y-6">
               <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
                 Join the <span className="text-[#2ea2f7]">Vetted Network</span>
               </h2>
               <p className="text-white/50 leading-relaxed text-sm">
                 We continually source direct allocations from certified global manufacturers. By joining Tech ET Co's supplier index, your production output connects directly with Fortune 500 electronics buyers.
               </p>
               <div className="pt-4 grid grid-cols-2 gap-4">
                  <div className="border border-white/10 bg-white/5 p-4 rounded-sm text-center">
                     <Icon icon="lucide:check-square" className="w-6 h-6 text-[#ef4444] mx-auto mb-2" />
                     <p className="text-[10px] uppercase tracking-widest font-bold">ISO Compliance</p>
                  </div>
                  <div className="border border-white/10 bg-white/5 p-4 rounded-sm text-center">
                     <Icon icon="lucide:package-check" className="w-6 h-6 text-[#2ea2f7] mx-auto mb-2" />
                     <p className="text-[10px] uppercase tracking-widest font-bold">Bulk Capacity</p>
                  </div>
               </div>
            </div>

            <motion.form 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="md:w-7/12 w-full bg-[#122343]/80 backdrop-blur-xl p-8 lg:p-10 border border-white/10 shadow-2xl relative"
            >
               <div className="absolute top-0 right-0 w-2 h-20 bg-[#ef4444]" />
               <h3 className="text-xl font-bold uppercase tracking-widest mb-8">Supplier Initial Audit</h3>
               
               <div className="space-y-5">
                  <div className="flex flex-col md:flex-row gap-5">
                    <input type="text" placeholder="Manufacturing Company Name" required className="flex-1 bg-transparent border-b border-white/20 py-2 text-sm text-white focus:border-[#2ea2f7] transition-colors outline-none" />
                    <input type="text" placeholder="Origin Country" required className="flex-1 bg-transparent border-b border-white/20 py-2 text-sm text-white focus:border-[#2ea2f7] transition-colors outline-none" />
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-5">
                    <select className="flex-1 bg-transparent border-b border-white/20 py-2 text-sm text-white/50 focus:text-white focus:border-[#2ea2f7] transition-colors outline-none appearance-none">
                       <option className="bg-[#122343]">Electronic Components (Active)</option>
                       <option className="bg-[#122343]">Electronic Components (Passive)</option>
                       <option className="bg-[#122343]">Consumer Electronics Complete</option>
                       <option className="bg-[#122343]">Logistics / Packaging Solutions</option>
                    </select>
                    <input type="number" placeholder="Est. Monthly Unit Capacity" required className="flex-1 bg-transparent border-b border-white/20 py-2 text-sm text-white focus:border-[#2ea2f7] transition-colors outline-none" />
                  </div>

                  <div>
                     <input type="text" placeholder="Certifications (ISO, RoHS, etc.)" required className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white focus:border-[#2ea2f7] transition-colors outline-none" />
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-5">
                     <input type="text" placeholder="Compliance Contact Name" required className="flex-1 bg-transparent border-b border-white/20 py-2 text-sm text-white focus:border-[#2ea2f7] transition-colors outline-none" />
                     <input type="email" placeholder="Corporate Contact Email" required className="flex-1 bg-transparent border-b border-white/20 py-2 text-sm text-white focus:border-[#2ea2f7] transition-colors outline-none" />
                  </div>
               </div>

               <button className="w-full mt-10 bg-[#ef4444] text-white font-black uppercase tracking-widest text-[10px] py-4 hover:bg-white hover:text-[#122343] transition-all">
                  Submit Auditory Request
               </button>
            </motion.form>
         </div>

      </div>
    </section>
  );
}
