import { defineArrayMember, defineField, defineType } from "sanity";

const ICON_OPTIONS = (values: { title: string; value: string }[]) => ({ list: values });

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  // Singleton — the Studio structure should expose only one of these.
  // The page.tsx query fetches *[_type == "homepage"][0].
  fields: [
    // ── Hero ────────────────────────────────────────────────────────────
    defineField({
      name: "hero",
      type: "object",
      title: "Hero section",
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: "badge", type: "string", description: "Small uppercase pill above the headline" },
        { name: "titleTop", type: "string", description: "Large bold word (e.g. SEED)" },
        { name: "titleSub", type: "string", description: "Gold subline (e.g. BREATH O CORRECT)" },
        { name: "description", type: "text", rows: 3 },
        {
          name: "primaryCta",
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "href", type: "string" },
          ],
        },
        {
          name: "secondaryCta",
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "href", type: "string" },
          ],
        },
        {
          name: "stats",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "value", type: "string" },
                { name: "label", type: "string" },
              ],
              preview: { select: { title: "value", subtitle: "label" } },
            }),
          ],
        },
      ],
    }),

    // ── About / How it works ────────────────────────────────────────────
    defineField({
      name: "about",
      type: "object",
      title: "About section",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", type: "string" },
        { name: "title", type: "string" },
        { name: "titleHighlight", type: "string", description: "Highlighted gold portion" },
        { name: "description", type: "text", rows: 3 },
        {
          name: "steps",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                {
                  name: "icon",
                  type: "string",
                  options: ICON_OPTIONS([
                    { title: "Moon", value: "moon" },
                    { title: "Eye", value: "eye" },
                    { title: "Sun", value: "sun" },
                  ]),
                },
                { name: "title", type: "string" },
                { name: "description", type: "text", rows: 3 },
              ],
              preview: { select: { title: "title", subtitle: "icon" } },
            }),
          ],
        },
        { name: "bannerQuote", type: "text", rows: 2 },
        { name: "bannerHighlight", type: "string" },
        { name: "bannerSub", type: "string" },
      ],
    }),

    // ── Products ────────────────────────────────────────────────────────
    defineField({
      name: "products",
      type: "object",
      title: "Products section",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", type: "string" },
        { name: "title", type: "string" },
        { name: "description", type: "text", rows: 3 },
        {
          name: "items",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "name", type: "string" },
                { name: "tagline", type: "string" },
                { name: "description", type: "text", rows: 3 },
                {
                  name: "features",
                  type: "array",
                  of: [{ type: "string" }],
                },
                { name: "badge", type: "string" },
                {
                  name: "variant",
                  type: "string",
                  options: ICON_OPTIONS([
                    { title: "Navy gradient", value: "navy" },
                    { title: "Gold gradient", value: "gold" },
                  ]),
                  initialValue: "navy",
                },
              ],
              preview: { select: { title: "name", subtitle: "tagline" } },
            }),
          ],
        },
      ],
    }),

    // ── Benefits ────────────────────────────────────────────────────────
    defineField({
      name: "benefits",
      type: "object",
      title: "Benefits section",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", type: "string" },
        { name: "title", type: "string" },
        { name: "description", type: "text", rows: 3 },
        {
          name: "items",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                {
                  name: "icon",
                  type: "string",
                  options: ICON_OPTIONS([
                    { title: "Shield", value: "shield" },
                    { title: "Wind", value: "wind" },
                    { title: "Smile", value: "smile" },
                    { title: "Activity", value: "activity" },
                    { title: "Users", value: "users" },
                    { title: "Award", value: "award" },
                  ]),
                },
                { name: "title", type: "string" },
                { name: "description", type: "text", rows: 3 },
              ],
              preview: { select: { title: "title", subtitle: "icon" } },
            }),
          ],
        },
      ],
    }),

    // ── Heritage / Why SEED ────────────────────────────────────────────
    defineField({
      name: "heritage",
      type: "object",
      title: "Heritage section",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", type: "string" },
        { name: "titleTop", type: "string" },
        { name: "titleHighlight", type: "string" },
        { name: "body1", type: "text", rows: 3 },
        { name: "body2", type: "text", rows: 3 },
        {
          name: "milestones",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "year", type: "string" },
                { name: "label", type: "string" },
              ],
              preview: { select: { title: "year", subtitle: "label" } },
            }),
          ],
        },
        {
          name: "cards",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "value", type: "string" },
                { name: "label", type: "string" },
                { name: "sub", type: "string" },
              ],
              preview: { select: { title: "value", subtitle: "label" } },
            }),
          ],
        },
      ],
    }),

    // ── Contact ─────────────────────────────────────────────────────────
    defineField({
      name: "contact",
      type: "object",
      title: "Contact section",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", type: "string" },
        { name: "title", type: "string" },
        { name: "description", type: "text", rows: 3 },
        { name: "email", type: "string" },
        { name: "manufacturer", type: "string" },
        { name: "fittingNote", type: "text", rows: 3 },
      ],
    }),
  ],
  preview: {
    select: { title: "hero.titleTop", subtitle: "hero.titleSub" },
    prepare: ({ title, subtitle }) => ({
      title: title || "Homepage",
      subtitle: subtitle || "Single-page content",
    }),
  },
});
