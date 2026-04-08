export const GA_TRACKING_ID = "G-Y3F146ER46";
export const GOOGLE_ADS_TRACKING_ID = "AW-18072315003";

export const pageview = (url) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};
