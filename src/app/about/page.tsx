import { Introduction } from "@/components/sections/Introduction";
import { OurVision } from "@/components/sections/OurVision";

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col bg-[#0F111A] bg-[url('/Images/bg.jpg')] bg-cover bg-fixed bg-center relative min-h-screen">
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none"></div>
      <div className="relative z-10 w-full pt-12 md:pt-24 flex flex-col">
         {/* Reusing sections for About Page */}
         <Introduction />
         <OurVision />
      </div>
    </main>
  );
}
