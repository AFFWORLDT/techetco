"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { BulkOrderForm } from "@/components/sections/forms/BulkOrderForm";

export default function ElectronicsTradingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="w-full min-h-screen bg-white">
      {/* Hero Parallax Section */}
      <section ref={containerRef} className="relative w-full h-[60vh] min-h-[500px] bg-[#122343] flex items-center justify-center pt-20 overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 opacity-40">
           <Image 
              src="/Images/electronic_components_macro_1774990345408.png"
              alt="Electronics Trading"
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
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#2ea2f7]">Premium Sourcing</span>
              <div className="w-12 h-0.5 bg-[#ef4444]" />
           </div>
           <h1 className="text-5xl md:text-8xl font-heading font-black text-white leading-tight tracking-tighter uppercase mb-4">
              Electronics <br /> <span className="text-[#2ea2f7] italic decoration-[#ef4444] underline-offset-12 underline">Trading</span>
           </h1>
           <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto font-normal">
              Direct access to tier-1 manufacturing hubs and high-volume procurement networks for global enterprise distribution.
           </p>
        </motion.div>
        
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#ef4444]" />
      </section>

      {/* Content Section */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="prose prose-xl prose-slate max-w-none"
          >
            <h2 className="text-4xl font-black text-[#122343] uppercase tracking-tighter mb-8">Unmatched Global Scale</h2>
            <p className="text-gray-500 leading-relaxed font-normal">
              Tech ET Co operates at the critical intersection of supply and demand, matching enterprise-scale buyers with verified, high-yield electronics manufacturers. Our trading desk handles volatile market conditions by leveraging real-time data, ensuring optimal pricing and guaranteed authentic components for every transaction.
            </p>
            <p className="text-gray-500 leading-relaxed font-normal mt-6">
              Our exhaustive quality control and strict adherence to international trade compliances mean that whether you are sourcing semiconductors, consumer electronics, or industrial telecommunications hardware, your supply chain remains uninterrupted and fully scalable.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {[
                { title: "Volume Procurement", desc: "Access to unprecedented bulk capacities without compromising on component integrity or delivery speeds." },
                { title: "Risk Mitigation", desc: "Advanced forecasting frameworks that buffer your business against sudden market shortages or geopolitical disruptions." },
                { title: "Certified Sourcing", desc: "Every component traced, verified, and certified to meet stringent international standards." },
                { title: "Responsive Delivery", desc: "A robust logistics backbone ensuring that once trades are finalized, execution happens instantly." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white p-8 border border-gray-100 shadow-sm hover:border-[#ef4444] hover:shadow-xl transition-all"
                >
                  <h4 className="text-xl font-black text-[#122343] uppercase mb-4">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <BulkOrderForm />
    </main>
  );
}
