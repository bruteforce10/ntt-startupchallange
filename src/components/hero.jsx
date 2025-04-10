import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section>
      <div className="relative h-[400px] sm:min-h-[calc(80vh-3.5rem)] flex flex-col justify-center w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/bg-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="relative space-y-8 mx-auto z-10 container px-4">
          <h1 className=" text-4xl font-bold tracking-tight leading-tight sm:text-5xl md:text-6xl lg:text-6xl py-4">
            Build Connections That Matter – Your Next Leap Starts at NTT Startup
            Challenge
          </h1>

          <div className="flex gap-4">
            <Button size="lg">
              Partner With Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className={
                "bg-white border-none hover:bg-white/80 hover:text-blue-ntt"
              }
              size="lg"
            >
              NCS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
