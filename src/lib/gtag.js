export const GA_TRACKING_ID = "G-Y3F146ER46";

export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};
