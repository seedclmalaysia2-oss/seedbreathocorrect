// Path helpers for the inline homepage editor. Paths are dot-separated
// and may contain numeric segments for array indices, e.g.
// "products.items.0.features.2".

export function getPath(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc == null) return undefined;
    return (acc as Record<string, unknown>)[key];
  }, obj);
}

export function setPath<T>(root: T, path: string, value: unknown): T {
  const segments = path.split(".");
  const clone: unknown = Array.isArray(root) ? [...root] : { ...(root as object) };
  let cursor = clone as Record<string, unknown>;

  for (let i = 0; i < segments.length - 1; i++) {
    const key = segments[i];
    const next = cursor[key];
    cursor[key] = Array.isArray(next) ? [...next] : { ...(next as object) };
    cursor = cursor[key] as Record<string, unknown>;
  }

  cursor[segments[segments.length - 1]] = value;
  return clone as T;
}

// Sanity requires a stable `_key` on every object inside an array.
// Index-based keys keep them deterministic across saves.
export function addKeys<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map((item, i) =>
      item && typeof item === "object"
        ? { _key: String(i), ...(addKeys(item) as object) }
        : item,
    ) as T;
  }
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) out[k] = addKeys(v);
    return out as T;
  }
  return value;
}
