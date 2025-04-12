import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaHero = () => {
  return (
    <div className="flex gap-4">
      <Button size="lg">
        Partner With Us
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        className={"bg-white border-none hover:bg-white/80 hover:text-blue-ntt"}
        size="lg"
      >
        Register
      </Button>
    </div>
  );
};

export default CtaHero;
