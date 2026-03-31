import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { CaseStudyDownloadLead } from '@/components/sections/forms/CaseStudyDownloadLead';
import { caseStudies } from '@/data/case-studies';

// Use dynamic data
async function getCaseData(slug: string) {
  return caseStudies.find(c => c.slug === slug || c.id === slug) || null;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = await getCaseData(slug);

  if (!study) {
    return (
      <main className="w-full min-h-screen flex flex-col justify-center items-center bg-[#050A15]">
        <h1 className="text-4xl text-white font-black uppercase mb-4">Case Study Not Found</h1>
        <Link href="/resources/case-studies" className="text-[#ef4444] font-bold hover:underline tracking-widest uppercase text-xs">Return to Archive</Link>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen bg-[#050A15] pt-32 pb-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ef4444]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        <Link href="/resources/case-studies" className="group inline-flex items-center gap-4 text-white font-black uppercase tracking-widest text-[10px] mb-12">
           <div className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full group-hover:bg-[#ef4444] group-hover:border-[#ef4444] transition-all">
             <Icon icon="lucide:arrow-left" className="w-4 h-4" />
           </div>
           Back to Archive
        </Link>

        {/* Hero Section */}
        <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <header className="space-y-6 text-center flex flex-col items-center">
             <div className="px-4 py-1.5 bg-[#ef4444] text-white text-[10px] font-black uppercase tracking-[0.4em] inline-block">
                {study.industry}
             </div>
             <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-[0.9] tracking-tighter uppercase">
                {study.title}
             </h1>
             <p className="text-lg text-white/50 leading-relaxed font-normal max-w-2xl">
                {study.desc}
             </p>
          </header>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-white/10">
             <div className="space-y-1 text-center border-r border-white/10 last:border-0 md:last:border-r-0">
                <div className="text-[10px] uppercase font-black tracking-widest text-[#2ea2f7]">Client</div>
                <div className="text-white font-bold text-sm">{study.client}</div>
             </div>
             <div className="space-y-1 text-center border-r border-white/10 last:border-0 md:last:border-r-0">
                <div className="text-[10px] uppercase font-black tracking-widest text-[#2ea2f7]">Service</div>
                <div className="text-white font-bold text-sm">Supply Chain Overhaul</div>
             </div>
             <div className="space-y-1 text-center border-r border-white/10 last:border-0 md:last:border-r-0">
                <div className="text-[10px] uppercase font-black tracking-widest text-[#2ea2f7]">Timeline</div>
                <div className="text-white font-bold text-sm">6 Months</div>
             </div>
             <div className="space-y-1 text-center">
                <div className="text-[10px] uppercase font-black tracking-widest text-[#ef4444]">Primary Result</div>
                <div className="text-white font-bold text-sm uppercase">{study.metric}</div>
             </div>
          </div>

          <div className="relative aspect-[21/9] w-full bg-black shadow-2xl overflow-hidden border border-white/10">
             <Image 
                src={study.image}
                alt={study.title}
                fill
                className="object-cover opacity-60 mix-blend-luminosity"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#050A15] to-transparent" />
          </div>

          {/* Main Content */}
          <div className="prose prose-xl prose-invert max-w-4xl mx-auto prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-a:text-[#2ea2f7]">
             <div dangerouslySetInnerHTML={{ __html: study.content }} />
          </div>
        </div>
      </div>
      
      {/* End form */}
      <div className="mt-32">
         <CaseStudyDownloadLead />
      </div>
    </main>
  );
}
