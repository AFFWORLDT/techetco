"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export function BlogSidebarLead() {
  return (
    <div className="w-full bg-[#122343] p-8 border border-white/10 shadow-2xl relative overflow-hidden rounded-md sticky top-32">
       <div className="absolute top-0 right-0 w-32 h-32 bg-[#ef4444]/20 rounded-full blur-[50px] pointer-events-none" />
       
       <div className="relative z-10">
          <Icon icon="lucide:bar-chart" className="w-8 h-8 text-[#2ea2f7] mb-6" />
          <h4 className="text-xl font-black text-white uppercase tracking-tight mb-2">Want Deeper Insights?</h4>
          <p className="text-white/50 text-sm mb-6 leading-relaxed">
            Get early access to our unreleased whitepapers and localized Dubai trade metrics before they hit the market.
          </p>
          
          <form className="space-y-4">
             <div>
               <label className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Business Email</label>
               <input type="email" required className="w-full bg-white/5 border-b border-white/20 py-2 text-white text-sm focus:border-[#ef4444] outline-none transition-colors" />
             </div>
             
             <button className="w-full bg-[#ef4444] hover:bg-[#2ea2f7] text-white py-3 font-black uppercase tracking-widest text-[10px] transition-colors mt-4">
                Unlock Reports
             </button>
          </form>
       </div>
    </div>
  );
}
