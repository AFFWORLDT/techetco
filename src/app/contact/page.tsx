import { Contact as ContactSection } from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <main className="w-full flex justify-center bg-[#0F111A] bg-[url('/Images/dubai_skyline_hyper_modern_1774990474429.png')] bg-cover bg-fixed bg-center relative min-h-screen">
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none"></div>
      <div className="relative z-10 w-full pt-12 md:pt-24">
         <ContactSection />
      </div>
    </main>
  );
}
