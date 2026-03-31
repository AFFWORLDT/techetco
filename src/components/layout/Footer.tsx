"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { FooterNewsletterLead } from "@/components/sections/forms/FooterNewsletterLead";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    SOLUTIONS: [
      { name: "Electronics Trading", href: "/solutions/electronics-trading" },
      { name: "Shipping Logistics", href: "/solutions/shipping-logistics" },
      { name: "Global Partnership", href: "/solutions/global-partnership" },
      { name: "Market Analysis", href: "/solutions/market-analysis" }
    ],
    COMPANY: [
      { name: "About Us", href: "/about" },
      { name: "Our Vision", href: "/company/our-vision" },
      { name: "Milestone", href: "/company/milestone" },
      { name: "Legal Notice", href: "/company/legal-notice" }
    ],
    RESOURCES: [
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/resources/case-studies" },
      { name: "FAQs", href: "/resources/faqs" },
      { name: "Support Hub", href: "/resources/support-hub" }
    ]
  };

  const socialLinks = [
    { icon: "ri:twitter-x-line", href: "#" },
    { icon: "ri:facebook-fill", href: "#" },
    { icon: "ri:youtube-fill", href: "#" },
    { icon: "ri:instagram-line", href: "#" },
    { icon: "ri:linkedin-fill", href: "#" }
  ];

  return (
    <footer className="w-full bg-[#122343] text-white pt-24">
      <div className="container mx-auto px-6">
        <div className="pb-16">
           <FooterNewsletterLead />
        </div>
        <div className="flex flex-col lg:flex-row gap-20 pb-20">
          {/* Brand Info */}
          <div className="lg:w-1/3 space-y-8">
            <Link href="/" className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                <span className="text-white font-black text-2xl tracking-tighter">T</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-heading font-black text-2xl tracking-tighter leading-none uppercase">TECH ET CO</span>
                <span className="text-white font-heading font-light text-[9px] tracking-[0.4em] mt-0.5 uppercase opacity-60 italic">ELECTRONICS TRADING</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Empowering global commerce through high-end electronics trading and seamless search-to-delivery logistics. Based in Dubai, serving the world.
            </p>
          </div>

          {/* Links Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-12">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="space-y-8">
                <h4 className="text-sm font-bold tracking-widest text-white uppercase">{title}</h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-xs text-gray-400 hover:text-white transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Stay Connected Section */}
          <div className="lg:w-1/5 space-y-12 relative lg:pl-12">
             {/* Red Accent Bar */}
             <div className="hidden lg:block absolute top-0 left-0 w-px h-full bg-[#ef4444]" />
             
             <div className="space-y-6">
                <h4 className="text-sm font-bold tracking-widest text-white uppercase">STAY CONNECTED</h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, i) => (
                    <Link 
                      key={i} 
                      href={social.href} 
                      className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-[#ef4444] hover:border-[#ef4444] transition-all"
                    >
                      <Icon icon={social.icon} className="w-5 h-5" />
                    </Link>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Section */}
      <div className="bg-[#1a1a1a] py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[11px] text-gray-400 font-medium tracking-wide text-center md:text-left">
            &copy; {currentYear} Tech ET Co Electronics Trading Co. LLC. All rights reserved. {" "}
            <Link href="/company/legal-notice" className="underline ml-2">Privacy Policy</Link>
          </p>
          <div className="flex items-center gap-6">
             <p className="text-[11px] text-gray-500 hidden md:block uppercase tracking-widest">Digital Solutions by Affworld</p>
             <button className="bg-[#ef4444] hover:bg-[#d93a3a] text-white text-[11px] font-bold px-10 py-3 uppercase tracking-widest transition-all">
                Accept Cookies
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
