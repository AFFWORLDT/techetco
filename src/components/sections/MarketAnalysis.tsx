import { Icon } from "@iconify/react";

export function MarketAnalysis() {
  const analysisPoints = [
    { label: "Global Partnership", value: "25%", color: "oklch(0.75 0.15 85)", icon: "lucide:users" },
    { label: "Electronics Trading", value: "35%", color: "oklch(0.65 0.15 85)", icon: "lucide:cpu" },
    { label: "Shipping & Logistics", value: "20%", color: "oklch(0.85 0.15 85)", icon: "lucide:truck" },
    { label: "Market Growth", value: "20%", color: "oklch(0.55 0.1 85)", icon: "lucide:trending-up" },
  ];

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-background">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content: Data Visualization Visual */}
          <div className="flex-1 relative w-full max-w-[500px] aspect-square flex items-center justify-center">
            {/* Multi-layered Glass Visual */}
            <div className="relative w-full h-full animate-in zoom-in spin-in-1 duration-1000">
               {/* Outer ring */}
               <div className="absolute inset-0 rounded-full border border-primary/20 p-8 shadow-2xl glass-dark">
                 <div className="absolute inset-2 rounded-full border border-primary/20 border-dashed animate-spin-slow" />
               </div>
               
               {/* Middle ring */}
               <div className="absolute inset-12 rounded-full glass border-primary/30 flex items-center justify-center shadow-2xl transition-transform hover:scale-105 duration-700">
                 <div className="text-center space-y-2">
                   <div className="flex items-center justify-center mb-2">
                      <Icon icon="lucide:chart-pie" className="w-8 h-8 text-primary animate-pulse" />
                   </div>
                   <span className="text-5xl font-bold text-white tracking-tighter">100%</span>
                   <p className="text-xs text-primary font-bold uppercase tracking-widest">Growth Potential</p>
                 </div>
               </div>

               {/* Floating Orbiting Data Blobs */}
               {analysisPoints.map((point, i) => (
                 <div 
                   key={i}
                   className="absolute glass px-4 py-3 rounded-2xl border-white/10 shadow-2xl animate-float-slow hover:border-primary/40 transition-all duration-300 z-20 group"
                   style={{ 
                     top: `${20 + i * 20}%`, 
                     left: i % 2 === 0 ? '-15%' : '85%',
                     animationDelay: `${i * 500}ms`
                   }}
                 >
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-xl bg-background/50 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Icon icon={point.icon} className="w-5 h-5" />
                     </div>
                     <div>
                       <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{point.label}</p>
                       <p className="text-base font-bold text-white">{point.value}</p>
                     </div>
                   </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Right Content: Text & Analysis */}
          <div className="flex-1 space-y-10">
            <div className="space-y-4 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <div className="w-8 h-px bg-primary" />
                <span className="text-primary font-bold tracking-widest uppercase text-xs">
                  Market Insights
                </span>
                <div className="w-8 h-px bg-primary hidden lg:block" />
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
                Harnessing the <br />
                <span className="text-primary text-glow">Global Trade Momentum</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-4">
                The global trading industry is witnessing strong growth, driven by increasing demand for high-quality electronics and efficient logistics. Based in Dubai, we are strategically positioned to capture this momentum across Asia, Europe, and Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {analysisPoints.map((point, i) => (
                <div key={i} className="glass-dark p-6 rounded-3xl border-white/10 group hover:border-primary/30 transition-all duration-500 hover:shadow-primary/5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                       <Icon icon={point.icon} className="w-5 h-5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                       <span className="text-sm font-semibold text-white/80">{point.label}</span>
                    </div>
                    <span className="text-primary font-bold text-lg">{point.value}</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-px">
                    <div 
                      className="h-full bg-gold-gradient transition-all duration-1000 group-hover:bg-glow"
                      style={{ width: point.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
