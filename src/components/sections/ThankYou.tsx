export function ThankYou() {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-[#0F111A] bg-[url('/Images/bg.jpg')] bg-cover bg-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/90 z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center text-left w-full pl-0 md:pl-12">
          
          <div className="mb-8">
            {/* Logo Area */}
            <div className="flex flex-col items-center md:items-start gap-1">
              <div className="text-primary border border-primary p-2 w-14 h-14 flex items-center justify-center font-bold text-2xl relative mb-1">
                T
              </div>
              <h2 className="text-primary font-bold tracking-[0.2em] text-lg uppercase">Techet</h2>
              <p className="text-primary/70 text-[10px] text-center md:text-left leading-tight mt-1">
                TechTrade Hub Electronics<br/>Trading Co. LLC<br/>Dubai - UAE
              </p>
            </div>
          </div>

          <h2 className="text-6xl md:text-[7rem] font-serif text-primary mb-6 uppercase tracking-wider" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
            THANK<br/>YOU
          </h2>
          
          <h3 className="text-3xl md:text-5xl font-serif text-primary mt-4 tracking-wide" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
            Your Gateway to Global<br/>Trading
          </h3>

        </div>

        {/* Right Content - Hexagon Image Placeholder */}
        <div className="flex-1 flex justify-center md:justify-end relative items-center mt-16 md:mt-0">
          <div className="relative w-[300px] h-[350px] md:w-[480px] md:h-[530px] z-10" 
               style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}>
             <div className="absolute inset-2 bg-slate-800"
                  style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}>
                <div className="flex items-center justify-center h-full text-muted-foreground p-8 text-center bg-black/40">
                   [Thank You Image Placeholder]
                </div>
             </div>
          </div>
           
          {/* Golden border */}
          <div className="absolute w-[310px] h-[360px] md:w-[500px] md:h-[550px] bg-primary z-0"
               style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}>
          </div>
        </div>

      </div>

      {/* Decorative Bottom Triangles/Shapes */}
      <div className="absolute bottom-0 left-[20%] w-[300px] h-[150px] border-t-8 border-l-8 border-primary bg-black rotate-45 translate-y-24 translate-x-12 z-0 shadow-xl"></div>
      <div className="absolute bottom-0 left-[40%] w-[400px] h-[200px] border-t-12 border-primary bg-transparent -rotate-12 translate-y-16 -translate-x-12 z-0 shadow-xl hidden md:block"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[200px] bg-black border-l-[12px] border-b-[12px] border-primary -translate-y-12 translate-x-16 -skew-x-12 z-0 shadow-xl"></div>
    </section>
  );
}
