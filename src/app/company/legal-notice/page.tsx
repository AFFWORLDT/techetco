"use client";

import { motion } from "framer-motion";
import { ComplianceAuditLead } from "@/components/sections/forms/ComplianceAuditLead";

export default function LegalNoticePage() {
  return (
    <main className="w-full min-h-screen bg-gray-50 pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 border-b border-gray-200 pb-12"
         >
            <h1 className="text-4xl md:text-6xl font-heading font-black text-[#122343] leading-tight tracking-tighter uppercase mb-4">
               Legal <span className="text-[#ef4444]">Notice</span>
            </h1>
            <p className="text-gray-500">Effective Date: March 2026</p>
         </motion.div>

         <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-slate max-w-none text-gray-600 space-y-8"
         >
            <section>
              <h3 className="text-2xl font-black text-[#122343] uppercase tracking-tighter">1. General Information</h3>
              <p>
                Tech ET Co Electronics Trading Co. LLC operates this website. By accessing and utilizing our digital platform, you agree to adhere to the strict international trade regulations and terms outlined herein.
              </p>
            </section>
            <section>
              <h3 className="text-2xl font-black text-[#122343] uppercase tracking-tighter">2. Trading Compliance</h3>
              <p>
                All trading activities referenced or executed through Tech ET Co are subject to the jurisdiction of the United Arab Emirates and specific bilateral trade agreements associated with the origin and destination of the electronics and components.
              </p>
            </section>
            <section>
              <h3 className="text-2xl font-black text-[#122343] uppercase tracking-tighter">3. Intellectual Property</h3>
              <p>
                The visual identity, reports, analyses, and layout found on this site are the exclusive property of Tech ET Co. Unauthorized reproduction, distribution, or data scraping is strictly prohibited and enforceable under international IP laws.
              </p>
            </section>
         </motion.div>
         <div className="mt-20">
            <ComplianceAuditLead />
         </div>
      </div>
    </main>
  );
}
