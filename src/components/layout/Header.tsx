"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-500 rounded-2xl border ${
          scrolled 
            ? "glass-dark border-white/10 shadow-2xl py-3" 
            : "bg-transparent border-transparent py-2"
        }`}>
          <div className="flex items-center justify-between px-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gold-gradient rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12">
                <span className="text-background font-bold text-xl">T</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-white tracking-widest uppercase group-hover:text-primary transition-colors">
                  Techtrade
                </span>
                {!scrolled && (
                  <span className="text-[8px] text-primary/70 uppercase tracking-[0.3em] -mt-1 font-bold">
                    Hub Electronics
                  </span>
                )}
              </div>
            </Link>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="text-sm font-bold text-white/70 hover:text-primary transition-all relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
                </Link>
              ))}
            </nav>
            
            <div className="hidden md:flex items-center gap-4">
              <Link href="/contact" className="group">
                <div className="bg-primary hover:bg-primary/90 text-background px-6 py-2.5 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
                  Connect
                  <Icon icon="lucide:arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden text-primary p-2 hover:bg-white/5 rounded-xl transition-colors" 
              onClick={() => setIsOpen(!isOpen)}
            >
              <Icon icon={isOpen ? "lucide:x" : "lucide:menu"} className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-500 ${
        isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}>
        <div className="container mx-auto px-6 pt-4">
          <div className="glass-dark border-white/10 rounded-[2rem] p-8 flex flex-col items-center gap-8 shadow-2xl">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className="text-2xl font-heading font-bold text-white/80 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)} className="w-full">
              <div className="bg-primary text-background text-center py-4 rounded-2xl font-bold text-lg shadow-lg shadow-primary/20">
                Get In Touch
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
