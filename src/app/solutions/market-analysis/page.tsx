"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { DataUnlockForm } from "@/components/sections/forms/DataUnlockForm";

export default function MarketAnalysisPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="w-full min-h-screen bg-[#122343]">
      <section ref={containerRef} className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center pt-20 overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 opacity-40">
           <Image 
              src="/Images/data_analysis_abstract_1774990361792.png"
              alt="Market Analysis"
              fill
              className="object-cover"
           />
        </motion.div>
        <div className="absolute inset-0 bg-linear-to-b from-[#122343]/80 to-[#122343] z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="container mx-auto px-6 relative z-20 text-center space-y-6"
        >
           <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-0.5 bg-[#ef4444]" />
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#2ea2f7]">Data Driven</span>
              <div className="w-12 h-0.5 bg-[#ef4444]" />
           </div>
           <h1 className="text-5xl md:text-8xl font-heading font-black text-white leading-tight tracking-tighter uppercase mb-4">
              Market <br /> <span className="text-[#2ea2f7] italic decoration-[#ef4444] underline-offset-12 underline">Analysis</span>
           </h1>
           <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto font-normal">
              Actionable intelligence from global trading hubs. Stay ahead of supply chain shifts and pricing volatilities.
           </p>
        </motion.div>
        
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#ef4444]" />
      </section>

      <section className="py-32 bg-white overflow-hidden rounded-t-[3rem] -mt-10 relative z-30">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-[#122343] p-12 text-white shadow-2xl"
             >
                <div className="w-16 h-16 bg-[#ef4444]/20 border border-[#ef4444] rounded-full flex items-center justify-center mb-8 text-[#ef4444] font-black text-xl">
                   01
                </div>
                <h3 className="text-3xl font-black uppercase mb-4 text-[#2ea2f7]">Predictive Forecasting</h3>
                <p className="text-white/60 leading-relaxed font-normal">
                  Our dedicated analysts turn massive global data streams into precise forecasts for semiconductor yields and consumer electronics demand, securing your procurement pipeline months in advance.
                </p>
             </motion.div>
             <motion.div 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gray-50 border border-gray-200 p-12 text-[#122343] shadow-xl"
             >
                <div className="w-16 h-16 bg-[#122343]/10 border border-[#122343]/20 rounded-full flex items-center justify-center mb-8 text-[#122343] font-black text-xl">
                   02
                </div>
                <h3 className="text-3xl font-black uppercase mb-4 text-[#ef4444]">Geopolitical Risk Assessment</h3>
                <p className="text-gray-500 leading-relaxed font-normal">
                  In a rapidly fragmenting global economy, understanding regional trade policies, tariff structures, and embargo risks is critical. We provide continuous risk assessment mapping to insulate your operations.
                </p>
             </motion.div>
          </div>
        </div>
      </section>
      <DataUnlockForm />
    </main>
  );
}
