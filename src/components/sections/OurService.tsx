import Image from "next/image";
import { Icon } from "@iconify/react";

export function OurService() {
  const services = [
    {
      title: "Electronics Trading",
      description: "Supplying high-quality electronic devices and components with competitive pricing to meet global market demands.",
      image: "/Images/service-electronics.png",
      icon: "lucide:cpu",
      features: ["Latest Components", "Bulk Supply", "Global Logistics"]
    },
    {
      title: "Shipping & Logistics",
      description: "Providing efficient end-to-end logistics solutions that ensure on-time delivery and smooth international trade.",
      image: "/Images/service-shipping.png",
      icon: "lucide:shippable",
      features: ["Freight Forwarding", "Supply Chain", "Express Delivery"]
    }
  ];

  return (
    <section id="services" className="relative w-full py-24 md:py-32 overflow-hidden bg-background">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary font-bold tracking-widest uppercase text-xs">
              What We Do
            </span>
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white">
            Comprehensive <span className="text-primary text-glow">Trade Solutions</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground text-lg">
            We provide specialized services across global markets, ensuring quality, reliability, and speed in every transaction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/5"
            >
              {/* Service Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent z-10" />
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 z-20 space-y-6">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary mb-6 transition-transform group-hover:rotate-6">
                  <Icon icon={service.icon} className="w-8 h-8" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-white group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed max-w-md">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {service.features.map((feature, fIndex) => (
                    <span 
                      key={fIndex}
                      className="glass px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary border-primary/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="pt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <button className="flex items-center gap-2 text-primary font-bold">
                    Learn More 
                    <Icon icon="lucide:arrow-right" className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Decorative Linear Corner Elements */}
              <div className="absolute top-10 right-10 w-24 h-24 bg-linear-to-br from-primary/20 to-transparent p-px rounded-tr-3xl">
                <div className="w-full h-full bg-background/50 backdrop-blur-sm rounded-tr-3xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
