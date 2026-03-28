import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';

// Mock DB fetch function
async function getPostData(slug: string) {
  // Mapping for both IDs and Slugs to ensure navigation never fails
  const slugMap: Record<string, string> = {
    "1": "future-of-global-electronics-trading",
    "2": "navigating-logistics-middle-east",
    "3": "sustainable-practices-trading"
  };

  const actualSlug = slugMap[slug] || slug;

  const posts = {
    "future-of-global-electronics-trading": {
      title: "The Future of Electronics Trading: A Global Perspective",
      date: "March 15, 2026",
      category: "Market Insights",
      image: "/Images/intro.png",
      content: "The global electronics trading landscape is undergoing a massive transformation. With the rise of AI, IoT, and renewable energy components, the demand for specialized electronics is at an all-time high. Supply chains must become more resilient, leveraging predictive analytics and blockchain technology to ensure transparency and efficiency. Tech ET Co is at the forefront of this shift, establishing secure, high-volume partnerships to secure the electronics supply chain of tomorrow."
    },
    "navigating-logistics-middle-east": {
      title: "Strategic Trade Corridor: Why Dubai is the Nexus of Trade",
      date: "March 10, 2026",
      category: "Logistics",
      image: "/Images/service-electronics.png",
      content: "Dubai's position as a cross-continental hub makes it unparalleled for international logistics. However, navigating the shifting regulatory environments and customs procedures requires deep regional expertise. By utilizing advanced warehousing solutions located in free trade zones, companies can significantly reduce lead times for both B2B and B2C deliveries. Tech ET Co provides end-to-end logistics scaling specifically tailored for the Middle Eastern gateway."
    },
    "sustainable-practices-trading": {
      title: "Sustainable Practices in Trading Partnerships",
      date: "March 05, 2026",
      category: "Sustainability",
      image: "/Images/service-shipping.png",
      content: "As global regulations tighten around carbon emissions and e-waste, sustainable trading is no longer optional—it is a core business requirement. Partnerships are increasingly evaluated based on their ESG (Environmental, Social, and Governance) scores. From utilizing electric freight options to ensuring conflict-free mineral sourcing in electronics, sustainability drives long-term value."
    }
  };
  
  return posts[actualSlug as keyof typeof posts] || null;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    return (
      <main className="w-full min-h-screen flex flex-col justify-center items-center bg-[#122343]">
        <h1 className="text-4xl text-white font-black uppercase mb-4">Post Not Found</h1>
        <Link href="/blog" className="text-[#ef4444] font-bold hover:underline tracking-widest uppercase text-xs">Return to Intelligence Hub</Link>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen bg-white pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Back Button */}
        <Link href="/blog" className="group flex items-center gap-4 text-[#122343] font-black uppercase tracking-widest text-[10px] mb-12">
           <div className="w-10 h-10 border border-gray-100 flex items-center justify-center rounded-full group-hover:bg-[#122343] group-hover:text-white transition-all">
             <Icon icon="lucide:arrow-left" className="w-4 h-4" />
           </div>
           Back to Insights
        </Link>

        <article className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <header className="space-y-6">
             <div className="flex items-center gap-4">
                <div className="w-12 h-1 bg-[#ef4444] rounded-full" />
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#2ea2f7]">{post.category}</span>
             </div>
             <h1 className="text-4xl md:text-7xl font-heading font-black text-[#122343] leading-[0.95] tracking-tighter uppercase">
                {post.title}
             </h1>
             <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] pt-4">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-[#ef4444] rounded-full" />
                <span className="text-[#122343]">Published by Tech ET Co Editorial Team</span>
             </div>
          </header>

          <div className="relative aspect-video w-full bg-[#122343] p-1 shadow-2xl overflow-hidden">
             <Image 
                src={post.image}
                alt={post.title}
                fill
                className="object-cover opacity-90"
             />
          </div>

          <div className="prose prose-xl prose-slate max-w-none">
             <p className="text-gray-500 leading-relaxed font-normal">
                {post.content}
             </p>
             <p className="text-gray-500 leading-relaxed font-normal mt-8">
                Furthermore, the integration of cross-border data flows enables real-time tracking of shipments and inventory across multiple geographies. This not only mitigates risk during unforeseen disruptions but also aligns operational outputs with accurate demand forecasting. Companies that fail to adapt to these digital ecosystems will likely face increased operational overhead and delayed market entries.
             </p>
             <div className="my-16 flex items-center gap-8 py-12 border-y border-gray-100">
                <div className="w-1 h-16 bg-[#ef4444]" />
                <p className="text-2xl font-black text-[#122343] leading-tight italic opacity-90 tracking-tight">
                   "Technology is no longer a tool of trade—it is the very engine of the global supply chain equilibrium."
                </p>
             </div>
             <p className="text-gray-500 leading-relaxed font-normal">
                In conclusion, building robust, adaptable, and forward-looking partnerships is essential. By focusing on technological integration, regional expertise, and sustainable execution, global trading entities can secure long-term profitability and foster enduring international relations. Tech ET Co remains committed to leading this charge from the heart of Dubai.
             </p>
          </div>
          
          <footer className="pt-16 border-t border-gray-100 flex flex-wrap items-center justify-between gap-8">
             <div className="flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Share Report:</span>
                <div className="flex gap-2">
                   {["mdi:facebook", "ri:twitter-x-fill", "mdi:linkedin"].map((icon, i) => (
                      <button key={i} className="w-10 h-10 border border-gray-100 flex items-center justify-center text-[#122343] hover:bg-[#122343] hover:text-white transition-all">
                        <Icon icon={icon} className="w-4 h-4" />
                      </button>
                   ))}
                </div>
             </div>
             
             <button className="flex items-center gap-4 text-[#122343] font-black uppercase tracking-widest text-[10px] group">
                Download PDF Version
                <div className="w-10 h-10 border border-[#ef4444] flex items-center justify-center rounded-full group-hover:bg-[#ef4444] group-hover:text-white transition-all">
                   <Icon icon="lucide:download" className="w-4 h-4" />
                </div>
             </button>
          </footer>
        </article>
      </div>
    </main>
  );
}
