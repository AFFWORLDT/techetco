"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FreightCalculaterLead } from "@/components/sections/forms/FreightCalculaterLead";

export default function ShippingLogisticsPage() {
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
              src="/Images/global_shipping_freight_1774990327247.png"
              alt="Shipping Logistics"
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
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#2ea2f7]">Global Reach</span>
              <div className="w-12 h-0.5 bg-[#ef4444]" />
           </div>
           <h1 className="text-5xl md:text-8xl font-heading font-black text-white leading-tight tracking-tighter uppercase mb-4">
              Shipping <br /> <span className="text-[#2ea2f7] italic decoration-[#ef4444] underline-offset-12 underline">Logistics</span>
           </h1>
           <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto font-normal">
              Agile, transparent, and high-velocity freight networks seamlessly connecting global markets from Dubai.
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
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                   <h2 className="text-4xl font-black text-[#122343] uppercase tracking-tighter mb-8 text-balance">Engineered For Velocity</h2>
                   <p className="text-gray-500 leading-relaxed font-normal text-base">
                     In the high-stakes world of electronics trading, logistics is the ultimate differentiator. Our shipping infrastructure is built to bypass traditional bottlenecks, leveraging air, sea, and overland routes tailored for sensitive, high-value cargo.
                   </p>
                   <ul className="mt-8 space-y-4 text-sm font-bold text-[#122343] uppercase">
                     <li className="flex items-center gap-4">
                       <div className="w-2 h-2 bg-[#ef4444] rounded-full" /> Full Supply Chain Visibility
                     </li>
                     <li className="flex items-center gap-4">
                       <div className="w-2 h-2 bg-[#ef4444] rounded-full" /> Customs Clearance Optimization
                     </li>
                     <li className="flex items-center gap-4">
                       <div className="w-2 h-2 bg-[#ef4444] rounded-full" /> Cold-Chain & Specialized Handling
                     </li>
                   </ul>
                </div>
                <div className="relative aspect-square bg-[#122343] rounded-sm overflow-hidden p-2 shadow-2xl">
                   <div className="w-full h-full relative overflow-hidden group">
                      <Image 
                        src="/Images/high_tech_warehouse_logistics_1774990408228.png"
                        alt="Logistics Network"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80"
                      />
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>
      <FreightCalculaterLead />
    </main>
  );
}
