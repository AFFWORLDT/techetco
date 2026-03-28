import { Icon } from "@iconify/react";

export function Milestone() {
  const milestones = [
    {
      year: "2024",
      title: "Idea & Foundation",
      icon: "lucide:lightbulb",
      description: "Conceptualized TechET Co. in Dubai with a vision to become a trusted global trading partner."
    },
    {
      year: "2025",
      title: "Company Establishment",
      icon: "lucide:building-2",
      description: "Officially registered TechET Co. in Dubai, focusing on electronics, shipping, and specialized procurement."
    },
    {
      year: "2026",
      title: "Market Expansion",
      icon: "lucide:trending-up",
      description: "Built strong supplier networks across Asia and the Middle East, preparing for international partnerships."
    }
  ];

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-background">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-5" 
           style={{ backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="flex items-center gap-2">
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary font-bold tracking-widest uppercase text-xs">
              Our Journey
            </span>
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
            Key <span className="text-primary text-glow">Milestones</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative px-4 md:px-0">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-linear-to-b from-primary via-primary/20 to-transparent hidden md:block shadow-lg" />

          <div className="space-y-16 md:space-y-24">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } animate-in fade-in slide-in-from-bottom-12 duration-1000`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Year Bubble */}
                <div className="relative z-20 flex-1 flex justify-center">
                  <div className="w-24 h-24 rounded-[2rem] glass border-primary/40 flex flex-col items-center justify-center shadow-2xl group transition-all duration-500 hover:scale-110 hover:-rotate-3">
                    <Icon icon={milestone.icon} className="w-6 h-6 text-primary mb-1 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span className="text-primary font-bold text-xl font-heading">{milestone.year}</span>
                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 w-full relative">
                  <div className="glass-dark p-8 md:p-10 rounded-[3rem] border-white/5 relative group overflow-hidden hover:border-primary/20 transition-all duration-500 hover:shadow-primary/5 shadow-2xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -translate-y-16 translate-x-16 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                    <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-primary transition-colors pr-8">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {milestone.description}
                    </p>
                    
                    <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/30 transition-colors select-none">
                      <Icon icon={milestone.icon} className="w-12 h-12" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
