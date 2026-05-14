import { defineField, defineType } from "sanity";

export const fittingGuide = defineType({
  name: "fittingGuide",
  title: "Fitting Guide",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "lensType",
      type: "string",
      options: {
        list: [
          { title: "BOC Sphere", value: "sphere" },
          { title: "BOC TD (Toric)", value: "toric" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: "intro", type: "array", of: [{ type: "block" }] }),
    defineField({
      name: "steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "heading", type: "string" },
            { name: "body", type: "array", of: [{ type: "block" }] },
            { name: "image", type: "image", options: { hotspot: true } },
          ],
        },
      ],
    }),
  ],
});
