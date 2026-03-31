"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export function CareersApplicationLead() {
  return (
    <section className="py-24 bg-[#122343] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10 flex flex-col md:flex-row gap-16 items-center">
         
         <div className="md:w-1/2 space-y-6">
            <div className="w-12 h-1 bg-[#ef4444]" />
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-tight">
               Build the Future of <span className="text-[#2ea2f7]">Global Trade</span>
            </h2>
            <p className="text-white/60 leading-relaxed">
               Tech ET Co seeks aggressive, visionary talent. If you have the expertise to disrupt international logistics or electronics procurement, submit your portfolio direct to our hiring matrix.
            </p>
            <div className="flex gap-4 pt-4">
               <div className="bg-white/5 border border-white/10 px-4 py-2 text-[10px] uppercase tracking-widest font-bold">Dubai HQ</div>
               <div className="bg-white/5 border border-white/10 px-4 py-2 text-[10px] uppercase tracking-widest font-bold">Hybrid</div>
            </div>
         </div>

         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 w-full bg-white text-[#122343] p-10 shadow-2xl relative"
         >
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#ef4444] text-white flex items-center justify-center rounded-full shadow-2xl rotate-12">
               <span className="font-black uppercase text-xs tracking-widest text-center leading-tight">We Are<br/>Hiring</span>
            </div>
            
            <h3 className="text-2xl font-black uppercase tracking-tight mb-8">Talent Acquisition</h3>
            
            <form className="space-y-5">
               <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input type="text" placeholder="First Name" required className="w-full border-b-2 border-gray-200 py-3 text-sm focus:border-[#ef4444] outline-none transition-colors" />
                  </div>
                  <div>
                    <input type="text" placeholder="Last Name" required className="w-full border-b-2 border-gray-200 py-3 text-sm focus:border-[#ef4444] outline-none transition-colors" />
                  </div>
               </div>
               
               <div>
                  <input type="email" placeholder="Email Address" required className="w-full border-b-2 border-gray-200 py-3 text-sm focus:border-[#ef4444] outline-none transition-colors" />
               </div>
               
               <div>
                  <select className="w-full border-b-2 border-gray-200 py-3 text-sm text-gray-500 focus:border-[#ef4444] outline-none transition-colors appearance-none cursor-pointer">
                     <option>Select Target Department</option>
                     <option>Global Logistics Strategy</option>
                     <option>Electronics Procurement</option>
                     <option>Account Management & Sales</option>
                     <option>Software / Data Engineering</option>
                  </select>
               </div>

               <div>
                  <input type="url" placeholder="LinkedIn Profile URL" required className="w-full border-b-2 border-gray-200 py-3 text-sm focus:border-[#ef4444] outline-none transition-colors" />
               </div>

               <button className="w-full mt-8 bg-[#122343] text-white py-5 font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#ef4444] transition-colors flex justify-center items-center gap-2">
                  Submit Application <Icon icon="lucide:arrow-right" />
               </button>
            </form>
         </motion.div>

      </div>
    </section>
  );
}
