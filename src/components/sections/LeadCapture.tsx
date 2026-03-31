"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export function LeadCapture() {
  return (
    <section className="relative w-full py-32 bg-[#0F111A] overflow-hidden">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#ef4444]/10 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#2ea2f7]/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10 font-sans">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Value Proposition */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="flex items-center gap-4">
               <div className="w-12 h-0.5 bg-[#ef4444]" />
               <span className="text-[11px] font-black uppercase text-[#2ea2f7] tracking-[0.5em]">Direct Access</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white leading-tight uppercase tracking-tighter">
              Initiate a <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ef4444] to-[#ff8c00]">Strategic Trade</span> Inquiry
            </h2>
            <p className="text-lg text-white/50 leading-relaxed max-w-lg">
              Partner with Tech ET Co to secure your procurement pipeline, optimize your global logistics, and access verified electronics markets instantly. 
            </p>

            <div className="pt-8 space-y-6">
               <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#2ea2f7]">
                     <Icon icon="lucide:zap" className="w-5 h-5" />
                  </div>
                  <div>
                     <h4 className="font-bold text-sm uppercase tracking-wider">Fast Turnaround</h4>
                     <p className="text-xs text-white/40 mt-1">Receive quotes and market analysis within 24 hours.</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#ef4444]">
                     <Icon icon="lucide:shield-check" className="w-5 h-5" />
                  </div>
                  <div>
                     <h4 className="font-bold text-sm uppercase tracking-wider">Verified Compliance</h4>
                     <p className="text-xs text-white/40 mt-1">100% adherence to international trade laws.</p>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Right Side: High-Fidelity Glass Form */}
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[480px] relative group"
          >
            {/* Ambient Shadow/Glow */}
            <div className="absolute -inset-1 bg-linear-to-r from-[#ef4444] to-[#2ea2f7] rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            
            <form className="relative bg-[#122343]/80 backdrop-blur-2xl p-10 rounded-xl border border-white/10 shadow-2xl space-y-8 overflow-hidden">
               {/* Decorative Diagonal Line */}
               <div className="absolute -top-12 -right-12 w-32 h-32 bg-white flex items-center justify-center rotate-45 transform origin-bottom-left shadow-2xl z-0">
                  <Icon icon="lucide:arrow-down-right" className="w-8 h-8 text-[#122343] -rotate-45 block transform translate-x-2 -translate-y-2" />
               </div>

               <div className="relative z-10 space-y-2 mb-8">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">Request a Quote</h3>
                  <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Secure Global Procurement</p>
               </div>

               <div className="relative z-10 space-y-6">
                  {/* Floating Label Input Group */}
                  <div className="relative">
                     <input type="text" id="name" placeholder=" " className="peer w-full bg-transparent border-b-2 border-white/10 py-3 text-white focus:border-[#2ea2f7] outline-none transition-colors" required />
                     <label htmlFor="name" className="absolute left-0 top-3 text-white/40 text-sm uppercase font-bold tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#2ea2f7] -top-4 text-[10px]">Corporate Name</label>
                  </div>

                  <div className="relative">
                     <input type="email" id="email" placeholder=" " className="peer w-full bg-transparent border-b-2 border-white/10 py-3 text-white focus:border-[#2ea2f7] outline-none transition-colors" required />
                     <label htmlFor="email" className="absolute left-0 top-3 text-white/40 text-sm uppercase font-bold tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#2ea2f7] -top-4 text-[10px]">Business Email</label>
                  </div>

                  <div className="relative">
                     <select id="service" className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white/80 focus:border-[#2ea2f7] outline-none transition-colors appearance-none uppercase font-bold text-xs tracking-widest cursor-pointer">
                        <option value="electronics" className="bg-[#122343] text-white">Electronics Trading</option>
                        <option value="logistics" className="bg-[#122343] text-white">Shipping & Logistics</option>
                        <option value="partnership" className="bg-[#122343] text-white">Global Partnership</option>
                     </select>
                     <Icon icon="lucide:chevron-down" className="absolute right-0 top-4 w-4 h-4 text-white/40 pointer-events-none" />
                  </div>
               </div>

               <div className="relative z-10 pt-4">
                  <motion.button 
                     whileHover={{ scale: 1.02 }}
                     whileTap={{ scale: 0.98 }}
                     className="w-full bg-white text-[#122343] hover:bg-[#ef4444] hover:text-white py-4 font-black uppercase tracking-widest text-xs transition-colors flex items-center justify-center gap-3"
                  >
                     SUBMIT TRADE INQUIRY
                     <Icon icon="lucide:arrow-right" className="w-4 h-4" />
                  </motion.button>
               </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
