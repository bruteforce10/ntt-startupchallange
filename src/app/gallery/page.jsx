import { redirect } from "next/navigation";

// Older links (e.g. the NTTSC 2025 page) pointed to /gallery for the 2025 photos.
export default function GalleryPage() {
  redirect("/gallery/2025");
}
