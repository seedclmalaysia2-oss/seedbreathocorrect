import { client } from "./client";

type FetchArgs<T> = {
  query: string;
  params?: Record<string, unknown>;
  tags?: string[];
  fallback: T;
};

export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
  fallback,
}: FetchArgs<T>): Promise<T> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return fallback;
  try {
    return await client.fetch<T>(query, params, {
      next: { tags, revalidate: 60 },
    });
  } catch {
    return fallback;
  }
}
