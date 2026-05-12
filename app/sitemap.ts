import type { MetadataRoute } from "next";

const ROUTES = [
  "/",
  "/features",
  "/patient-guide",
  "/testimonials",
  "/faq",
  "/regular-examination",
  "/clinical-outcome",
  "/education",
  "/instruction-for-use",
  "/fittings/sphere",
  "/fittings/toric",
  "/practitioners",
  "/contact",
  "/privacy-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://seed-breathocorrect.com";
  const now = new Date();
  return ROUTES.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
