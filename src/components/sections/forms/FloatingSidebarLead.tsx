"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";

export function FloatingSidebarLead() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: 2, type: "spring" }}
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#ef4444] text-white p-3 rounded-l-lg shadow-2xl z-50 hidden md:flex flex-col items-center gap-2 hover:bg-[#122343] transition-colors group"
      >
        <span className="[writing-mode:vertical-rl] rotate-180 uppercase font-black tracking-widest text-xs group-hover:text-[#2ea2f7] transition-colors">
          Strategic Inquiry
        </span>
        <Icon icon="lucide:message-square" className="w-5 h-5 group-hover:text-[#2ea2f7] transition-colors" />
      </motion.button>


      {/* Slide-out Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-sm bg-[#122343] shadow-2xl z-50 overflow-y-auto border-l border-white/10"
            >
              <div className="p-8 relative">
                <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
                  <Icon icon="lucide:x" className="w-6 h-6" />
                </button>
                
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2 pr-8">Direct Contact</h3>
                <p className="text-white/50 text-sm mb-8">Connect immediately with our trade specialists.</p>

                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] text-white/50 uppercase font-bold tracking-widest">Full Name</label>
                    <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-white focus:border-[#2ea2f7] outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-white/50 uppercase font-bold tracking-widest">Company</label>
                    <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-white focus:border-[#2ea2f7] outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-white/50 uppercase font-bold tracking-widest">Inquiry Type</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-white focus:border-[#2ea2f7] outline-none transition-colors appearance-none">
                      <option className="bg-[#122343]">Procurement</option>
                      <option className="bg-[#122343]">Logistics</option>
                      <option className="bg-[#122343]">Partnership</option>
                    </select>
                  </div>
                  <button className="w-full bg-[#ef4444] text-white py-4 font-black uppercase tracking-widest text-xs hover:bg-white hover:text-[#122343] transition-all">
                    Send Inquiry
                  </button>
                </form>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-xs text-center text-white/40 uppercase font-bold">Or call us directly at</p>
                  <p className="text-center font-black text-[#2ea2f7] text-xl tracking-wider mt-2">+971 56 666 2351</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
