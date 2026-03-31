"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function MobileSidebar({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (val: boolean) => void }) {
  const pathname = usePathname();

  // Close sidebar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  const links = [
    { label: "Home", href: "/" },
    { label: "Our Vision", href: "/company/our-vision" },
    { label: "Milestones", href: "/company/milestone" },
    { label: "Electronics Trading", href: "/solutions/electronics-trading" },
    { label: "Shipping Logistics", href: "/solutions/shipping-logistics" },
    { label: "Global Partnership", href: "/solutions/global-partnership" },
    { label: "Market Analysis", href: "/solutions/market-analysis" },
    { label: "Case Studies", href: "/resources/case-studies" },
    { label: "Blog & Intelligence", href: "/blog" },
    { label: "Contact Us", href: "/#contact" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
          />

          {/* Sidebar Drawer */}
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-[85%] max-w-[400px] h-[100dvh] bg-[#122343] z-[60] shadow-2xl overflow-y-auto border-l border-white/10 flex flex-col md:hidden"
          >
             <div className="flex items-center justify-between p-6 border-b border-white/10">
                <span className="text-white font-black tracking-tight text-xl uppercase">Tech ET <span className="text-[#ef4444]">Co</span></span>
                <button onClick={() => setIsOpen(false)} className="w-10 h-10 bg-white/5 flex items-center justify-center text-white hover:bg-[#ef4444] transition-colors rounded-sm">
                   <Icon icon="lucide:x" className="w-5 h-5" />
                </button>
             </div>

             <div className="flex-1 px-6 py-8 flex flex-col gap-4">
                <div className="text-[10px] text-white/50 uppercase font-black tracking-[0.3em] mb-4">Navigation</div>
                {links.map((link, i) => (
                   <motion.div 
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (i * 0.05) }}
                   >
                     <Link 
                        href={link.href}
                        className={`text-lg font-bold uppercase tracking-wide block py-2 ${pathname === link.href ? 'text-[#ef4444]' : 'text-white hover:text-[#2ea2f7]'} transition-colors`}
                     >
                        {link.label}
                     </Link>
                   </motion.div>
                ))}
             </div>

             <div className="p-6 border-t border-white/10 bg-black/20 flex flex-col gap-4">
                <button onClick={() => setIsOpen(false)} className="w-full bg-[#ef4444] text-white py-4 font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-[#2ea2f7] transition-all rounded-sm shadow-xl">
                    <Icon icon="lucide:phone-call" className="w-4 h-4" /> Priority Callback
                </button>
                <div className="mt-4 flex justify-center gap-6 text-white/40">
                   <Icon icon="mdi:linkedin" className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
                   <Icon icon="ri:twitter-x-fill" className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
                   <Icon icon="mdi:facebook" className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
                </div>
             </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
