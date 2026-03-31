"use client";

import { motion } from "framer-motion";
import { InvestorRelationsForm } from "@/components/sections/forms/InvestorRelationsForm";

export default function OurVisionPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <section className="relative w-full h-[50vh] min-h-[400px] bg-[#122343] flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center space-y-6">
           <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-heading font-black text-white leading-tight tracking-tighter uppercase mb-4"
           >
              Our <span className="text-[#2ea2f7] italic decoration-[#ef4444] underline-offset-12 underline">Vision</span>
           </motion.h1>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-6 max-w-4xl text-center">
           <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-[#122343] leading-tight uppercase"
           >
              To Be the <span className="text-[#ef4444]">Undisputed Nexus</span> of Global Electronics Trade
           </motion.div>
           <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 text-xl text-gray-500 leading-relaxed font-normal"
           >
              Tech ET Co is driven by the singular goal of architecting a seamless, transparent, and hyper-efficient global supply chain. By anchoring our headquarters in Dubai, we bridge the technological innovations of the East with the enterprise demands of the West. We envision a trading ecosystem defined by unwavering integrity, unparalleled velocity, and technological superiority.
           </motion.p>
        </div>
         <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
               { value: "$100M+", label: "Target Trade Volume" },
               { value: "100%", label: "Supply Chain Compliance" },
               { value: "24/7", label: "Global Procurement Operations" }
            ].map((stat, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 + (i * 0.1) }}
                 className="p-8 border border-gray-100 bg-gray-50 text-[#122343]"
               >
                  <h3 className="text-4xl font-black mb-2">{stat.value}</h3>
                  <p className="text-sm uppercase font-bold text-[#ef4444]">{stat.label}</p>
               </motion.div>
            ))}
         </div>
         <div className="mt-32">
            <InvestorRelationsForm />
         </div>
      </section>
    </main>
  );
}
