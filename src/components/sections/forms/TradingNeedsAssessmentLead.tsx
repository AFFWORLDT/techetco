"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";

export function TradingNeedsAssessmentLead() {
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
            <h3 className="text-3xl font-black text-[#122343] uppercase tracking-tighter">What is your primary objective?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {["Procuring Electronics", "Global Freight & Logistics", "Strategic Partnership", "Market Intelligence"].map((opt) => (
                 <button key={opt} onClick={() => setStep(2)} className="p-6 border-2 border-gray-100 hover:border-[#122343] hover:bg-gray-50 text-left transition-all group">
                    <span className="block font-bold text-[#122343]">{opt}</span>
                    <span className="text-xs text-gray-500 mt-2 block group-hover:text-[#ef4444] transition-colors">Select & Continue &rarr;</span>
                 </button>
               ))}
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
            <h3 className="text-3xl font-black text-[#122343] uppercase tracking-tighter">What is your annual trade volume?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               {["Under $5M", "$5M - $50M", "Over $50M"].map((opt) => (
                 <button key={opt} onClick={() => setStep(3)} className="p-6 border-2 border-gray-100 hover:border-[#2ea2f7] hover:bg-[#2ea2f7]/5 text-center transition-all">
                    <span className="block font-black text-xl text-[#122343]">{opt}</span>
                 </button>
               ))}
            </div>
            <button onClick={() => setStep(1)} className="text-xs text-gray-400 font-bold uppercase tracking-widest hover:text-[#ef4444]">&larr; Back</button>
          </motion.div>
        );
      case 3:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
            <h3 className="text-3xl font-black text-[#122343] uppercase tracking-tighter">Finalize Your Assessment</h3>
            <p className="text-gray-500 text-sm mb-6">Based on your parameters, we have a tailored solution architecture ready. Where should we send the proposal?</p>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setStep(4); }}>
               <div className="grid grid-cols-2 gap-4">
                 <input type="text" placeholder="Full Name" required className="w-full bg-gray-50 border border-gray-200 p-4 outline-none focus:border-[#122343]" />
                 <input type="text" placeholder="Company Name" required className="w-full bg-gray-50 border border-gray-200 p-4 outline-none focus:border-[#122343]" />
               </div>
               <input type="email" placeholder="Corporate Email Address" required className="w-full bg-gray-50 border border-gray-200 p-4 outline-none focus:border-[#122343]" />
               <button type="submit" className="w-full bg-[#122343] text-white py-5 font-black uppercase tracking-[0.2em] text-xs hover:bg-[#ef4444] transition-colors">Generate Custom Proposal</button>
            </form>
            <button onClick={() => setStep(2)} className="text-xs text-gray-400 font-bold uppercase tracking-widest hover:text-[#ef4444]">&larr; Back</button>
          </motion.div>
        );
      case 4:
        return (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
               <Icon icon="lucide:check" className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-black text-[#122343] uppercase tracking-tighter mb-4">Request Received</h3>
            <p className="text-gray-500">Your dedicated account director will review the parameters and contact you within 2 business hours.</p>
          </motion.div>
        );
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden text-left border-y border-gray-100">
      <div className="container mx-auto px-6 max-w-4xl">
         <div className="mb-12 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-gray-400">
            <span>Step {Math.min(step, 3)} of 3</span>
            <span className="text-[#ef4444]">Needs Assessment</span>
         </div>
         
         {/* Progress Bar */}
         <div className="w-full h-1 bg-gray-100 mb-12 rounded-full overflow-hidden">
            <motion.div 
               className="h-full bg-[#ef4444]" 
               initial={{ width: "33%" }} 
               animate={{ width: `${(Math.min(step, 3) / 3) * 100}%` }} 
               transition={{ duration: 0.5 }}
            />
         </div>

         <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
               {renderStep()}
            </AnimatePresence>
         </div>
      </div>
    </section>
  );
}
