import Image from "next/image";
import { Icon } from "@iconify/react";

export function Introduction() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-background">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Modern Image Frame */}
          <div className="flex-1 relative group w-full max-w-[600px]">
            <div className="relative aspect-4/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image
                src="/Images/intro.png"
                alt="Techtrade Hub Dubai"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60" />
            </div>
            
            {/* Floating Achievement Card */}
            <div className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl border-primary/20 shadow-2xl animate-bounce-slow max-w-[200px]">
              <div className="space-y-2">
                <span className="text-3xl font-bold text-primary">10+</span>
                <p className="text-sm font-medium text-white/80 leading-tight">
                  Years of Excellence in Trade
                </p>
              </div>
            </div>

            {/* Decorative Borders */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-primary/30 rounded-tl-[3rem]" />
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <div className="w-8 h-px bg-primary" />
                <span className="text-primary font-bold tracking-widest uppercase text-xs">
                  Discover Our Story
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
                Pioneering the Future of <span className="text-primary">Global Commerce</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                At <span className="text-white font-semibold">Techtrade Hub Electronics Trading Co.</span>, we believe trade is more than just business – it's about building bridges, connecting markets, and empowering global growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Based in Dubai, the world's premier hub of innovation and commerce, we specialize in high-end electronics trading. With a passion for excellence and a commitment to transparency, we are your trusted partner in navigating complex global markets.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="flex items-start gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                   <Icon icon="lucide:shield-check" className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-white font-bold text-lg font-heading">Integrity</h4>
                  <p className="text-sm text-muted-foreground leading-snug">Transparent business practices at every step.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                   <Icon icon="lucide:cpu" className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-white font-bold text-lg font-heading">Innovation</h4>
                  <p className="text-sm text-muted-foreground leading-snug">Leveraging the latest tech for trade efficiency.</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button className="text-primary font-bold hover:underline flex items-center gap-2 group mx-auto lg:mx-0">
                Learn more about our values
                <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all">
                  <Icon icon="lucide:arrow-right" className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
