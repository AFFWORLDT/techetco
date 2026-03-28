"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

const NEWS_ITEMS = [
  {
    title: "Update: Extension of 24/7 Truck Access Across Dubai",
    date: "March 23, 2026",
    source: "DP World",
    excerpt: "Dubai's Roads and Transport Authority (RTA) and Dubai Police have announced a further extension to the temporary lifting of truck movement restrictions..."
  },
  {
    title: "NIP Advisory: Unstable Weather Safety Measures & Protocols",
    date: "March 22, 2026",
    source: "National Industries Park",
    excerpt: "Please be advised that unstable weather conditions (rain, thunder, and fog) are forecast across the UAE. To help protect your facilities, operations, and staff..."
  },
  {
    title: "Jafza Advisory: Unstable Weather Safety Measures & Guidelines",
    date: "March 22, 2026",
    source: "Jafza",
    excerpt: "In view of the expected weather conditions, please take necessary precautions to ensure the safety of your personnel and property within Jafza..."
  }
];

export function NewsAndTrainings() {
  return (
    <section id="news" className="w-full py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col space-y-16">
          
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-b border-gray-100 pb-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-1 bg-[#ef4444] rounded-full" />
                 <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#122343]">Corporate Updates</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-[#122343] leading-tight tracking-tighter uppercase">
                News & <span className="text-[#2ea2f7]">Announcements</span>
              </h2>
            </div>
            <Link href="#" className="flex items-center gap-4 font-black uppercase tracking-widest text-[10px] text-[#122343]/60 hover:text-[#122343] group">
               VIEW ALL UPDATES
               <div className="w-10 h-10 border border-gray-100 flex items-center justify-center rounded-full group-hover:bg-[#ef4444] group-hover:border-transparent group-hover:text-white transition-all">
                 <Icon icon="lucide:arrow-right" className="w-4 h-4" />
               </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-4">
            {NEWS_ITEMS.map((news, idx) => (
              <div key={idx} className="group flex flex-col space-y-8 bg-gray-50/50 p-10 hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-gray-100">
                <div className="flex items-center justify-between">
                   <span className="text-[10px] font-black uppercase tracking-widest text-[#ef4444]">{news.source}</span>
                   <span className="text-[10px] font-bold text-gray-400">{news.date}</span>
                </div>
                
                <h3 className="text-xl font-black text-[#122343] hover:text-[#2ea2f7] transition-colors leading-tight min-h-[56px]">
                  {news.title}
                </h3>
                
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                  {news.excerpt}
                </p>
                
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                   <span className="text-[10px] uppercase font-black tracking-[0.3em] text-[#122343]">Read Briefing</span>
                   <Icon icon="lucide:arrow-right" className="w-5 h-5 text-[#ef4444]" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
