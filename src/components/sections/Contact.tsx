export function Contact() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-[#0F111A] bg-[url('/Images/bg.jpg')] bg-cover bg-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/90 z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center text-left w-full">
          
          <div className="w-64 h-[2px] bg-primary relative flex justify-center items-center mb-12">
             <div className="w-3 h-3 bg-primary rotate-45 absolute border-2 border-[#0F111A]"></div>
          </div>

          <h2 className="text-5xl md:text-7xl font-serif text-primary mb-16" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
            Let&apos;s Get In Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <span className="text-primary text-xl font-medium">+971 56 666 2351</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <span className="text-primary text-xl font-medium">info@techetco.com</span>
            </div>

            {/* Web */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-primary text-xl font-medium">www.techetco.com</span>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-primary text-lg leading-relaxed font-serif">
                Office No. C1801-14, Ontario Tower<br/>Business Bay, Dubai, United Arab Emirates
              </span>
            </div>

          </div>
        </div>

        {/* Right Content - Hexagon Image Placeholder */}
        <div className="flex-1 flex justify-center md:justify-end relative items-center mt-16 md:mt-0">
          <div className="relative w-[300px] h-[350px] md:w-[480px] md:h-[530px] z-10" 
               style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}>
             <div className="absolute inset-2 bg-slate-800"
                  style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}>
                <div className="flex items-center justify-center h-full text-muted-foreground p-8 text-center bg-black/40">
                   [Contact Us Image Placeholder]
                </div>
             </div>
          </div>
           
          {/* Golden border */}
          <div className="absolute w-[310px] h-[360px] md:w-[500px] md:h-[550px] bg-primary z-0"
               style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}>
          </div>
          
          {/* Abstract geometric shapes around */}
          <div className="absolute -bottom-16 -left-12 w-64 h-64 bg-black border-r-[16px] border-b-[16px] border-primary rotate-45 opacity-100 pointer-events-none z-0 shadow-2xl"></div>
        </div>

      </div>

      {/* Top Left decorative shape style from image */}
      <div className="absolute top-0 left-0 w-80 h-[250px] bg-black border-r-[12px] border-b-[12px] border-primary -translate-x-12 -translate-y-8 z-0 shadow-2xl skew-x-12"></div>
    </section>
  );
}
