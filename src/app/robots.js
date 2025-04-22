export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://www.ntt-startupchallenge.com/sitemap.xml",
  };
}
