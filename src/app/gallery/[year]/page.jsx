import { notFound } from "next/navigation";
import InitialPage from "@/components/pages/initial-page";
import GalleryGrid from "@/components/gallery-grid";
import { getGalleryImages } from "@/lib/cloudinary";
import { GALLERY_BY_YEAR } from "@/constant/gallery-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(GALLERY_BY_YEAR).map((year) => ({ year }));
}

export async function generateMetadata({ params }) {
  const { year } = await params;
  const gallery = GALLERY_BY_YEAR[year];

  if (!gallery) return {};

  return {
    title: gallery.title,
    alternates: {
      canonical: `/gallery/${year}`,
    },
  };
}

export default async function GalleryByYearPage({ params }) {
  const { year } = await params;
  const gallery = GALLERY_BY_YEAR[year];

  if (!gallery) notFound();

  let galleryImages = [];
  let errorMessage = null;
  let groups;

  if (gallery.folders) {
    groups = await Promise.all(gallery.folders.map(async (folder) => {
      try {
        return { folder, images: await getGalleryImages({ folder }) };
      } catch (error) {
        console.error(`Unable to load gallery folder ${folder}:`, error);
        return { folder, images: [], errorMessage: "Dokumentasi belum dapat dimuat. Silakan coba kembali nanti." };
      }
    }));
  } else try {
    galleryImages = await getGalleryImages({ folder: gallery.folder });
  } catch (error) {
    errorMessage =
      error instanceof Error
        ? error.message
        : "We could not load the Cloudinary gallery right now.";
  }

  return (
    <InitialPage>
      <GalleryGrid
        title={gallery.title}
        groups={groups}
        galleryImages={galleryImages}
        errorMessage={errorMessage}
      />
    </InitialPage>
  );
}
