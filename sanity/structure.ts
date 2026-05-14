import type { StructureResolver } from "sanity/structure";

// Singletons appear as a single editable document at the top of the
// Studio sidebar instead of a list. The actual document IDs are the
// same as the schema type names (e.g. `homepage`).
const SINGLETONS = ["homepage", "siteSettings"] as const;

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      ...SINGLETONS.map((name) =>
        S.listItem()
          .title(titleFor(name))
          .id(name)
          .child(
            S.document().schemaType(name).documentId(name).title(titleFor(name)),
          ),
      ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !SINGLETONS.includes((item.getId() ?? "") as (typeof SINGLETONS)[number]),
      ),
    ]);

function titleFor(name: string) {
  switch (name) {
    case "homepage":
      return "Homepage";
    case "siteSettings":
      return "Site Settings";
    default:
      return name;
  }
}
