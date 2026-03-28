export function ThankYou() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-background">
      {/* Decorative background visual */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
         <div className="absolute inset-x-0 top-1/2 h-1/2 bg-linear-to-b from-transparent to-primary/5" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-dark p-12 md:p-24 rounded-[4rem] border-white/5 text-center space-y-8 relative overflow-hidden group">
          {/* Animated Background Element */}
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-primary/10 rounded-full blur-[120px] group-hover:bg-primary/20 transition-all duration-1000" />
          
          <div className="space-y-4 relative z-10">
            <h2 className="text-4xl md:text-8xl font-heading font-bold text-white tracking-tighter">
              Thank <span className="text-primary text-glow">You</span>
            </h2>
            <div className="w-24 h-px bg-primary mx-auto" />
          </div>

          <p className="text-xl md:text-3xl text-white/80 font-medium max-w-3xl mx-auto relative z-10 leading-relaxed">
            We appreciate your interest in <span className="text-primary">Techtrade Hub</span>. We look forward to building a prosperous future together through excellence and innovation.
          </p>

          <div className="pt-8 relative z-10">
            <p className="text-sm text-muted-foreground uppercase tracking-[0.5em] font-bold">
              Techtrade Hub Electronics Trading Co. LLC
            </p>
          </div>

          {/* Decorative Corner Elements */}
          <div className="absolute top-12 left-12 w-6 h-6 border-t border-l border-primary/40 rounded-tl-lg" />
          <div className="absolute bottom-12 right-12 w-6 h-6 border-b border-r border-primary/40 rounded-br-lg" />
        </div>
      </div>
    </section>
  );
}
