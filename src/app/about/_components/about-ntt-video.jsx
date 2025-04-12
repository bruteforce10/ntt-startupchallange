"use client";
import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
export function AboutNttVideoSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className=" text-white py-16 md:pt-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text content - left side */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <p className="text-lg md:text-xl leading-relaxed">
              NTT Group is a global leader in IT and telecommunications,
              leveraging a broad customer base and extensive ICT expertise
              developed over 150 years of innovation and societal contribution.
              NTT's business consists of integrated ICT (NTT DOCOMO, NTT
              Communications, and NTT COMWARE etc.), Regional communications
              (NTT EAST and WEST etc.), global solutions (NTT DATA etc.), real
              estate (NTT Urban Solutions), energy (NTT Anode Energy) and
              others.
            </p>
          </div>

          {/* Video thumbnail - right side */}
          <div className="w-full bg-white relative  px-4 rounded-xl lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
            <Button
              size={"lg"}
              className={"absolute left-1/2 -translate-x-1/2 top-4 w-fit"}
              onClick={() => setVideoOpen(true)}
            >
              <Play className="mr-2 h-5 w-5" /> Play Video
            </Button>
            <Image
              src="/city-ntt.avif"
              alt="About NTT Video"
              width={1280}
              height={720}
            />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="w-full sm:max-w-3xl p-0 border-none">
          <DialogTitle className="sr-only">About NTT Video</DialogTitle>
          <div className="aspect-video w-full">
            {videoOpen && (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/qzP0Nvg53SI?autoplay=1"
                title="NTT Group Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
