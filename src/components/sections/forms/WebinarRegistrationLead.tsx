"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export function WebinarRegistrationLead() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
         <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row bg-[#122343] text-white overflow-hidden shadow-2xl"
         >
            <div className="lg:w-2/5 relative">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#122343] to-transparent/10" />
               <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                  <div className="bg-[#ef4444] text-white text-xs font-black uppercase tracking-widest py-1 px-3 inline-block self-start mb-4 rounded-sm">Live Webinar</div>
                  <h3 className="text-3xl font-black uppercase leading-tight mb-2">Navigating Supply Chain <span className="text-[#2ea2f7]">Volatility</span></h3>
                  <p className="text-white/70 text-sm font-medium">October 15, 2026 • 10:00 AM GST</p>
               </div>
            </div>

            <div className="lg:w-3/5 p-10 lg:p-14 flex flex-col justify-center bg-[#0F111A]">
               <h4 className="text-xl font-black uppercase tracking-widest mb-2">Reserve Your Seat</h4>
               <p className="text-white/50 text-sm mb-8">Join our Executive VP of Global Trade for an exclusive 45-minute masterclass on mitigating logistics risks in Q4.</p>
               
               <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                       <label className="text-[10px] text-white/40 uppercase font-bold tracking-widest">First Name</label>
                       <input type="text" required className="w-full bg-transparent border-b border-white/20 py-2 focus:border-[#ef4444] outline-none text-white transition-colors" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Last Name</label>
                       <input type="text" required className="w-full bg-transparent border-b border-white/20 py-2 focus:border-[#ef4444] outline-none text-white transition-colors" />
                     </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Work Email (Registration Link will be sent here)</label>
                    <input type="email" required className="w-full bg-transparent border-b border-white/20 py-2 focus:border-[#ef4444] outline-none text-white transition-colors" />
                  </div>
                  
                  <button className="w-full bg-white text-[#122343] py-4 mt-8 font-black uppercase text-[10px] tracking-[0.2em] hover:bg-[#ef4444] hover:text-white transition-colors">
                     Confirm Registration
                  </button>
               </form>
            </div>
         </motion.div>
      </div>
    </section>
  );
}
