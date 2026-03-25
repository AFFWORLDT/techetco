export function MarketAnalysis() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-[#0F111A] bg-[url('/Images/bg.jpg')] bg-cover bg-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/90 z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content - Pie Chart Placeholder */}
        <div className="flex-1 flex justify-center md:justify-start relative items-center w-full min-h-[400px]">
          {/* Chart Wrapper */}
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
             
            {/* The CSS Pie Chart */}
            <div 
              className="absolute inset-0 rounded-full shadow-2xl z-10"
              style={{
                background: "conic-gradient(#fde047 0 90deg, #eab308 90deg 180deg, #fef08a 180deg 270deg, #ca8a04 270deg 360deg)",
              }}
            ></div>

            {/* Labels */}
            <div className="absolute -top-8 -left-12 md:-left-24 text-center z-20">
              <span className="text-primary font-medium block">Global Partnership</span>
              <span className="text-primary/80">25%</span>
            </div>
            <div className="absolute -top-8 -right-8 md:-right-20 text-center z-20">
              <span className="text-primary font-medium block">Electronics Trading</span>
              <span className="text-primary/80">25%</span>
            </div>
            <div className="absolute -bottom-8 -right-8 md:-right-16 text-center z-20">
              <span className="text-primary font-medium block">Shipping</span>
              <span className="text-primary/80">25%</span>
            </div>
            <div className="absolute -bottom-8 -left-12 md:-left-24 text-center z-20">
              <span className="text-primary font-medium block">E-commerce Solutions</span>
              <span className="text-primary/80">25%</span>
            </div>

          </div>

          {/* Abstract geometric shapes around */}
          <div className="absolute bottom-0 -left-16 w-64 h-64 border-l-12 border-b-12 border-primary rotate-45 opacity-40 pointer-events-none z-0"></div>
        </div>

        {/* Right Content - Text */}
        <div className="flex-1 flex flex-col justify-center text-left md:ml-16">
          <h2 className="text-5xl md:text-7xl font-serif text-primary mb-8 leading-tight" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
            Market<br />Analysis
          </h2>
          
          <p className="text-primary/90 text-lg md:text-xl leading-relaxed mb-12 font-medium tracking-wide text-justify">
            The global trading industry is witnessing strong growth, driven by increasing demand for high-quality electronics, efficient logistics, and energy sector supplies. With Dubai positioned as a strategic hub connecting Asia, Europe, and Africa, TechET is uniquely placed to capture this momentum.
          </p>

          <div className="w-full h-[2px] bg-primary relative flex justify-center items-center opacity-80 mt-auto">
             <div className="w-4 h-4 bg-primary rotate-45 absolute border-2 border-[#0F111A]"></div>
          </div>
        </div>

      </div>

      {/* Top Right decorative shape */}
      <div className="absolute top-0 right-0 w-[500px] h-[250px] bg-black border-l-[16px] border-b-[16px] border-primary -skew-x-12 translate-x-16 -translate-y-8 z-0 shadow-2xl"></div>
    </section>
  );
}
