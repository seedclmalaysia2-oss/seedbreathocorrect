"use server";

import { createClient } from "next-sanity";
import { revalidatePath } from "next/cache";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import type { HomepageContent } from "@/lib/homepage-content";
import { addKeys } from "./content-utils";

export type SaveResult = { ok: true } | { ok: false; error: string };

// Writes the homepage singleton to Sanity. Intentionally restricted to
// local development — the inline editor is a local authoring tool, not a
// production endpoint. Production content edits go through Studio.
export async function saveHomepage(content: HomepageContent): Promise<SaveResult> {
  if (process.env.NODE_ENV !== "development") {
    return { ok: false, error: "The inline editor only works in local development." };
  }

  const token = process.env.SANITY_API_WRITE_TOKEN;
  if (!token) {
    return {
      ok: false,
      error: "SANITY_API_WRITE_TOKEN is not set in .env.local — see the editor setup notes.",
    };
  }

  try {
    const writeClient = createClient({
      projectId,
      dataset,
      apiVersion,
      token,
      useCdn: false,
    });

    await writeClient.createOrReplace({
      _id: "homepage",
      _type: "homepage",
      ...addKeys(content),
    });

    revalidatePath("/");
    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Failed to save to Sanity.",
    };
  }
}
