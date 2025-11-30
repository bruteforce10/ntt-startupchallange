const DEFAULT_MAX_RESULTS = Number(
  process.env.CLOUDINARY_GALLERY_MAX_RESULTS ?? 30
);

const DEFAULT_REVALIDATE_SECONDS = Number(
  process.env.CLOUDINARY_REVALIDATE_SECONDS ?? 300
);

const sanitizeFolder = (folder) => folder?.replaceAll('"', "").trim();

const humanizePublicId = (publicId = "") =>
  publicId
    .split("/")
    .pop()
    ?.replace(/[-_]/g, " ")
    ?.replace(/\b\w/g, (char) => char.toUpperCase()) ?? "Gallery Image";

const normalizeResource = (resource) => ({
  id: resource.asset_id ?? resource.public_id,
  publicId: resource.public_id,
  folder: resource.folder,
  width: resource.width,
  height: resource.height,
  format: resource.format,
  createdAt: resource.created_at,
  tags: resource.tags ?? [],
  bytes: resource.bytes,
  secureUrl: resource.secure_url,
  alt: resource.context?.custom?.alt ?? humanizePublicId(resource.public_id),
});

export const getGalleryImages = async ({
  folder = process.env.CLOUDINARY_GALLERY_FOLDER,
  maxResults = DEFAULT_MAX_RESULTS,
} = {}) => {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error(
      "Cloudinary credentials are missing. Please set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET."
    );
  }

  const expressionParts = ["resource_type:image"];
  const sanitizedFolder = sanitizeFolder(folder);

  if (sanitizedFolder) {
    expressionParts.push(`folder="${sanitizedFolder}"`);
  }

  const searchPayload = {
    expression: expressionParts.join(" AND "),
    sort_by: [{ created_at: "desc" }],
    max_results: maxResults,
  };

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString(
          "base64"
        )}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchPayload),
      next: { revalidate: DEFAULT_REVALIDATE_SECONDS },
    }
  );

  const payload = await response.json();

  if (!response.ok) {
    throw new Error(
      payload.error?.message ??
        "Unable to load gallery assets from Cloudinary at the moment."
    );
  }

  return (payload.resources ?? []).map(normalizeResource);
};
