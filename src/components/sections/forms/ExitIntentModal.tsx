"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

export function ExitIntentModal() {
  const [showExitModal, setShowExitModal] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        setShowExitModal(true);
        setHasTriggered(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasTriggered]);

  return (
    <AnimatePresence>
      {showExitModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={() => setShowExitModal(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
             <div className="w-full md:w-5/12 bg-[#122343] p-10 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ef4444]/10 rounded-full blur-[80px]" />
                <div className="relative z-10">
                   <h2 className="text-4xl font-black text-white uppercase tracking-tighter leading-tight mb-4">
                     Wait, don't leave your <span className="text-[#2ea2f7]">supply chain</span> exposed.
                   </h2>
                   <p className="text-white/60">Unlock an exclusive high-level market breakdown before you go.</p>
                </div>
                <div className="relative z-10 mt-12 grid grid-cols-2 gap-4">
                   <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <div className="text-2xl font-black text-[#ef4444] mb-1">24h</div>
                      <div className="text-[10px] text-white/50 uppercase font-bold tracking-widest">Market Intel</div>
                   </div>
                   <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <div className="text-2xl font-black text-[#2ea2f7] mb-1">0%</div>
                      <div className="text-[10px] text-white/50 uppercase font-bold tracking-widest">Consult Fee</div>
                   </div>
                </div>
             </div>
             
             <div className="w-full md:w-7/12 bg-white p-10 relative">
                <button onClick={() => setShowExitModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-[#ef4444] transition-colors">
                  <Icon icon="lucide:x" className="w-6 h-6" />
                </button>
                <form className="space-y-6 flex flex-col justify-center h-full">
                   <h3 className="text-2xl font-black text-[#122343] uppercase">Get Your Free Strategy Call</h3>
                   
                   <div className="space-y-2">
                     <label className="text-xs font-bold text-gray-500 uppercase">Work Email</label>
                     <input type="email" required className="w-full bg-gray-50 border border-gray-200 p-4 rounded-md focus:border-[#2ea2f7] outline-none" placeholder="john@enterprise.com" />
                   </div>
                   
                   <div className="space-y-2">
                     <label className="text-xs font-bold text-gray-500 uppercase">Phone Number</label>
                     <input type="tel" required className="w-full bg-gray-50 border border-gray-200 p-4 rounded-md focus:border-[#2ea2f7] outline-none" placeholder="+1 (555) 000-0000" />
                   </div>

                   <button className="w-full bg-[#122343] text-white py-4 font-black uppercase text-sm tracking-widest hover:bg-[#ef4444] transition-colors rounded-md border border-transparent">
                     Claim Free Consultation
                   </button>
                   <p className="text-center text-[10px] text-gray-400 uppercase font-semibold mt-4">No obligation. 100% Confidential.</p>
                </form>
             </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
