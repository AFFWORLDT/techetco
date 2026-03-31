"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AllianceApplicationForm } from "@/components/sections/forms/AllianceApplicationForm";

export default function GlobalPartnershipPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main className="w-full min-h-screen bg-white">
      <section ref={containerRef} className="relative w-full h-[60vh] min-h-[500px] bg-[#122343] flex items-center justify-center pt-20 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0 bg-[url('/Images/business_handshake_dubai_1774990377985.png')] bg-cover bg-center bg-no-repeat opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-linear-to-b from-[#0F111A]/90 to-[#122343] z-10" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="container mx-auto px-6 relative z-20 text-center space-y-6"
        >
           <h1 className="text-5xl md:text-8xl font-heading font-black text-white leading-tight tracking-tighter uppercase mb-4">
              Global <span className="text-[#ef4444]">&</span> <br /> Local <span className="text-[#2ea2f7] italic underline-offset-12 underline">Partnerships</span>
           </h1>
           <p className="text-lg text-white/60 leading-relaxed max-w-xl mx-auto font-normal">
              Building resilient ecosystems through strategic alliances. We align with tier-1 manufacturers and global distributors to dominate the electronics market.
           </p>
        </motion.div>
      </section>

      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
           <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16 border-l-4 border-[#ef4444] pl-8"
           >
              <h3 className="text-3xl font-black text-[#122343] uppercase mb-4">The Strategic Advantage</h3>
              <p className="text-gray-500 leading-relaxed text-lg">
                At Tech ET Co, we don't just facilitate transactions; we cultivate long-term, mutually beneficial architectures of trade. By partnering with us, you immediately plug into a pre-vetted, high-compliance network spanning the Middle East, Asia, and European sectors.
              </p>
           </motion.div>

           <div className="space-y-12">
              {[
                { step: "01", title: "Joint Venture Sourcing", text: "Collaborative procurement strategies that lower unit costs and provide exclusive access to emerging technologies." },
                { step: "02", title: "Market Penetration", text: "Leveraging our localized presence in Dubai to seamlessly introduce your products to Middle Eastern and African markets." },
                { step: "03", title: "Shared Infrastructure", text: "Co-utilizing warehousing, cold-chain setups, and distribution fleets for maximum efficiency." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex gap-8 group"
                >
                  <div className="text-4xl font-black text-gray-200 group-hover:text-[#ef4444] transition-colors">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-[#122343] uppercase mb-2">{item.title}</h4>
                    <p className="text-gray-500 leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>
      <AllianceApplicationForm />
    </main>
  );
}
