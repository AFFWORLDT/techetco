// Server component for dynamic blog post routing
import Link from 'next/link';

// Mock DB fetch function
async function getPostData(slug: string) {
  // In a real app, this would fetch from a database or CMS.
  const posts = {
    "future-of-global-electronics-trading": {
      title: "The Future of Global Electronics Trading",
      date: "March 15, 2026",
      content: "The global electronics trading landscape is undergoing a massive transformation. With the rise of AI, IoT, and renewable energy components, the demand for specialized electronics is at an all-time high. Supply chains must become more resilient, leveraging predictive analytics and blockchain technology to ensure transparency and efficiency. TechET Co. is at the forefront of this shift, establishing secure, high-volume partnerships to secure the electronics supply chain of tomorrow."
    },
    "navigating-logistics-middle-east": {
      title: "Navigating Logistics in the Middle East",
      date: "April 2, 2026",
      content: "Dubai's position as a cross-continental hub makes it unparalleled for international logistics. However, navigating the shifting regulatory environments and customs procedures requires deep regional expertise. By utilizing advanced warehousing solutions located in free trade zones, companies can significantly reduce lead times for both B2B and B2C deliveries. TechET provides end-to-end logistics scaling specifically tailored for the Middle Eastern gateway."
    },
    "sustainable-practices-trading": {
      title: "Sustainable Practices in Trading Partnerships",
      date: "May 10, 2026",
      content: "As global regulations tighten around carbon emissions and e-waste, sustainable trading is no longer optional—it is a core business requirement. Partnerships are increasingly evaluated based on their ESG (Environmental, Social, and Governance) scores. From utilizing electric freight options to ensuring conflict-free mineral sourcing in electronics, sustainability drives long-term value. We explore how TechET integrates these practices into our core operational criteria."
    }
  };
  
  return posts[slug as keyof typeof posts] || null;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    return (
      <main className="w-full min-h-screen flex flex-col justify-center items-center bg-[#0F111A]">
        <h1 className="text-4xl text-primary font-serif mb-4">Post Not Found</h1>
        <Link href="/blog" className="text-primary hover:underline">Return to Blog</Link>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen flex flex-col items-center bg-[#0F111A] bg-[url('/Images/bg.jpg')] bg-cover bg-fixed bg-center relative pb-24">
      <div className="absolute inset-0 bg-black/80 z-0 pointer-events-none"></div>
      
      <div className="relative z-10 w-full max-w-4xl px-4 pt-24 md:pt-32">
        
        <Link href="/blog" className="text-primary/70 hover:text-primary mb-12 inline-flex items-center transition-colors">
          <span className="mr-2">←</span> Back to all articles
        </Link>
        
        <article className="bg-[#1a1c23]/90 border border-primary/20 p-8 md:p-16 relative">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-24 h-24 border-t-[12px] border-r-[12px] border-primary translate-x-4 -translate-y-4"></div>
          
          <header className="mb-12 border-b border-primary/20 pb-8">
            <span className="text-primary/60 font-medium tracking-widest uppercase text-sm mb-4 block">
              {post.date}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-primary leading-tight">
              {post.title}
            </h1>
          </header>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 leading-loose text-lg font-medium">
              {post.content}
            </p>
            {/* Additional placeholder paragraphs to simulate a full article */}
            <p className="text-gray-300 leading-loose text-lg mt-8">
              Furthermore, the integration of cross-border data flows enables real-time tracking of shipments and inventory across multiple geographies. This not only mitigates risk during unforeseen disruptions but also aligns operational outputs with accurate demand forecasting. Companies that fail to adapt to these digital ecosystems will likely face increased operational overhead and delayed market entries.
            </p>
            <p className="text-gray-300 leading-loose text-lg mt-8">
              In conclusion, building robust, adaptable, and forward-looking partnerships is essential. By focusing on technological integration, regional expertise, and sustainable execution, global trading entities can secure long-term profitability and foster enduring international relations.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
