import { defineField, defineType } from "sanity";

export const feature = defineType({
  name: "feature",
  title: "Feature",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "summary", type: "text", rows: 3 }),
    defineField({
      name: "icon",
      type: "string",
      options: {
        list: [
          { title: "Oxygen", value: "oxygen" },
          { title: "Durability", value: "durability" },
          { title: "Lens design", value: "lens" },
          { title: "Asian fit", value: "asian-fit" },
          { title: "Eye", value: "eye" },
        ],
      },
    }),
    defineField({ name: "body", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "order", type: "number", initialValue: 0 }),
  ],
});
