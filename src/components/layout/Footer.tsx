export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-[#0a0b10] py-6 mt-auto relative z-20">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-2">
        <div className="w-16 h-[1px] bg-primary/50 mb-4"></div>
        <p className="text-center text-sm text-primary/70 font-medium tracking-wider">
          &copy; {new Date().getFullYear()} TechTrade Hub Electronics Trading Co. LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
