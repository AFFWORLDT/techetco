"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { HeaderCallbackModal } from "@/components/sections/forms/HeaderCallbackModal";
import { MobileSidebar } from "@/components/layout/MobileSidebar";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "EXPLORE", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "NEWS & ANNOUNCEMENTS", href: "/blog" },
    { name: "HELP", href: "/resources/support-hub" }
  ];

  return (
    <>
      <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-[#122343] py-4 shadow-xl" : "bg-transparent py-8"}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-2 md:gap-4 z-50">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                <span className="text-white font-black text-xl md:text-2xl tracking-tighter">T</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-heading font-black text-sm md:text-xl tracking-tighter leading-none uppercase">TECH ET CO</span>
                <span className="text-white font-heading font-light text-[7px] md:text-[9px] tracking-[0.4em] mt-0.5 uppercase opacity-60 italic whitespace-nowrap">ELECTRONICS TRADING</span>
              </div>
            </Link>

            {/* Nav Links */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => {
                const isActive = link.href === "/" 
                  ? pathname === "/" 
                  : pathname.startsWith(link.href);
                return (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    className={`text-[11px] font-bold tracking-widest transition-all uppercase flex flex-col items-center gap-1 group ${isActive ? "text-[#ef4444]" : "text-white/80 hover:text-white"}`}
                  >
                    {link.name}
                    <div className={`w-1 h-1 rounded-full transition-all ${isActive ? "bg-[#ef4444] opacity-100" : "bg-transparent opacity-0 group-hover:bg-white/20 group-hover:opacity-100"}`} />
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-4">
               {/* Hidden on mobile, shown on desktop */}
               <div className="hidden md:block">
                 <HeaderCallbackModal />
               </div>
               
               <Link href="/resources/support-hub" className="hidden md:flex items-center gap-2 bg-white px-6 py-2.5 rounded-sm hover:bg-white/90 transition-all text-[#122343] text-[10px] font-black uppercase tracking-widest">
                 <Icon icon="lucide:monitor" className="w-4 h-4" />
                 SUPPORT HUB
               </Link>

               {/* Mobile Hamburger Button */}
               <button 
                  onClick={() => setIsMobileOpen(true)}
                  className="lg:hidden w-10 h-10 bg-white/10 border border-white/20 flex items-center justify-center text-white rounded-sm"
               >
                 <Icon icon="lucide:menu" className="w-5 h-5" />
               </button>
            </div>
          </div>
        </div>
      </header>
      
      <MobileSidebar isOpen={isMobileOpen} setIsOpen={setIsMobileOpen} />
    </>
  );
}
