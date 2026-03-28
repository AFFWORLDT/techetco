import Link from "next/link";
import { Icon } from "@iconify/react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerSections = [
    {
      title: "Solutions",
      links: [
        { name: "Electronics Trading", href: "#" },
        { name: "Shipping Logistics", href: "#" },
        { name: "Global Partnership", href: "#" },
        { name: "Market Analysis", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Vision", href: "#" },
        { name: "Milestone", href: "#" },
        { name: "Legal Notice", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Case Studies", href: "#" },
        { name: "FAQs", href: "#" },
        { name: "Support Hub", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: "mdi:facebook", href: "#" },
    { icon: "ri:twitter-x-fill", href: "#" },
    { icon: "mdi:linkedin", href: "#" },
    { icon: "mdi:instagram", href: "#" },
  ];

  return (
    <footer className="relative w-full pt-24 pb-12 overflow-hidden bg-background border-t border-white/5">
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          {/* Brand Info */}
          <div className="lg:w-1/3 space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gold-gradient rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-background font-bold text-2xl tracking-tighter">T</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl text-white tracking-widest uppercase">
                  Techtrade
                </span>
                <span className="text-[10px] text-primary/70 uppercase tracking-[0.4em] -mt-1 font-bold">
                  Hub Electronics
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">
              Empowering global commerce through high-end electronics trading and seamless logistics. Headquartered in Dubai.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, idx) => (
                <Link 
                  key={idx} 
                  href={social.href}
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center hover:bg-primary hover:text-background hover:scale-110 transition-all duration-300"
                >
                  <Icon icon={social.icon} className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav Sections */}
          <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-12">
            {footerSections.map((section, idx) => (
              <div key={idx} className="space-y-6">
                <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-4">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link href={link.href} className="text-muted-foreground text-sm hover:text-primary hover:pl-2 transition-all duration-300 flex items-center gap-2 group">
                        <Icon icon="lucide:arrow-right" className="w-0 h-3 group-hover:w-3 opacity-0 group-hover:opacity-100 transition-all text-primary" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="lg:w-1/4 space-y-8">
            <div className="glass-dark p-8 rounded-3xl border-white/5 relative overflow-hidden group">
              <div className="relative z-10 space-y-4">
                <h4 className="text-white font-bold text-lg">Newsletter</h4>
                <p className="text-xs text-muted-foreground">Get latest insights into global trade & market trends.</p>
                <div className="relative mt-4">
                  <input 
                    type="email" 
                    placeholder="Email address"
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-all pr-12"
                  />
                  <button className="absolute right-1 top-1 w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-background hover:scale-95 transition-all">
                    <Icon icon="lucide:send" className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 opacity-60">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <p className="text-[11px] text-muted-foreground uppercase tracking-[0.2em] font-bold">
              &copy; {currentYear} Techtrade Hub Electronics Trading Co. LLC.
            </p>
            <div className="hidden md:block w-px h-4 bg-white/20" />
            <p className="text-[11px] text-primary/80 uppercase tracking-[0.2em] font-bold px-4 py-1.5 glass rounded-full border-primary/20">
              All rights reserved @ Affworld
            </p>
          </div>
          
          <div className="flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-bold">
            <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
