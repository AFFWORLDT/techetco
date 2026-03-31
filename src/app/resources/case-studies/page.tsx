"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { CaseStudyDownloadLead } from "@/components/sections/forms/CaseStudyDownloadLead";
import { caseStudies } from "@/data/case-studies";

export default function CaseStudiesPage() {
  return (
    <main className="w-full min-h-screen bg-[#050A15] pt-32 pb-24 overflow-hidden">
      {/* Immersive Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2ea2f7]/5 rounded-full blur-[200px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-8 mb-24 animate-in fade-in slide-in-from-top-12 duration-1000">
          <div className="flex items-center gap-4">
             <div className="w-12 h-0.5 bg-[#ef4444]" />
             <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white">Proven Results</span>
             <div className="w-12 h-0.5 bg-[#ef4444]" />
          </div>
          <h1 className="text-5xl md:text-8xl font-heading font-black text-white leading-[0.9] tracking-tighter uppercase">
             Strategic <br /> <span className="text-[#2ea2f7] italic">Triumphs</span>
          </h1>
          <p className="text-lg text-white/40 leading-relaxed max-w-2xl font-normal">
             Examine our vault of 20+ enterprise-grade case studies detailing how Tech ET Co restructured multi-million dollar supply chains across the globe.
          </p>
        </div>

        {/* Dynamic Case Studies Grid (20+ Items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
           {caseStudies.map((study, idx) => (
              <motion.div 
                 key={study.id}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: (idx % 4) * 0.1 }}
                 className="group relative"
              >
                 <Link href={`/resources/case-studies/${study.slug}`} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden bg-black border border-white/10 group-hover:border-white/30 transition-all">
                       <Image 
                          src={study.image}
                          alt={study.title}
                          fill
                          className="object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#050A15] to-transparent" />
                       
                       <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                          <div className="flex items-center gap-3 mb-4">
                             <div className="px-3 py-1 bg-[#ef4444] text-white text-[9px] font-black uppercase tracking-widest leading-none">
                                {study.industry}
                             </div>
                             <span className="text-white/50 text-[10px] uppercase font-bold tracking-widest">{study.client}</span>
                          </div>
                          
                          <h3 className="text-2xl lg:text-3xl font-black text-white leading-none uppercase tracking-tight mb-4 group-hover:text-[#2ea2f7] transition-colors">
                             {study.title}
                          </h3>

                          <p className="text-white/40 text-sm mb-6 line-clamp-2">
                             {study.desc}
                          </p>

                          <div className="flex items-center gap-6">
                             <div className="flex-1 border-t border-white/10 pt-4 flex items-center justify-between">
                                <span className="text-[10px] text-white/40 uppercase font-black tracking-widest">Key Metric</span>
                                <span className="text-[#ef4444] font-black text-sm">{study.metric}</span>
                             </div>
                             <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-[#ef4444] group-hover:border-transparent transition-all shrink-0">
                                <Icon icon="lucide:arrow-up-right" className="w-5 h-5" />
                             </div>
                          </div>
                       </div>
                    </div>
                 </Link>
              </motion.div>
           ))}
        </div>

      </div>

      <CaseStudyDownloadLead />
    </main>
  );
}
