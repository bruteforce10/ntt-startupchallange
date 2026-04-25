"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PAST_SPEAKERS_JUDGES_CONTENT } from "@/constant/speaks-content";

function PastPersonCard({ person }) {
  return (
    <article className="flex min-h-[18rem] min-w-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left">
      <div className="relative mb-5 aspect-[4/5] w-full overflow-hidden border-blue-ntt border-2 rounded-2xl bg-white/5">
        <Image
          src={person.image}
          alt={person.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 60vw, 220px"
        />
      </div>
      <h3 className="text-lg font-semibold text-white [overflow-wrap:anywhere]">
        {person.name}
      </h3>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-blue-ntt-200 [overflow-wrap:anywhere]">
        {person.organization}
      </p>
    </article>
  );
}

export function PastSpeakersJudgesDialog() {
  return (
    <div className="container mx-auto px-4 pb-16 text-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="min-h-16 rounded-2xl border border-blue-ntt-200/35 bg-[#08172d]/85 px-8 py-4 text-center text-xl font-extrabold leading-snug whitespace-normal text-blue-ntt-200 shadow-[0_18px_36px_rgba(8,23,45,0.32)] transition-[transform,background-color,border-color,color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:border-blue-ntt-200/55 hover:bg-[#0d2342] motion-reduce:hover:translate-y-0"
          >
            View more Past Speakers and Judges
          </Button>
        </DialogTrigger>
        <DialogContent className="max-h-[85vh] overflow-hidden border-white/10 bg-[#071224] p-0 text-white shadow-[0_30px_120px_rgba(2,6,23,0.7)] sm:max-w-6xl">
          <DialogHeader className="border-b border-white/10 px-6 pt-6 pb-5 text-left sm:px-8">
            <DialogTitle className="text-3xl font-bold text-white">
              Past Speakers and Judges
            </DialogTitle>
          </DialogHeader>

          <div className="max-h-[calc(85vh-6rem)] space-y-10 overflow-y-auto px-6 py-6 sm:px-8">
            {PAST_SPEAKERS_JUDGES_CONTENT.map((group) => (
              <section key={group.title} className="space-y-5">
                <h3 className="text-left text-2xl font-semibold text-white">
                  {group.title}
                </h3>
                <div className="grid auto-cols-[minmax(220px,220px)] grid-flow-col gap-4 overflow-x-auto pb-2">
                  {group.items.map((person) => (
                    <PastPersonCard key={person.id} person={person} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
