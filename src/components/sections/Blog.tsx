"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

const BLOG_POSTS = [
  {
    slug: "future-of-global-electronics-trading",
    title: "The Future of Electronics Trading: A Global Perspective",
    date: "March 15, 2026",
    category: "Market Insights",
    image: "/Images/modern_business_presentation_1774990438667.png",
    excerpt: "Exploring how blockchain and AI are redefining procurement and logistics in the global electronics market."
  },
  {
    slug: "navigating-logistics-middle-east",
    title: "Strategic Trade Corridor: Why Dubai is the Nexus of Trade",
    date: "March 10, 2026",
    category: "Logistics",
    image: "/Images/electronics_trading_market_1774990567892.png",
    excerpt: "Dissecting the economic factors that make Dubai the world’s premier hub for international trade operations."
  },
  {
    slug: "sustainable-practices-trading",
    title: "Sustainable Practices in Trading Partnerships",
    date: "March 05, 2026",
    category: "Sustainability",
    image: "/Images/dubai_port_night_1774990423967.png",
    excerpt: "A deep dive into zero-emission shipping and the technological innovations driving supply chain efficiency."
  }
];

export function Blog() {
  return (
    <section className="relative w-full py-16 md:py-32 bg-[#122343] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-12 md:mb-20 animate-in fade-in duration-1000">
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-4">
               <div className="w-8 md:w-12 h-1 bg-[#ef4444] rounded-full" />
               <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#2ea2f7]">Our Blog</span>
            </div>
            <h2 className="text-3xl md:text-6xl font-heading font-black text-white leading-tight tracking-tighter uppercase mb-2">
              Strategic <span className="text-white italic opacity-80 md:decoration-[#ef4444] md:decoration-2 md:underline-offset-8 md:underline">Insights</span>
            </h2>
          </div>
          <Link href="/blog" className="flex items-center gap-4 font-black uppercase tracking-widest text-[9px] md:text-[10px] text-white/60 hover:text-white group">
             EXPLORE ALL POSTS
             <div className="w-8 h-8 md:w-10 md:h-10 border border-white/20 flex items-center justify-center rounded-full group-hover:bg-[#ef4444] group-hover:border-transparent transition-all">
               <Icon icon="lucide:arrow-right" className="w-4 h-4" />
             </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {BLOG_POSTS.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group relative flex flex-col bg-white/5 border border-white/5 overflow-hidden shadow-2xl hover:border-white/10 transition-all hover:bg-white/10"
            >
              <div className="relative aspect-video overflow-hidden">
                 <Image 
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 {/* Visual Category Badge */}
                 <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-1 md:px-4 md:py-1.5 text-[#122343] text-[8px] md:text-[9px] font-black uppercase tracking-widest shadow-2xl">
                    {post.category}
                 </div>
              </div>

              <div className="p-6 md:p-8 space-y-4 md:space-y-6">
                 <div className="flex items-center gap-2 text-[8px] md:text-[10px] font-bold text-white/40 uppercase tracking-widest">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-[#ef4444] rounded-full" />
                    <span>Tech ET Co Editorial</span>
                 </div>
                 
                 <h4 className="text-lg md:text-xl font-black text-white hover:text-[#2ea2f7] transition-colors leading-tight">
                    {post.title}
                 </h4>
                 
                 <p className="text-white/40 text-[11px] md:text-xs leading-relaxed line-clamp-2">
                    {post.excerpt}
                 </p>
                 
                 <div className="pt-4 flex items-center justify-between md:opacity-0 md:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-[9px] md:text-[10px] uppercase font-black tracking-[0.2em] md:tracking-[0.3em] text-[#ef4444]">Read Full Report</span>
                    <Icon icon="lucide:arrow-right" className="w-4 h-4 md:w-5 md:h-5 text-[#ef4444]" />
                 </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

  );
}
