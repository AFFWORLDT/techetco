"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export function EnterpriseSupportTicket() {
  return (
    <div className="bg-white border text-left border-gray-200 p-8 md:p-12 shadow-xl">
       <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-[#122343] rounded-sm flex items-center justify-center text-white">
             <Icon icon="lucide:life-buoy" className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-[#122343] uppercase tracking-tight">Open Support Ticket</h3>
            <p className="text-gray-500 text-sm">Priority queue for active enterprise partners.</p>
          </div>
       </div>

       <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
               <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Account ID / CID</label>
               <input type="text" required className="w-full bg-gray-50 border border-gray-200 p-3 rounded-sm focus:border-[#122343] outline-none" placeholder="TE-00000" />
             </div>
             <div className="space-y-2">
               <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Priority Level</label>
               <select className="w-full bg-gray-50 border border-gray-200 p-3 rounded-sm focus:border-[#122343] outline-none appearance-none">
                  <option>Standard (24h Response)</option>
                  <option>Urgent (4h Response)</option>
                  <option>Critical (1h Response - SLAs only)</option>
               </select>
             </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Issue Area</label>
            <select className="w-full bg-gray-50 border border-gray-200 p-3 rounded-sm focus:border-[#122343] outline-none appearance-none">
               <option>Logistics Tracking Error</option>
               <option>Electronics Shipment Delay</option>
               <option>Billing & Invoicing</option>
               <option>API / Integration Support</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Detailed Description</label>
            <textarea rows={5} required className="w-full bg-gray-50 border border-gray-200 p-3 rounded-sm focus:border-[#122343] outline-none" placeholder="Please describe the issue with as much detail as possible..."></textarea>
          </div>

          <button className="w-full bg-[#122343] text-white py-4 font-black uppercase tracking-widest text-xs hover:bg-[#ef4444] transition-colors rounded-sm shadow-md">
             Submit Ticket to Engineering
          </button>
       </form>
    </div>
  );
}
