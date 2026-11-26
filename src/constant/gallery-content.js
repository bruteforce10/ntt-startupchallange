// Gallery pages per year, served at /gallery/[year].
// `folder` is the Cloudinary asset folder; "" means the root folder
// (the 2025 photos were uploaded before year folders were used).
export const GALLERY_BY_YEAR = {
  2025: {
    title: "NTT Startup Challenge 2025 Gallery",
    folder: "",
  },
  2026: {
    title: "NTT Startup Challenge 2026 Gallery",
    folders: [
      "Info Session India",
      "Final Day 2026",
      "Info Session Vietnam",
      "Info Session Malaysia",
    ],
  },
};
