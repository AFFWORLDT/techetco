import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full min-h-[600px] overflow-hidden bg-[#0F111A] bg-[url('/Images/bg.jpg')] bg-cover bg-center py-12 md:py-0">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/90 z-0 pointer-events-none"></div>

      {/* Background Graphic Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Diagonal golden lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 600"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Top Chevrons */}
            <path
              d="M400 0 L700 300 L1000 0"
              stroke="var(--color-primary)"
              strokeWidth="20"
              fill="none"
              opacity="0.8"
            />
            <path
              d="M500 -50 L700 150 L900 -50"
              stroke="var(--color-primary)"
              strokeWidth="10"
              fill="none"
              opacity="0.5"
            />

            {/* Bottom Chevrons */}
            <path
              d="M400 600 L700 300 L1000 600"
              stroke="var(--color-primary)"
              strokeWidth="20"
              fill="none"
              opacity="0.8"
            />
            <path
              d="M500 650 L700 450 L900 650"
              stroke="var(--color-primary)"
              strokeWidth="10"
              fill="none"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 min-h-[600px] relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center items-center text-center pt-8 md:pt-0">
          <div className="mb-12">
            {/* Logo Area */}
            <div className="flex flex-col items-center gap-1">
              <div className="text-primary border border-primary p-2 w-14 h-14 flex items-center justify-center font-bold text-2xl relative mb-1">
                T
              </div>
              <h2 className="text-primary font-bold tracking-[0.2em] text-lg uppercase">
                Techet
              </h2>
              <p className="text-primary/70 text-[10px] text-center leading-tight mt-1">
                TechTrade Hub Electronics
                <br />
                Trading Co. LLC
                <br />
                Dubai - UAE
              </p>
              <p className="text-primary text-sm font-serif mt-2">
                Techtrade Hub Electronics Trading Co.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h1
              className="text-5xl md:text-[5.5rem] leading-[1.1] font-serif text-primary mb-6 tracking-wide uppercase"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
            >
              Company
              <br />
              Profile
            </h1>
            <div className="w-full max-w-[400px] h-[2px] bg-primary relative flex justify-center items-center">
              <div className="w-4 h-4 bg-primary rotate-45 absolute border-2 border-[#0F111A]"></div>
            </div>
          </div>
        </div>

        {/* Right Content - Hexagon Image Placeholder */}
        <div className="flex-1 h-full flex items-center justify-center md:justify-end mt-12 md:mt-0 relative">
          {/* Hexagon Border / Mask */}
          <div
            className="relative w-[300px] h-[350px] md:w-[550px] md:h-[500px]"
            style={{
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            }}
          >
            {/* Inner Image Div (Placeholder for now) */}
            <div
              className="absolute inset-2 bg-slate-800"
              style={{
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            >
              <div className="flex items-center justify-center h-full text-muted-foreground">
                [Image Placeholder]
              </div>
            </div>
          </div>

          {/* Golden border thick lines to frame the hexagon (CSS hack since stroke clip path is complex) */}
          <div
            className="absolute w-[310px] h-[360px] md:w-[465px] md:h-[515px] bg-primary -z-10"
            style={{
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
