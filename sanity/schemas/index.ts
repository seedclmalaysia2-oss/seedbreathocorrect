import type { SchemaTypeDefinition } from "sanity";
import { siteSettings } from "./siteSettings";
import { homepage } from "./homepage";
import { page } from "./page";
import { feature } from "./feature";
import { faqItem } from "./faqItem";
import { testimonial } from "./testimonial";
import { office } from "./office";
import { videoLesson } from "./videoLesson";
import { fittingGuide } from "./fittingGuide";

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  homepage,
  page,
  feature,
  faqItem,
  testimonial,
  office,
  videoLesson,
  fittingGuide,
];
