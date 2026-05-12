import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "author", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", type: "string" }),
    defineField({ name: "quote", type: "text", rows: 4 }),
    defineField({ name: "photo", type: "image", options: { hotspot: true } }),
  ],
  preview: { select: { title: "author", subtitle: "role" } },
});
