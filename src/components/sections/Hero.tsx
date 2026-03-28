import Image from "next/image";
import { Icon } from "@iconify/react";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/bg.jpg"
          alt="Dubai Tech"
          fill
          className="object-cover object-center scale-105 animate-pulse-slow font-heading"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-background z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left Content: Branding & Main Headline */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-block glass px-6 py-2 rounded-full border-primary/20 mb-4 animate-in fade-in slide-in-from-top-4 duration-1000">
              <span className="text-primary font-medium tracking-widest uppercase text-xs">
                Welcome to Techtrade Hub
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-heading font-bold text-white leading-none tracking-tight animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
              Empowering <br />
              <span className="text-primary text-glow">Global Trade</span>
            </h1>

            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed mx-auto lg:mx-0 animate-in fade-in slide-in-from-left-8 duration-1000 delay-300">
              Your premier partner in high-end electronics trading and seamless global logistics, headquartered in the heart of Dubai.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
              <button className="bg-primary hover:bg-primary/90 text-background px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 flex items-center gap-2">
                Our Services
                <Icon icon="lucide:arrow-right" className="w-5 h-5" />
              </button>
              <button className="glass hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all border-white/10">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Content: Logo Card / Visual Element */}
          <div className="flex-1 relative animate-in fade-in zoom-in duration-1000 delay-300">
            <div className="glass-dark p-8 md:p-12 rounded-[2rem] border-primary/30 max-w-[500px] mx-auto relative group">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-colors" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />

              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 bg-gold-gradient rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden group">
                  <span className="text-background font-bold text-4xl relative z-10 transition-transform group-hover:scale-110">T</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-widest text-primary uppercase">
                    Techtrade Hub
                  </h2>
                  <p className="text-sm text-muted-foreground uppercase tracking-[0.3em] font-medium">
                    Electronics Trading Co. LLC
                  </p>
                </div>

                <div className="w-16 h-px bg-primary/30" />

                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground/80 leading-relaxed italic">
                    "Bridging technology and commerce across the global landscape with precision and integrity."
                  </p>
                  <div className="flex items-center justify-center gap-2 text-primary/70 font-heading font-semibold">
                    <Icon icon="lucide:map-pin" className="w-4 h-4" />
                    Dubai • UAE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce opacity-50">
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <Icon icon="lucide:mouse" className="w-5 h-5 text-primary" />
      </div>
    </section>
  );
}
