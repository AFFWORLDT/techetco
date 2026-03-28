"use client";

import { Icon } from "@iconify/react";

const CONTACT_INFO = [
  { icon: "lucide:map-pin", label: "Address", value: "Dubai Silicon Oasis, Dubai, UAE" },
  { icon: "lucide:phone", label: "Phone", value: "+971 4 000 0000" },
  { icon: "lucide:mail", label: "Email", value: "info@techetco.com" }
];

export function Contact() {
  return (
    <section id="contact" className="relative w-full py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          
          {/* Left Side: Strategic Inquiry Contact Block */}
          <div className="flex-1 space-y-16">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-0.5 bg-[#ef4444]" />
                 <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#122343]">Contact Tech ET Co</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-[#122343] leading-[0.95] tracking-tighter uppercase">
                Strategic <br /> <span className="text-[#2ea2f7]">Partnership</span> <br /> Inquiry
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed font-normal max-w-xl">
                 Connect with our team of global trade specialists to discuss high-value electronics procurement, logistics agility, and technical partnership opportunities within the Dubai corridor.
              </p>
            </div>

            <div className="space-y-12">
               {CONTACT_INFO.map((info, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                     <div className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center text-[#ef4444] group-hover:bg-[#ef4444] group-hover:text-white group-hover:border-transparent transition-all">
                        <Icon icon={info.icon} className="w-6 h-6" />
                     </div>
                     <div className="space-y-1">
                        <p className="text-[10px] uppercase font-black tracking-widest text-[#2ea2f7]">{info.label}</p>
                        <h5 className="font-black text-[#122343] text-lg uppercase tracking-wider">{info.value}</h5>
                     </div>
                  </div>
               ))}
            </div>
          </div>

          {/* Right Side: Pro UI Contact Form Block */}
          <div className="flex-1 w-full bg-[#122343] p-12 md:p-16 rounded-sm shadow-3xl text-white relative group overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#ef4444]/10 rounded-full blur-[100px] group-hover:bg-[#ef4444]/20 transition-all" />
             <div className="relative z-10 space-y-10">
                <div className="space-y-2">
                   <h3 className="text-2xl font-black uppercase tracking-widest text-white leading-none">Inquiry Form</h3>
                   <p className="text-[10px] uppercase font-bold text-white/50 tracking-[0.4em]">Connect with our trade desk</p>
                </div>

                <form className="space-y-8">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                         <label className="text-[10px] uppercase font-black text-white/40 tracking-widest">Full Name</label>
                         <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#ef4444] transition-all text-white font-bold" placeholder="Required" />
                      </div>
                      <div className="space-y-3">
                         <label className="text-[10px] uppercase font-black text-white/40 tracking-widest">Email Address</label>
                         <input type="email" className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#ef4444] transition-all text-white font-bold" placeholder="yourname@domain.com" />
                      </div>
                   </div>
                   <div className="space-y-3">
                      <label className="text-[10px] uppercase font-black text-white/40 tracking-widest">Inquiry Message</label>
                      <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#ef4444] transition-all text-white font-bold resize-none" placeholder="Detail your trade requirement..."></textarea>
                   </div>
                   
                   <div className="pt-8">
                      <button className="w-full md:w-auto bg-[#ef4444] hover:bg-[#d93a3a] text-white px-12 py-5 font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-4 group">
                         SUBMIT INQUIRY
                         <Icon icon="lucide:send" className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                   </div>
                </form>
             </div>
             
             {/* Red Vertical Bar Accent Overlay */}
             <div className="absolute top-1/2 -left-1 w-1 h-[60%] bg-[#ef4444] -translate-y-1/2 rounded-full" />
          </div>

        </div>
      </div>
    </section>
  );
}
