import { defineField, defineType } from "sanity";

export const videoLesson = defineType({
  name: "videoLesson",
  title: "Video Lesson",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", type: "text", rows: 3 }),
    defineField({ name: "videoUrl", type: "url", description: "YouTube or Vimeo URL" }),
    defineField({ name: "order", type: "number", initialValue: 0 }),
  ],
});
