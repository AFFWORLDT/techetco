"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

const SAMPLE_POSTS = [
  {
    id: "1",
    title: "The Future of Global Electronics Trading",
    excerpt: "Discover how emerging technologies are reshaping supply chains and international markets in the upcoming decade.",
    date: "March 15, 2026",
    category: "Insights",
    image: "/Images/intro.png"
  },
  {
    id: "2",
    title: "Navigating Logistics in the Middle East",
    excerpt: "A comprehensive guide to leveraging Dubai's strategic location for optimized distribution networks.",
    date: "April 2, 2026",
    category: "Logistics",
    image: "/Images/service-electronics.png"
  },
  {
    id: "3",
    title: "Sustainable Practices in Trading Partnerships",
    excerpt: "Why sustainability is becoming the core driver of value in large-scale international B2B operations.",
    date: "May 10, 2026",
    category: "Sustainability",
    image: "/Images/service-shipping.png"
  }
];

export default function BlogPage() {
  return (
    <main className="w-full min-h-screen bg-[#122343] pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-8 mb-24 animate-in fade-in slide-in-from-top-12 duration-1000">
          <div className="flex items-center gap-4">
             <div className="w-12 h-1 bg-[#ef4444] rounded-full" />
             <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2ea2f7]">The Intelligence Hub</span>
             <div className="w-12 h-1 bg-[#ef4444] rounded-full" />
          </div>
          <h1 className="text-5xl md:text-8xl font-heading font-black text-white leading-tight tracking-tighter uppercase">
             Strategic <span className="text-[#2ea2f7] italic decoration-[#ef4444] underline-offset-12 underline">Insights</span>
          </h1>
          <p className="text-lg text-white/50 leading-relaxed max-w-2xl font-normal">
             Explore our latest analytical reports, market insights, and logistics news surrounding the global trading architecture and electronics industry.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {SAMPLE_POSTS.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.id}`}
              className="group relative flex flex-col bg-white/5 border border-white/5 overflow-hidden shadow-2xl hover:border-white/10 transition-all hover:bg-white/10"
            >
              <div className="relative aspect-video overflow-hidden">
                 <Image 
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute bottom-4 left-4 bg-white/95 px-4 py-1.5 text-[#122343] text-[9px] font-black uppercase tracking-widest shadow-2xl">
                    {post.category}
                 </div>
              </div>

              <div className="p-8 space-y-6">
                 <div className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-[#ef4444] rounded-full" />
                    <span>Tech ET Co Editorial</span>
                 </div>
                 
                 <h4 className="text-xl font-black text-white group-hover:text-[#2ea2f7] transition-colors leading-tight min-h-[56px]">
                    {post.title}
                 </h4>
                 
                 <p className="text-white/40 text-xs leading-relaxed line-clamp-3">
                    {post.excerpt}
                 </p>
                 
                 <div className="pt-4 flex items-center justify-between opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-[10px] uppercase font-black tracking-[0.3em] text-[#ef4444]">View Full Report</span>
                    <Icon icon="lucide:arrow-right" className="w-5 h-5 text-[#ef4444]" />
                 </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Cinematic Backdrop Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ef4444]/5 rounded-full blur-[150px] -z-10" />
      </div>
    </main>
  );
}
