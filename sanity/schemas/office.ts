import { defineField, defineType } from "sanity";

export const office = defineType({
  name: "office",
  title: "Office",
  type: "document",
  fields: [
    defineField({ name: "region", type: "string", validation: (r) => r.required() }),
    defineField({ name: "name", type: "string" }),
    defineField({ name: "address", type: "text", rows: 3 }),
    defineField({ name: "phone", type: "string" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "website", type: "url" }),
    defineField({ name: "instagram", type: "url" }),
    defineField({ name: "order", type: "number", initialValue: 0 }),
  ],
  preview: { select: { title: "region", subtitle: "name" } },
});
