"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";

const CONTACT_INFO = [
  { icon: "lucide:map-pin", label: "Global HQ", value: "Bay Square 12, Business Bay, Dubai" },
  { icon: "lucide:phone", label: "Direct Line", value: "+971 56 666 2351" },
  { icon: "lucide:mail", label: "Trade Desk", value: "intelligence@techetco.com" }
];

export function Contact() {
  return (
    <section id="contact" className="relative w-full py-32 bg-[#050A15] overflow-hidden border-t border-white/5">
      {/* Immersive Dark Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#ef4444]/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#2ea2f7]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Global Authority Block */}
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex-1 space-y-12"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-0.5 bg-[#ef4444]" />
                 <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white">Global Command Center</span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[0.9] tracking-tighter uppercase">
                Initiate <br /> <span className="text-[#2ea2f7] italic">Trade Protocol</span>
              </h2>
              <p className="text-lg text-white/40 leading-relaxed max-w-xl">
                 Connect heavily vetted electronics suppliers with high-volume procurement networks through our centralized Dubai operations. Secure. Agile. Trans-Pacific.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
               {CONTACT_INFO.map((info, i) => (
                  <div key={i} className="flex gap-4 group">
                     <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#ef4444] group-hover:bg-[#ef4444] group-hover:text-white transition-all">
                        <Icon icon={info.icon} className="w-5 h-5" />
                     </div>
                     <div>
                        <p className="text-[9px] uppercase font-black tracking-widest text-white/30 mb-1">{info.label}</p>
                        <h5 className="font-bold text-white text-sm uppercase tracking-wide">{info.value}</h5>
                     </div>
                  </div>
               ))}
            </div>
            
            <div className="relative aspect-[21/9] w-full mt-12 bg-black overflow-hidden border border-white/10 rounded-sm">
                <Image 
                   src="/Images/dubai_corporate_hq_1774990313311.png"
                   alt="Tech ET Co Dubai HQ"
                   fill
                   className="object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A15] to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse" />
                   <span className="text-[9px] font-black uppercase tracking-widest text-white">Live Operations: DXB</span>
                </div>
            </div>
          </motion.div>

          {/* Right Side: Pro UI Contact Form Block */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex-1 w-full"
          >
             <form className="bg-[#122343]/80 backdrop-blur-3xl p-10 lg:p-14 border border-white/10 shadow-2xl relative">
                {/* Accent Decorator */}
                <div className="absolute top-0 left-0 w-2 h-24 bg-[#ef4444]" />
                <div className="absolute top-0 right-0 w-24 h-2 border-t-2 border-r-2 border-[#2ea2f7] opacity-50" />
                <div className="absolute bottom-0 left-0 w-24 h-2 border-b-2 border-l-2 border-[#ef4444] opacity-50" />
                
                <h3 className="text-2xl font-black uppercase tracking-widest text-white mb-8 flex items-center justify-between">
                   Network Request <Icon icon="lucide:network" className="text-[#2ea2f7]" />
                </h3>

                <div className="space-y-8">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative group">
                         <input type="text" required className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white focus:border-[#ef4444] outline-none transition-colors peer" placeholder=" " />
                         <label className="absolute left-0 top-3 text-[10px] uppercase font-bold tracking-widest text-white/30 transition-all peer-focus:-top-4 peer-focus:text-[8px] peer-focus:text-[#ef4444] peer-valid:-top-4 peer-valid:text-[8px] peer-valid:text-white/50">Full Designation</label>
                      </div>
                      <div className="relative group">
                         <input type="text" required className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white focus:border-[#ef4444] outline-none transition-colors peer" placeholder=" " />
                         <label className="absolute left-0 top-3 text-[10px] uppercase font-bold tracking-widest text-white/30 transition-all peer-focus:-top-4 peer-focus:text-[8px] peer-focus:text-[#ef4444] peer-valid:-top-4 peer-valid:text-[8px] peer-valid:text-white/50">Corporate Entity</label>
                      </div>
                   </div>
                   
                   <div className="relative group">
                      <input type="email" required className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white focus:border-[#ef4444] outline-none transition-colors peer" placeholder=" " />
                      <label className="absolute left-0 top-3 text-[10px] uppercase font-bold tracking-widest text-white/30 transition-all peer-focus:-top-4 peer-focus:text-[8px] peer-focus:text-[#ef4444] peer-valid:-top-4 peer-valid:text-[8px] peer-valid:text-white/50">Enterprise Email Address</label>
                   </div>

                   <div className="relative group">
                      <select required className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white focus:border-[#ef4444] outline-none transition-colors peer appearance-none cursor-pointer">
                         <option value="" disabled selected hidden></option>
                         <option className="bg-[#122343]">Electronics Procurement</option>
                         <option className="bg-[#122343]">Global Logistics Integration</option>
                         <option className="bg-[#122343]">Investment / Finance</option>
                         <option className="bg-[#122343]">Press / Media Relations</option>
                      </select>
                      <label className="absolute left-0 -top-4 text-[8px] uppercase font-bold tracking-widest text-white/50">Inquiry Sector</label>
                   </div>

                   <div className="relative group pt-4">
                      <textarea rows={4} required className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-[#ef4444] outline-none transition-colors resize-none" placeholder="Provide technical parameters, volume requirements, or logistical bottlenecks..."></textarea>
                   </div>
                </div>
                
                <button type="submit" className="w-full mt-10 bg-white hover:bg-[#ef4444] text-[#122343] hover:text-white py-5 font-black uppercase tracking-[0.3em] text-[10px] transition-all flex items-center justify-center gap-4 group/btn shadow-2xl">
                   Transmit Inquiry
                   <Icon icon="lucide:satellite-dish" className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                </button>
             </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
