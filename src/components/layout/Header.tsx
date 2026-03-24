"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-[#0F111A]/95 supports-backdrop-filter:bg-[#0F111A]/60 backdrop-blur">
      <div className="container mx-auto px-4 flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-primary border border-primary p-1 w-10 h-10 flex items-center justify-center font-bold text-xl">
            T
          </div>
          <span className="font-bold text-2xl text-primary tracking-widest uppercase">Techetco</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <Link href="/" className="transition-colors hover:text-primary text-gray-300">Home</Link>
          <Link href="/about" className="transition-colors hover:text-primary text-gray-300">About</Link>
          <Link href="/blog" className="transition-colors hover:text-primary text-gray-300">Blog</Link>
          <Link href="/contact" className="transition-colors hover:text-primary text-gray-300">Contact</Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact">
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-black font-semibold rounded-none px-8">Get In Touch</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#0F111A] border-b border-primary/20 shadow-xl flex flex-col items-center py-8 gap-6 z-40">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-xl text-gray-300 hover:text-primary transition-colors">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-xl text-gray-300 hover:text-primary transition-colors">About</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="text-xl text-gray-300 hover:text-primary transition-colors">Blog</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-xl text-gray-300 hover:text-primary transition-colors">Contact</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-4">
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-black font-semibold rounded-none px-12">Get In Touch</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
