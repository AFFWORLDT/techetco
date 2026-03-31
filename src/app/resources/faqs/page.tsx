"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Icon } from "@iconify/react";

const faqs = [
  { q: "What sectors does Tech ET Co specialize in?", a: "We primarily specialize in high-end consumer electronics, semiconductor procurement, and specialized industrial telecommunication hardware." },
  { q: "How long does shipping take from the Dubai Hub?", a: "Depending on the destination, our priority air freight reaches most European and Asian destinations within 24-48 hours. Sea freight schedules are optimized weekly." },
  { q: "Do you guarantee component authenticity?", a: "Absolutely. 100% of our traded components pass through strict auditing and verification systems to ensure global compliance and authenticity." },
  { q: "Can we integrate your tracking into our systems?", a: "Yes, we offer enterprise-grade API endpoints for real-time tracking, allowing seamless integration with your existing ERP or logistics software." }
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="w-full min-h-screen bg-[#122343] pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-3xl">
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
         >
            <h1 className="text-5xl md:text-8xl font-heading font-black text-white leading-tight tracking-tighter uppercase mb-4">
               F.A.Q<span className="text-[#ef4444]">.</span>
            </h1>
            <p className="text-white/60">Frequently Asked Questions regarding our operations and capabilities.</p>
         </motion.div>

         <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="bg-white/5 border border-white/10 rounded-sm overflow-hidden"
                >
                   <button 
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                   >
                      <span className="text-white font-bold uppercase tracking-wide pr-8">{faq.q}</span>
                      <Icon 
                         icon="lucide:chevron-down" 
                         className={`w-6 h-6 text-[#ef4444] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                      />
                   </button>
                   <motion.div 
                      initial={false}
                      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                      className="overflow-hidden"
                   >
                      <div className="p-6 pt-0 text-white/50 leading-relaxed text-sm">
                         {faq.a}
                      </div>
                   </motion.div>
                </motion.div>
              );
            })}
         </div>
      </div>
    </main>
  );
}
