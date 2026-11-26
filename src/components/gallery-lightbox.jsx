"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { CldImage } from "next-cloudinary";
import { ChevronLeft, ChevronRight, Loader2, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const CONTROL_CLASS =
  "z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const wrapIndex = (index, length) => (index + length) % length;

export default function GalleryLightbox({
  images,
  activeIndex,
  onIndexChange,
}) {
  const image = activeIndex === null ? null : images[activeIndex];
  const total = images.length;
  const hasNavigation = total > 1;

  const close = () => onIndexChange(null);
  const showOffset = (offset) =>
    onIndexChange(wrapIndex(activeIndex + offset, total));

  const handleKeyDown = (event) => {
    if (!hasNavigation) return;
    if (event.key === "ArrowRight") showOffset(1);
    if (event.key === "ArrowLeft") showOffset(-1);
  };

  // Content covers the whole screen, so a click on its empty area is the backdrop click.
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) close();
  };

  return (
    <DialogPrimitive.Root
      open={image !== null}
      onOpenChange={(isOpen) => !isOpen && close()}
    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/95" />
        <DialogPrimitive.Content
          aria-describedby={undefined}
          onKeyDown={handleKeyDown}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-20 focus:outline-none sm:px-20"
        >
          {image ? (
            <>
              <DialogPrimitive.Title className="sr-only">
                {image.alt}
              </DialogPrimitive.Title>
              <span className="absolute top-6 left-6 text-sm tabular-nums text-white/80">
                {activeIndex + 1} / {total}
              </span>
              <DialogPrimitive.Close
                className={cn(CONTROL_CLASS, "absolute top-4 right-4")}
              >
                <XIcon className="size-5" />
                <span className="sr-only">Close</span>
              </DialogPrimitive.Close>

              {/* Painted under the image (same stacking level, earlier in DOM), so the loaded photo covers it. */}
              <Loader2
                aria-hidden="true"
                className="absolute top-1/2 left-1/2 size-8 -translate-x-1/2 -translate-y-1/2 animate-spin text-white/60"
              />
              <CldImage
                key={image.id}
                src={image.publicId}
                width={image.width}
                height={image.height}
                alt={image.alt}
                format="auto"
                quality="auto"
                sizes="100vw"
                className="relative h-auto max-h-full w-auto max-w-full rounded-lg object-contain"
              />

              {hasNavigation ? (
                <>
                  <button
                    type="button"
                    onClick={() => showOffset(-1)}
                    className={cn(
                      CONTROL_CLASS,
                      "absolute left-4 top-1/2 -translate-y-1/2",
                    )}
                  >
                    <ChevronLeft className="size-6" />
                    <span className="sr-only">Previous photo</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => showOffset(1)}
                    className={cn(
                      CONTROL_CLASS,
                      "absolute right-4 top-1/2 -translate-y-1/2",
                    )}
                  >
                    <ChevronRight className="size-6" />
                    <span className="sr-only">Next photo</span>
                  </button>
                </>
              ) : null}
            </>
          ) : null}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
