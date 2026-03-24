export function Introduction() {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-[#0F111A] bg-[url('/Images/bg.jpg')] bg-cover bg-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/90 z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content - Hexagon Image Placeholder */}
        <div className="flex-1 flex justify-center md:justify-start relative items-center">
          {/* Hexagon Border / Mask */}
          <div className="relative w-[400px] h-[450px] md:w-[550px] md:h-[600px] z-10" 
               style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}>
             
             {/* Inner Image Div (Placeholder for now) */}
             <div className="absolute inset-2 bg-slate-800"
                  style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}>
                <div className="flex items-center justify-center h-full text-muted-foreground p-8 text-center bg-black/40">
                   [Introduction Image Placeholder]
                </div>
             </div>
          </div>
           
          {/* Golden border thick lines to frame the hexagon */}
          <div className="absolute w-[310px] h-[360px] md:w-[520px] md:h-[570px] bg-primary z-0"
               style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}>
          </div>
          
          {/* Abstract geometric shapes around */}
          <div className="absolute -bottom-12 -right-12 w-48 h-48 border-12 border-primary rotate-45 opacity-60 pointer-events-none z-0"></div>
          <div className="absolute -top-12 -left-12 w-64 h-64 border-r-16 border-b-16 border-primary rotate-12 opacity-40 pointer-events-none z-0"></div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col justify-center text-left md:ml-12">
          <h2 className="text-5xl md:text-6xl font-serif text-primary mb-6" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
            Introduction
          </h2>
          <p className="text-primary/90 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl font-medium tracking-wide">
            At TechET Co., we believe trade is more than just business &ndash; it&apos;s about building bridges, connecting markets, and empowering growth. Based in Dubai, the world&apos;s hub of innovation and commerce, we specialize in electronics trading. With a passion for excellence and a commitment to transparency, TechET is your trusted partner in navigating global markets and unlocking new opportunities.
          </p>
          <div className="w-full max-w-[400px] h-[2px] bg-primary relative flex justify-center items-center">
             <div className="w-4 h-4 bg-primary rotate-45 absolute border-2 border-[#0F111A]"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
