import Link from "next/link";

const SAMPLE_POSTS = [
  {
    id: "1",
    title: "The Future of Global Electronics Trading",
    excerpt: "Discover how emerging technologies are reshaping supply chains and international markets in the upcoming decade.",
    date: "March 15, 2026",
    slug: "future-of-global-electronics-trading"
  },
  {
    id: "2",
    title: "Navigating Logistics in the Middle East",
    excerpt: "A comprehensive guide to leveraging Dubai's strategic location for optimized e-commerce distribution.",
    date: "April 2, 2026",
    slug: "navigating-logistics-middle-east"
  },
  {
    id: "3",
    title: "Sustainable Practices in Trading Partnerships",
    excerpt: "Why sustainability is becoming the core driver of value in large-scale international B2B operations.",
    date: "May 10, 2026",
    slug: "sustainable-practices-trading"
  }
];

export default function BlogPage() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-[#0F111A] bg-[url('/Images/bg.jpg')] bg-cover bg-fixed bg-center relative">
      <div className="absolute inset-0 bg-black/80 z-0 pointer-events-none"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 flex flex-col items-center">
        
        <h1 className="text-5xl md:text-7xl font-serif text-primary mb-6" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
          Latest Insights
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl text-center mb-16">
          Explore our latest articles, market analyses, and news surrounding the global trading, electronics, and logistics industries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {SAMPLE_POSTS.map(post => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="group flex flex-col bg-[#1a1c23]/80 border border-primary/20 hover:border-primary/60 transition-colors p-8 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-16 h-16 border-t-[8px] border-r-[8px] border-primary translate-x-4 -translate-y-4 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <span className="text-primary/60 text-sm font-medium mb-3">{post.date}</span>
              <h2 className="text-2xl font-serif text-primary mb-4 leading-snug">{post.title}</h2>
              <p className="text-gray-400 leading-relaxed mb-8 flex-1">
                {post.excerpt}
              </p>
              
              <div className="mt-auto flex items-center text-primary font-semibold tracking-wider text-sm uppercase group-hover:underline">
                Read Article
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
