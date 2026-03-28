"use client";

import Link from "next/link";
import Image from "next/image";
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
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Side: News & Announcements */}
          <div className="flex-1 space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-heading font-black text-[#122343]">News & Announcements</h2>
              <div className="w-12 h-1 bg-[#ef4444] rounded-full" />
            </div>

            <div className="space-y-12">
              {NEWS_ITEMS.map((news, idx) => (
                <div key={idx} className="space-y-6 pb-12 border-b border-gray-100 last:border-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="text-lg font-black text-[#122343] hover:text-[#2ea2f7] transition-colors cursor-pointer">
                      {news.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 whitespace-nowrap">
                      <span>{news.date}</span>
                      <span className="w-px h-3 bg-gray-200" />
                      <span className="text-[#122343]">{news.source}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                    {news.excerpt}
                  </p>
                  <button className="border border-[#122343] px-6 py-2 text-[10px] font-black uppercase tracking-widest text-[#122343] hover:bg-[#122343] hover:text-white transition-all">
                    READ MORE
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Training Card */}
          <div className="lg:w-[450px]">
            <div className="bg-[#f8f9fa] rounded-sm overflow-hidden shadow-sm sticky top-32">
              <div className="bg-[#6c757d] p-8">
                <h3 className="text-2xl font-heading font-bold text-white tracking-tight">
                  Internationally Recognised Trainings
                </h3>
              </div>
              
              <div className="relative aspect-video">
                <Image 
                  src="/Images/intro.png"
                  alt="Training Session"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 space-y-8">
                <p className="text-gray-500 text-sm leading-relaxed">
                  Techtrade Hub offers internationally recognised maritime and logistics courses delivered by accredited instructors, and boasts the highest standard of professional training for industry leaders.
                </p>
                <button className="w-full md:w-auto bg-[#122343] text-white px-8 py-4 text-[11px] font-black uppercase tracking-widest hover:bg-[#1a2d4f] transition-all">
                  EXPLORE TRAININGS
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
