"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export function CaseStudyDownloadLead() {
  return (
    <div className="w-full bg-[#122343] relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 my-16">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#ef4444]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="flex flex-col md:flex-row">
         <div className="md:w-1/2 p-10 lg:p-14 text-white relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/10">
               <Icon icon="lucide:file-text" className="w-4 h-4 text-[#ef4444]" />
               Premium Case Study
            </div>
            <h3 className="text-3xl lg:text-4xl font-black uppercase leading-tight mb-4">
               How We Scaled a <span className="text-[#ef4444]">Tier-1</span> Logistics Network by 400%
            </h3>
            <p className="text-white/60 mb-8 leading-relaxed">
               Unlock the exact operational blueprint and supply chain architecture we used to optimize trans-pacific electronics trading for a Fortune 500 partner.
            </p>
            
            <ul className="space-y-4 text-sm font-bold uppercase tracking-wide">
               <li className="flex items-center gap-3"><Icon icon="lucide:check" className="text-[#2ea2f7] w-5 h-5" /> Cost-Reduction Formulas</li>
               <li className="flex items-center gap-3"><Icon icon="lucide:check" className="text-[#2ea2f7] w-5 h-5" /> Procurement Automation Setup</li>
               <li className="flex items-center gap-3"><Icon icon="lucide:check" className="text-[#2ea2f7] w-5 h-5" /> 30-Page PDF Breakdown</li>
            </ul>
         </div>

         <div className="md:w-1/2 p-10 lg:p-14 bg-black/30 backdrop-blur-md border-l border-white/10 flex flex-col justify-center relative z-10">
            <h4 className="text-xl font-bold text-white uppercase mb-6 tracking-wide">Get Instant Access</h4>
            <form className="space-y-5">
               <div className="space-y-2">
                 <label className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Enterprise Email</label>
                 <input type="email" required placeholder="name@company.com" className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-4 text-white hover:border-[#2ea2f7] focus:border-[#2ea2f7] outline-none transition-colors" />
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Job Role</label>
                 <select required className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-4 text-white focus:border-[#2ea2f7] outline-none transition-colors appearance-none">
                    <option className="bg-[#122343]">Supply Chain Director</option>
                    <option className="bg-[#122343]">Procurement Manager</option>
                    <option className="bg-[#122343]">C-Suite Executive</option>
                    <option className="bg-[#122343]">Logistics Coordinator</option>
                 </select>
               </div>
               
               <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-2 bg-[#ef4444] text-white py-5 font-black uppercase text-xs tracking-[0.2em] shadow-xl hover:bg-[#2ea2f7] transition-all flex justify-center items-center gap-3"
               >
                  <Icon icon="lucide:download" className="w-5 h-5" /> Download Blueprint
               </motion.button>
            </form>
         </div>
      </div>
    </div>
  );
}
