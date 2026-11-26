import InitialPage from "@/components/pages/initial-page";
import { getGalleryImages } from "@/lib/cloudinary";
import GalleryGrid from "@/components/gallery-grid";

const GALLERY_FOLDERS = [
  "Info Session India",
  "Final Day 2026",
  "Info Session Vietnam",
  "Info Session Malaysia",
];

const GalleryPage = async () => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  const groups = await Promise.all(
    GALLERY_FOLDERS.map(async (folder) => {
      try {
        return { folder, images: await getGalleryImages({ folder }) };
      } catch (error) {
        console.error(`Unable to load gallery folder ${folder}:`, error);
        return {
          folder,
          images: [],
          errorMessage: "Dokumentasi belum dapat dimuat. Silakan coba kembali nanti.",
        };
      }
    }),
  );

  return (
    <InitialPage>
      <GalleryGrid
        groups={groups}
        cloudName={cloudName}
      />
    </InitialPage>
  );
};

export default GalleryPage;
