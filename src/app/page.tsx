import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { OurVision } from "@/components/sections/OurVision";
import { OurService } from "@/components/sections/OurService";
import { Milestone } from "@/components/sections/Milestone";
import { MarketAnalysis } from "@/components/sections/MarketAnalysis";
import { Contact } from "@/components/sections/Contact";
import { ThankYou } from "@/components/sections/ThankYou";

export default function Home() {
  return (
    <div className="relative z-10 w-full flex flex-col">
      <Hero />
      <Introduction />
      <OurVision />
      <OurService />
      <Milestone />
      <MarketAnalysis />
      <Contact />
      <ThankYou />
    </div>
  );
}
