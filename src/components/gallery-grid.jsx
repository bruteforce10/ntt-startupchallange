"use client";

import React from "react";
import { CldImage } from "next-cloudinary";
import HeadingText from "@/components/heading-text";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const formatDate = (value) => {
  if (!value) return null;

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
};

export default function GalleryGrid({
  groups,
  cloudName,
}) {
  const [activeFolder, setActiveFolder] = React.useState(groups[0]?.folder);
  const activeGroup = groups.find((group) => group.folder === activeFolder);
  const galleryImages = activeGroup?.images ?? [];
  const lastUpdated = formatDate(galleryImages.at(0)?.createdAt);

  return (
    <>
      <section className="px-4 pt-28 pb-12 sm:pt-36">
        <div className="mx-auto max-w-5xl text-center">
          <HeadingText text="NTT Startup Challenge Gallery" />
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="rounded-full border border-white/10 px-3 py-1">
              {galleryImages?.length || 0} documentations
            </span>
            {lastUpdated ? (
              <span className="rounded-full border border-white/10 px-3 py-1">
                Update last {lastUpdated}
              </span>
            ) : null}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-6xl">
          <Tabs value={activeFolder} onValueChange={setActiveFolder}>
            <TabsList aria-label="Gallery folders" className="mb-6 grid h-auto w-full grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
              {groups.map(({ folder }) => (
                <TabsTrigger key={folder} value={folder} className="min-h-11 px-4 py-3">
                  {folder}
                </TabsTrigger>
              ))}
            </TabsList>
            {groups.map(({ folder, images: galleryImages, errorMessage }) => (
              <TabsContent key={folder} value={folder}>
          {errorMessage ? (
            <div className="rounded-3xl border border-red-500/30 bg-red-500/10 p-6 text-sm text-red-50">
              {errorMessage}
            </div>
          ) : !galleryImages || galleryImages.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center text-muted-foreground">
              Belum ada dokumentasi untuk {folder}. Silakan cek kembali nanti.
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((image, index) => (
                <figure
                  key={image.id}
                  className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-2 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.75)]"
                >
                  <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80">
                    <CldImage
                      cloudName={cloudName}
                      src={image.publicId}
                      width={image.width}
                      height={image.height}
                      alt={image.alt}
                      crop="fill"
                      gravity="auto"
                      format="auto"
                      quality="auto"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 3}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="flex flex-col gap-2 p-4">
                    <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
                      <span>{formatDate(image.createdAt)}</span>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </>
  );
}
