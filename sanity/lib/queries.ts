import { groq } from "next-sanity";

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  title,
  tagline,
  contactEmail,
  nav[]{ label, href },
  footerCopy
}`;

export const featuresQuery = groq`*[_type == "feature"] | order(order asc){
  _id, title, summary, icon, body
}`;

export const faqQuery = groq`*[_type == "faqItem"] | order(order asc){
  _id, question, answer
}`;

export const testimonialsQuery = groq`*[_type == "testimonial"] | order(_createdAt desc){
  _id, author, role, quote, photo
}`;

export const officesQuery = groq`*[_type == "office"] | order(order asc){
  _id, region, name, address, phone, email, website, instagram
}`;

export const videoLessonsQuery = groq`*[_type == "videoLesson"] | order(order asc){
  _id, title, description, videoUrl
}`;

export const fittingGuideQuery = groq`*[_type == "fittingGuide" && lensType == $lensType][0]{
  title, lensType, intro, steps
}`;

export const pageBySlugQuery = groq`*[_type == "page" && slug.current == $slug][0]{
  title, body, seo
}`;
