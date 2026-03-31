import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { BlogSidebarLead } from '@/components/sections/forms/BlogSidebarLead';
import { blogs } from '@/data/blogs';

// Use the dynamic blogs data
async function getPostData(slug: string) {
  return blogs.find(b => b.slug === slug || b.id === slug) || null;
}

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
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
        
        <Link href="/blog" className="group flex items-center gap-4 text-[#122343] font-black uppercase tracking-widest text-[10px] mb-12">
           <div className="w-10 h-10 border border-gray-100 flex items-center justify-center rounded-full group-hover:bg-[#122343] group-hover:text-white transition-all">
             <Icon icon="lucide:arrow-left" className="w-4 h-4" />
           </div>
           Back to Insights
        </Link>

        <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="lg:w-2/3 w-full">
            <article className="space-y-12">
              <header className="space-y-6">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-1 bg-[#ef4444] rounded-full" />
                    <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#2ea2f7]">{post.category}</span>
                 </div>
                 <h1 className="text-4xl md:text-6xl font-heading font-black text-[#122343] leading-[0.95] tracking-tighter uppercase">
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

              <div className="prose prose-xl prose-slate max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-headings:text-[#122343]">
                 {/* Injecting dynamic HTML generated from the data layer */}
                 <div dangerouslySetInnerHTML={{ __html: post.content }} />
                 
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
          
          <aside className="lg:w-1/3 w-full">
            <BlogSidebarLead />
          </aside>
        </div>
      </div>
    </main>
  );
}
