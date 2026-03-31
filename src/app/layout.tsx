import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingSidebarLead } from "@/components/sections/forms/FloatingSidebarLead";
import { QuickQuoteBottomBar } from "@/components/sections/forms/QuickQuoteBottomBar";
import { ExitIntentModal } from "@/components/sections/forms/ExitIntentModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Techtrade Hub | Global Electronics Trading & Logistics Dubai",
  description: "Your premier partner in high-end electronics trading and seamless global logistics, headquartered in Dubai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingSidebarLead />
          <QuickQuoteBottomBar />
          <ExitIntentModal />
        </SmoothScroll>
      </body>
    </html>
  );
}
