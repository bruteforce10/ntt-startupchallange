import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CtaHero = () => {
  return (
    <div className="flex gap-4">
      <Link href={`mailto:global-incubation@ntt.com?subject=Partner With Us`}>
        <Button size="lg">
          Partner With Us
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
      <Link href={"/register"}>
        <Button
          variant="outline"
          className={
            "bg-white border-none hover:bg-white/80 hover:text-blue-ntt"
          }
          size="lg"
        >
          Register
        </Button>
      </Link>
    </div>
  );
};

export default CtaHero;
