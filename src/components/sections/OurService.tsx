export function OurService() {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-[#0F111A] bg-[url('/Images/bg.jpg')] bg-cover bg-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/90 z-0 pointer-events-none"></div>

      {/* Top Left Decorative Line */}
      <div className="absolute top-16 left-0 w-64 md:w-96 h-[2px] bg-primary z-0 flex justify-center items-center opacity-80">
         <div className="w-3 h-3 bg-primary rotate-45 absolute border-2 border-[#0F111A] translate-x-12"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        
        <h2 className="text-5xl md:text-[5rem] font-serif text-primary mb-16 text-left" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
          Our Service
        </h2>
        
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24 pl-4 md:pl-8">
          
          {/* Service 1 */}
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-serif text-primary mb-6 flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-primary inline-block shrink-0"></span>
              Electronics Trading
            </h3>
            <p className="text-primary/90 text-lg md:text-xl leading-relaxed font-medium tracking-wide">
              Supplying high-quality electronic devices and components with competitive pricing to meet the growing demands of global markets
            </p>
          </div>

          {/* Service 2 */}
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-serif text-primary mb-6 flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-primary inline-block shrink-0"></span>
              Shipping & Logistics
            </h3>
            <p className="text-primary/90 text-lg md:text-xl leading-relaxed font-medium tracking-wide">
              Providing efficient end-to-end logistics solutions that ensure on-time delivery and smooth international trade operations.
            </p>
          </div>

        </div>

      </div>

      {/* Bottom Right Decorative Line */}
      <div className="absolute bottom-16 right-12 md:right-32 w-64 md:w-96 h-[2px] bg-primary z-0 flex justify-center items-center opacity-80">
         <div className="w-3 h-3 bg-primary rotate-45 absolute border-2 border-[#0F111A]"></div>
      </div>

      {/* Top Right geometric shapes */}
      <div className="absolute -top-32 -right-16 w-96 h-96 bg-black rotate-45 border-b-16 border-l-16 border-primary z-0 shadow-2xl"></div>
      <div className="absolute -top-40 right-12 w-[400px] h-[200px] bg-[#1a1c23] -rotate-12 z-0 border-b-8 border-primary"></div>
      
      {/* Bottom Left geometric shapes */}
      <div className="absolute -bottom-32 -left-16 w-96 h-96 bg-black rotate-45 border-t-16 border-r-16 border-primary z-0 shadow-2xl"></div>
      
    </section>
  );
}
