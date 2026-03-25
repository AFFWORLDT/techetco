export function Milestone() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-[#0F111A] bg-[url('/Images/bg.jpg')] bg-cover bg-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/90 z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center text-left max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-serif text-primary mb-12" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
            Milestone
          </h2>

          <div className="flex flex-col gap-10 relative">
            {/* Timeline Line (Mobile hidden for simplicity or customized later) */}
            
            {/* 2024 */}
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-serif text-primary mb-3">2024-Idea & Foundation</h3>
              <p className="text-primary/90 text-lg leading-relaxed font-medium tracking-wide">
                Conceptualized TechET Co. in Dubai with a vision to become a trusted global trading partner.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 2025 */}
              <div className="relative">
                <h3 className="text-xl md:text-2xl font-serif text-primary mb-3">2025-Company Establishment</h3>
                <p className="text-primary/90 text-base leading-relaxed font-medium tracking-wide">
                  Officially registered TechET Co. in Dubai, focusing on electronics, shipping, and oil & gas procurement.
                </p>
              </div>

              {/* 2026 */}
              <div className="relative">
                <h3 className="text-xl md:text-2xl font-serif text-primary mb-3">2026-Market Expansion</h3>
                <p className="text-primary/90 text-base leading-relaxed font-medium tracking-wide">
                  Built strong supplier networks across Asia and the Middle East, preparing for international partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Hexagon Image Placeholder */}
        <div className="flex-1 flex justify-center md:justify-end relative items-center">
          <div className="relative w-[300px] h-[350px] md:w-[480px] md:h-[530px] z-10" 
               style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}>
             <div className="absolute inset-2 bg-slate-800"
                  style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}>
                <div className="flex items-center justify-center h-full text-muted-foreground p-8 text-center bg-black/40">
                   [Milestone Image Placeholder]
                </div>
             </div>
          </div>
           
          {/* Golden border */}
          <div className="absolute w-[310px] h-[360px] md:w-[500px] md:h-[550px] bg-primary z-0"
               style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}>
          </div>
          
          {/* Abstract geometric shapes around */}
          <div className="absolute -bottom-16 -right-16 w-64 h-64 border-r-16 border-b-16 border-primary rotate-12 opacity-80 pointer-events-none z-0"></div>
          <div className="absolute -top-16 -left-16 w-48 h-48 border-t-12 border-l-12 border-primary rotate-45 opacity-60 pointer-events-none z-0"></div>
        </div>

      </div>

      {/* Top Left decorative shape */}
      <div className="absolute top-0 left-0 w-[400px] h-[200px] bg-black border-r-[16px] border-b-[16px] border-primary skew-x-12 -translate-x-16 -translate-y-8 z-0 shadow-2xl"></div>
    </section>
  );
}
