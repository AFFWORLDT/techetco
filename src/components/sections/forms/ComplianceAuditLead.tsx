"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export function ComplianceAuditLead() {
  return (
    <div className="bg-[#f8fafc] border border-[#e2e8f0] p-8 md:p-12 mb-16 relative overflow-hidden">
       {/* Decorative subtle pattern */}
       <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#122343 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
       
       <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-5/12">
             <div className="w-16 h-16 bg-white shadow-xl rounded-full flex items-center justify-center mb-6 border border-gray-100">
                <Icon icon="lucide:shield-check" className="w-8 h-8 text-[#122343]" />
             </div>
             <h3 className="text-3xl font-black text-[#122343] uppercase tracking-tight mb-4">
                Corporate <span className="text-[#ef4444]">Compliance</span> Audit
             </h3>
             <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Request a comprehensive due diligence package detailing our trade compliance, ISO certifications, and international logistics regulatory adherence.
             </p>
             <div className="inline-flex items-center gap-2 text-xs font-bold text-[#122343] uppercase tracking-widest bg-white py-2 px-4 shadow-sm border border-gray-200">
                <Icon icon="lucide:lock" className="w-4 h-4 text-[#ef4444]" /> NDA Required
             </div>
          </div>

          <form className="md:w-7/12 w-full bg-white p-8 shadow-2xl border border-gray-100 relative">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#122343] to-[#ef4444]" />
             
             <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                   <div>
                     <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Legal Entity Name</label>
                     <input type="text" required className="w-full border-b-2 border-gray-100 py-3 text-sm focus:border-[#122343] outline-none transition-colors" />
                   </div>
                   <div>
                     <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Compliance Officer</label>
                     <input type="text" required className="w-full border-b-2 border-gray-100 py-3 text-sm focus:border-[#122343] outline-none transition-colors" />
                  </div>
                </div>
                
                <div>
                   <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Official Corporate Email</label>
                   <input type="email" required className="w-full border-b-2 border-gray-100 py-3 text-sm focus:border-[#122343] outline-none transition-colors" />
                </div>

                <div>
                   <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Documentation Needed</label>
                   <select className="w-full border-b-2 border-gray-100 py-3 text-sm focus:border-[#122343] outline-none transition-colors appearance-none cursor-pointer">
                      <option>Full Corporate Audit Package</option>
                      <option>Environmental & ESG Report</option>
                      <option>Customs & Trade Regulations</option>
                      <option>Financial & Credit Integrity</option>
                   </select>
                </div>
                
                <button className="w-full mt-6 bg-[#122343] hover:bg-[#ef4444] text-white py-4 font-black uppercase tracking-[0.2em] text-[10px] transition-colors shadow-lg">
                   Initiate Secure Request
                </button>
             </div>
          </form>
       </div>
    </div>
  );
}
