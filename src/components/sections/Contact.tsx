import { Icon } from "@iconify/react";

export function Contact() {
  const contactInfo = [
    { icon: "lucide:phone", label: "Phone", value: "+971 56 666 2351" },
    { icon: "lucide:mail", label: "Email", value: "info@techetco.com" },
    { icon: "lucide:globe", label: "Web", value: "www.techetco.com" },
    { icon: "lucide:map-pin", label: "Address", value: "Ontario Tower, Business Bay, Dubai, UAE" },
  ];

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-background">
      {/* Decorative background visual */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-24">
          
          {/* Left Content: Contact Information */}
          <div className="flex-1 space-y-12">
            <div className="space-y-4 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <div className="w-8 h-px bg-primary" />
                <span className="text-primary font-bold tracking-widest uppercase text-xs">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
                Let's Start a <br />
                <span className="text-primary">Conversation</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-md mx-auto lg:mx-0">
                Ready to take your business to the next level? Our team is here to help you navigate global trade with ease.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, i) => (
                <div 
                  key={i}
                  className="glass p-6 rounded-2xl border-white/5 group hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all">
                      <Icon icon={info.icon} className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{info.label}</p>
                      <p className="text-sm font-semibold text-white/90">{info.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
               <button className="w-full lg:w-auto bg-primary text-background px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                 Send us a Message
                 <Icon icon="lucide:send" className="w-5 h-5" />
               </button>
            </div>
          </div>

          {/* Right Content: Modern Visual Frame */}
          <div className="flex-1 min-h-[400px] relative rounded-[3rem] overflow-hidden border border-white/10 group">
             {/* Simple Map-like background visual or abstract tech pattern */}
             <div className="absolute inset-0 bg-slate-900">
                {/* Abstract Tech Grid */}
                <div className="absolute inset-0 opacity-20" 
                     style={{ backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
                />
                
                {/* Floating "Dubai" Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/40 rounded-full animate-ping" />
                    <div className="w-12 h-12 bg-primary rounded-full border-4 border-background flex items-center justify-center text-background relative z-10 shadow-2xl">
                      <Icon icon="lucide:map-pin" className="w-6 h-6" />
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 glass px-4 py-2 rounded-xl border-primary/30 whitespace-nowrap">
                      <span className="text-sm font-bold text-white tracking-widest uppercase">Dubai, UAE</span>
                    </div>
                  </div>
                </div>
             </div>
             
             {/* Top corner decoration */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-primary/20 to-transparent p-px rounded-bl-[4rem]">
                <div className="w-full h-full bg-background/50 backdrop-blur-sm rounded-bl-[4rem]" />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
