"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "EXPLORE", href: "/" },
    { name: "TRAINING", href: "#training" },
    { name: "NEWS & ANNOUNCEMENTS", href: "/blog" },
    { name: "HELP", href: "#help" }
  ];

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-[#122343] py-4" : "bg-transparent py-8"}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
              <span className="text-white font-black text-2xl tracking-tighter">T</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-heading font-black text-xl tracking-tighter leading-none uppercase">TECH ET CO</span>
              <span className="text-white font-heading font-light text-[9px] tracking-[0.4em] mt-0.5 uppercase opacity-60 italic">ELECTRONICS TRADING</span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-[11px] font-bold text-white/80 hover:text-white tracking-widest transition-colors uppercase"
              >
                {link.name}
              </Link>
            ))}
            <Icon icon="lucide:search" className="w-5 h-5 text-white/60 hover:text-white transition-colors cursor-pointer" />
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
             <Link href="#service-center" className="hidden md:flex items-center gap-2 bg-white px-6 py-2.5 rounded-sm hover:bg-white/90 transition-all text-[#122343] text-[10px] font-black uppercase tracking-widest">
               <Icon icon="lucide:monitor" className="w-4 h-4" />
               SERVICE CENTER
             </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
