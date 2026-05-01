"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

export function QuickQuoteBottomBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 w-full bg-[#122343]/90 backdrop-blur-xl border-t border-white/10 z-40 px-4 md:px-6 py-4"
        >
          <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            <div className="flex items-center gap-4 hidden lg:flex">
              <div className="w-10 h-10 rounded-full bg-[#ef4444]/20 flex items-center justify-center text-[#ef4444]">
                <Icon icon="lucide:calculator" className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-black uppercase tracking-tight text-sm">Instant Bulk Quote</h4>
                <p className="text-white/50 text-xs">Electronics & Freight Estimations</p>
              </div>
            </div>

            <form className="flex-1 max-w-3xl w-full flex gap-2">
               <input type="text" placeholder="Commodity" className="flex-1 bg-white/5 border border-white/10 rounded-sm px-3 md:px-4 py-2 text-white text-[12px] md:text-sm focus:border-[#2ea2f7] outline-none" required />
               <input type="number" placeholder="Vol" className="w-16 sm:w-24 md:w-48 bg-white/5 border border-white/10 rounded-sm px-3 md:px-4 py-2 text-white text-[12px] md:text-sm focus:border-[#2ea2f7] outline-none" required />
               <button className="bg-[#ef4444] text-white px-4 md:px-6 py-2 font-black uppercase text-[10px] md:text-xs hover:bg-[#2ea2f7] transition-colors whitespace-nowrap">
                 Get Quote
               </button>
            </form>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
