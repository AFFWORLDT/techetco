export function OurVision() {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-[#0F111A] bg-[url('/Images/bg.jpg')] bg-cover bg-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/90 z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content - Text */}
        <div className="flex-1 flex flex-col justify-center text-left md:mr-12 relative">
          
          <h2 className="text-5xl md:text-6xl font-serif text-primary mb-8 text-center" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
            Our Vision
          </h2>
          
          {/* Decorative line behind text */}
          <div className="absolute top-[60%] left-0 w-full h-[2px] bg-primary opacity-50 flex justify-center items-center -z-10">
             <div className="w-4 h-4 bg-primary rotate-45 absolute border-2 border-[#0F111A] translate-x-32"></div>
          </div>

          <p className="text-primary/90 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl font-medium tracking-wide text-justify relative z-10 px-4">
            To be a leading global trading partner that empowers businesses with innovative solutions, trusted partnerships, and sustainable growth. At TechET, our vision is to bridge markets across continents, harness technology to deliver excellence, and create value that drives progress for our clients, communities, and industries worldwide.
          </p>
          
        </div>

        {/* Right Content - Hexagon Image Placeholder */}
        <div className="flex-1 flex justify-center md:justify-end relative items-center">
          {/* Hexagon Border / Mask */}
          {/* Note: using slightly different hexagon clip-path to match standard flat-topped hexagon if needed, or keeping the same one. */}
          <div className="relative w-[300px] h-[350px] md:w-[500px] md:h-[550px] z-10" 
               style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}>
             
             {/* Inner Image Div (Placeholder for now) */}
             <div className="absolute inset-2 bg-slate-800"
                  style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}>
                <div className="flex items-center justify-center h-full text-muted-foreground p-8 text-center bg-black/40">
                   [Our Vision Image Placeholder]
                </div>
             </div>
          </div>
           
          {/* Golden border thick lines to frame the hexagon */}
          <div className="absolute w-[310px] h-[360px] md:w-[520px] md:h-[570px] bg-primary z-0"
               style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}>
          </div>
        </div>

      </div>

      {/* Bottom right decorative shapes */}
      <div className="absolute -bottom-24 -right-16 w-80 h-80 bg-black rotate-45 border-t-16 border-l-16 border-primary z-0 shadow-2xl"></div>
      <div className="absolute -bottom-40 right-0 w-[500px] h-[300px] bg-[#1a1c23] -rotate-12 z-0 border-t-8 border-primary"></div>
    </section>
  );
}
