import { Icon } from "@iconify/react";

export function OurVision() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-background">
      {/* Subtle Background Visual */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
         <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.75_0.15_85/0.05)_0%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary font-bold tracking-widest uppercase text-xs">
                Our Future Outlook
              </span>
              <div className="w-8 h-px bg-primary" />
            </div>
            <h2 className="text-4xl md:text-7xl font-heading font-bold text-white">
              A Vision for <span className="text-primary">Global Impact</span>
            </h2>
          </div>

          <div className="glass-dark p-8 md:p-16 rounded-[3rem] border-primary/20 relative overflow-hidden group">
            {/* Inner Decorative Background */}
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700" />
            
            <p className="text-xl md:text-3xl text-white/90 leading-relaxed font-medium relative z-10 italic">
              "To be a leading global trading partner that empowers businesses with innovative solutions, trusted partnerships, and sustainable growth. We bridge markets across continents, harness technology to deliver excellence, and create value that drives progress worldwide."
            </p>
            
            <div className="absolute bottom-8 right-12 opacity-10 group-hover:opacity-20 transition-opacity">
              <Icon icon="fa6-solid:quote-right" className="w-16 h-16 text-primary" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">Global</div>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">Reach</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">Trusted</div>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">Partnerships</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">Innovative</div>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
