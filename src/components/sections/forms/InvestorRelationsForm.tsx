"use client";

import { motion } from "framer-motion";

export function InvestorRelationsForm() {
  return (
    <section className="py-24 bg-gray-50 text-[#122343]">
      <div className="container mx-auto px-6 max-w-5xl">
         <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-balance">
              Capital <span className="text-[#ef4444]">Investment</span> & Growth
            </h2>
            <p className="text-gray-500 text-lg">
              Tech ET Co is evaluating strategic institutional investments to scale specialized logistics pathways. Our vision is global domination; we invite qualified capital groups to request the prospectus.
            </p>
         </div>

         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 shadow-xl p-10 md:p-16 flex flex-col md:flex-row gap-12"
         >
            <div className="md:w-1/3">
               <h3 className="text-xl font-bold uppercase tracking-tight mb-2">Request Prospectus</h3>
               <p className="text-gray-500 text-sm leading-relaxed mb-6">
                 Submit your firm's details below to connect directly with our board of directors and chief financial analysts.
               </p>
               <div className="w-12 h-1 bg-[#ef4444] mb-8" />
               <p className="text-xs uppercase font-bold text-gray-400">Strictly Confidential Process.</p>
            </div>

            <form className="md:w-2/3 space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Investment Firm</label>
                    <input type="text" required className="w-full bg-gray-50 border-b-2 border-gray-200 py-3 text-sm focus:border-[#ef4444] outline-none transition-colors mt-1" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">AUM (Assets Under Management)</label>
                    <select required className="w-full bg-gray-50 border-b-2 border-gray-200 py-3 text-sm focus:border-[#ef4444] outline-none transition-colors mt-1 appearance-none cursor-pointer">
                      <option>&lt; $50 Million</option>
                      <option>$50M - $500M</option>
                      <option>$500M - $1 Billion</option>
                      <option>&gt; $1 Billion</option>
                    </select>
                  </div>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Director Name</label>
                    <input type="text" required className="w-full bg-gray-50 border-b-2 border-gray-200 py-3 text-sm focus:border-[#ef4444] outline-none transition-colors mt-1" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Direct Email</label>
                    <input type="email" required className="w-full bg-gray-50 border-b-2 border-gray-200 py-3 text-sm focus:border-[#ef4444] outline-none transition-colors mt-1" />
                  </div>
               </div>

               <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Inquiry Context</label>
                  <textarea rows={3} className="w-full bg-gray-50 border-b-2 border-gray-200 py-3 text-sm focus:border-[#ef4444] outline-none transition-colors mt-1" placeholder="Briefly detail your strategic intent..."></textarea>
               </div>

               <button className="bg-[#122343] text-white px-10 py-4 font-black uppercase text-xs tracking-widest hover:bg-[#ef4444] transition-colors shadow-lg">
                 Submit Investor Inquiry
               </button>
            </form>
         </motion.div>
      </div>
    </section>
  );
}
