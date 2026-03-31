"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";

export function HeaderCallbackModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="hidden lg:flex items-center gap-2 bg-[#ef4444] text-white px-6 py-2 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-[#122343] transition-colors"
      >
        <Icon icon="lucide:phone-call" className="w-3 h-3" />
        Request Callback
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
             <motion.div 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
               onClick={() => setIsOpen(false)}
               className="absolute inset-0 bg-black/60 backdrop-blur-sm"
             />
             <motion.div 
               initial={{ opacity: 0, scale: 0.95, y: -20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.95, y: -20 }}
               className="relative w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden"
             >
                <div className="bg-[#122343] p-6 text-center relative">
                   <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">
                     <Icon icon="lucide:x" className="w-5 h-5" />
                   </button>
                   <div className="w-12 h-12 bg-[#ef4444] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg text-white">
                      <Icon icon="lucide:phone" className="w-5 h-5" />
                   </div>
                   <h2 className="text-xl font-black text-white uppercase">Priority Callback</h2>
                   <p className="text-xs text-white/60 mt-1">An executive will call you within 15 minutes.</p>
                </div>
                
                <form className="p-8 space-y-4">
                   <div>
                     <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Name</label>
                     <input type="text" required className="w-full border-b border-gray-300 py-2 text-sm focus:border-[#ef4444] outline-none" />
                   </div>
                   <div>
                     <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Global Number</label>
                     <input type="tel" placeholder="+1..." required className="w-full border-b border-gray-300 py-2 text-sm focus:border-[#ef4444] outline-none" />
                   </div>
                   <div>
                     <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Topic</label>
                     <select className="w-full border-b border-gray-300 py-2 text-sm focus:border-[#ef4444] outline-none bg-transparent">
                        <option>General Trading</option>
                        <option>Large Scale Logistics</option>
                        <option>Financial Partnerships</option>
                     </select>
                   </div>
                   <button className="w-full bg-[#122343] text-white py-4 mt-6 font-black uppercase text-xs tracking-widest hover:bg-[#ef4444] transition-colors rounded-sm">
                     Request Now
                   </button>
                </form>
             </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
