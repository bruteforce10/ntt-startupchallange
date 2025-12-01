import InitialPage from "@/components/pages/initial-page";
import { getGalleryImages } from "@/lib/cloudinary";
import GalleryGrid from "@/components/gallery-grid";

const GalleryPage = async () => {
  let galleryImages = [];
  let errorMessage = null;
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  try {
    // Passing null skips the folder filter so every image in the Cloudinary
    // account is included in the gallery.
    galleryImages = await getGalleryImages({ folder: null });
  } catch (error) {
    errorMessage =
      error instanceof Error
        ? error.message
        : "We could not load the Cloudinary gallery right now.";
  }

  return (
    <InitialPage>
      <GalleryGrid
        galleryImages={galleryImages}
        errorMessage={errorMessage}
        cloudName={cloudName}
      />
    </InitialPage>
  );
};

export default GalleryPage;
