"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { EnterpriseSupportTicket } from "@/components/sections/forms/EnterpriseSupportTicket";

export default function SupportHubPage() {
  return (
    <main className="w-full min-h-screen bg-gray-50 pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-5xl">
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
         >
            <h1 className="text-5xl md:text-8xl font-heading font-black text-[#122343] leading-tight tracking-tighter uppercase mb-4">
               Support <span className="text-[#2ea2f7] italic underline-offset-12 underline decoration-[#ef4444]">Hub</span>
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto">
              Dedicated assistance for our enterprise partners. Access technical documentations, tracking hubs, or reach out to your dedicated account manager.
            </p>
         </motion.div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "lucide:file-text", title: "API Documentation", desc: "Integrate our services directly into your platforms.", link: "#" },
              { icon: "lucide:package-search", title: "Live Tracking", desc: "Track current shipments with your 12-digit Secure ID.", link: "#" },
              { icon: "lucide:headset", title: "24/7 Concierge", desc: "Direct line to global support for urgent inquiries.", link: "/contact" }
            ].map((card, i) => (
              <motion.div 
                 key={i}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="bg-white p-10 border border-gray-100 shadow-xl hover:border-[#122343] transition-all group flex flex-col h-full"
              >
                 <div className="w-16 h-16 bg-[#122343] text-white rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <Icon icon={card.icon} className="w-8 h-8" />
                 </div>
                 <h3 className="text-2xl font-black text-[#122343] uppercase mb-4">{card.title}</h3>
                 <p className="text-gray-500 text-sm leading-relaxed mb-8 grow">{card.desc}</p>
                 <Link href={card.link} className="flex items-center gap-2 text-[#ef4444] font-black uppercase text-xs tracking-widest mt-auto">
                    Access Portal <Icon icon="lucide:arrow-right" className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                 </Link>
              </motion.div>
            ))}
         </div>
         <div className="mt-20">
            <EnterpriseSupportTicket />
         </div>
      </div>
    </main>
  );
}
