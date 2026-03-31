"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export function FooterNewsletterLead() {
  return (
    <div className="w-full bg-[#0F111A] border border-white/10 rounded-2xl p-8 relative overflow-hidden shadow-2xl">
       <div className="absolute top-0 right-0 w-32 h-32 bg-[#2ea2f7]/20 rounded-full blur-[60px]" />
       
       <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
             <Icon icon="lucide:radar" className="w-6 h-6 text-[#ef4444]" />
             <h3 className="text-xl font-black text-white uppercase tracking-tight">Market Radar</h3>
          </div>
          <p className="text-white/50 text-sm mb-6 leading-relaxed">
            Subscribe to receive hyper-curated supply chain intelligence and exclusive electronics trading opportunities directly from our analysts.
          </p>
          
          <form className="flex flex-col gap-3">
             <input type="email" placeholder="Enterprise Email" required className="w-full bg-white/5 border border-white/10 rounded-md p-3 text-white text-sm focus:border-[#2ea2f7] outline-none transition-colors" />
             <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#ef4444] text-white py-3 rounded-md font-black uppercase text-[10px] tracking-widest hover:bg-[#2ea2f7] transition-colors"
             >
               Subscribe Now
             </motion.button>
          </form>
          <p className="text-[10px] text-white/30 uppercase mt-4 text-center font-bold">Unsubscribe at any time.</p>
       </div>
    </div>
  );
}
