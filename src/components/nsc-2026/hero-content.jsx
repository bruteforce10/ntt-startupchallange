import React from "react";
import { Button } from "@/components/ui/button";

const HERO_ACTIONS = [
  {
    label: "STARTUP REGISTRATION FOR NTTSC 2026",
    href: "/register?type=startup",
    external: false,
    disabled: false,
    badge: null,
    className:
      "border border-blue-ntt bg-blue-ntt text-white shadow-[0_20px_45px_rgba(37,111,184,0.28)] hover:bg-[#1b5f9e]",
  },
  {
    label: "ATTEND OUR INFORMATION SESSIONS IN YOUR CITY",
    href: "/#infosession",
    className:
      "border border-white/20 bg-white/12 text-white shadow-[0_18px_40px_rgba(5,12,31,0.22)] hover:bg-white/18",
  },
  {
    label: "ATTEND THE FINAL DAY NTTSC 2026",
    // href: "https://www.eventbrite.hk/e/final-day-ntt-startup-challenge-2026-tickets-1986790310301?aff=oddtdtcreator",
    className:
      "border border-blue-ntt-200/35 bg-[#08172d]/85 text-blue-ntt-200 shadow-[0_18px_36px_rgba(8,23,45,0.32)] hover:border-blue-ntt-200/55 hover:bg-[#0d2342]",
  },
];

export function HeroContent2026() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-end text-center ">
      <div className="max-w-[min(92vw,72rem)] space-y-6 sm:space-y-8">
        <h1 className="text-balance sm:text-[3rem]  text-[2rem] lg:text-[4rem] font-black uppercase leading-[1.2]  text-white [text-shadow:0_10px_34px_rgba(0,0,0,0.45)]">
          YOUR NEXT LEAP STARTS AT{" "}
          <span className="text-blue-ntt-200">NTT STARTUP CHALLENGE 2026 </span>
          BIGGER, LOUDER, AND <span className="text-blue-ntt-200">BOLDER</span>
        </h1>

        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:gap-4 lg:flex-row lg:items-stretch lg:justify-center">
          {HERO_ACTIONS.map((action, index) => (
            <Button
              key={action.label}
              asChild
              className={[
                "flex min-h-16 flex-1 basis-0 min-w-0 items-center justify-center touch-manipulation rounded-2xl px-5 py-4 text-center text-sm font-extrabold leading-snug whitespace-normal transition-[transform,background-color,border-color,color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-blue-ntt-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent motion-reduce:hover:translate-y-0 sm:min-h-[4.5rem] sm:px-6 sm:text-[0.95rem]",
                action.badge ? "flex-col gap-1.5" : "",
                "lg:flex-1 lg:basis-0",
                action.className,
              ].join(" ")}
            >
              {action.disabled ? (
                <span aria-disabled="true" className="cursor-default">
                  <span className="block text-balance">{action.label}</span>
                  <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/85">
                    {action.badge}
                  </span>
                </span>
              ) : (
                <a
                  href={action.href}
                  {...(action.external
                    ? {
                        target: "_blank",
                        rel: "noreferrer",
                      }
                    : {})}
                >
                  <span className="block text-balance">{action.label}</span>
                  {action.badge ? (
                    <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/85">
                      {action.badge}
                    </span>
                  ) : null}
                </a>
              )}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
