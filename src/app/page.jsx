import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="relative min-h-[40000px]">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute -right-[100px] -top-[300px] h-[800px] w-[800px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-[400px] -left-[100px] h-[800px] w-[800px] bg-blue-700/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <h2 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text">
          hi
        </h2>
      </div>
    </div>
  );
}
