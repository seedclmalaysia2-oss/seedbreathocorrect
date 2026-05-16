"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useTransition,
} from "react";
import { toast } from "sonner";
import type { HomepageContent } from "@/lib/homepage-content";
import { getPath, setPath } from "./content-utils";
import { saveHomepage } from "./actions";

type EditorContextValue = {
  editMode: boolean;
  toggleEditMode: () => void;
  getValue: (path: string) => string;
  updateField: (path: string, value: string) => void;
  getList: (path: string) => unknown[];
  moveItem: (path: string, index: number, direction: "up" | "down") => void;
  addItem: (path: string, item: unknown) => void;
  removeItem: (path: string, index: number) => void;
  changedCount: number;
  saving: boolean;
  save: () => void;
  discard: () => void;
};

const EditorContext = createContext<EditorContextValue | null>(null);

export function useEditor() {
  return useContext(EditorContext);
}

// Returns the live (draft) array at `path` when the editor is active,
// otherwise the server-provided fallback. Lets section components render
// reorderable lists straight from editor state.
export function useEditableList<T>(path: string, fallback: T[]): T[] {
  const ctx = useEditor();
  return ctx ? (ctx.getList(path) as T[]) : fallback;
}

export function EditorProvider({
  initialContent,
  children,
}: {
  initialContent: HomepageContent;
  children: React.ReactNode;
}) {
  const [editMode, setEditMode] = useState(false);
  const [draft, setDraft] = useState<HomepageContent>(initialContent);
  // Baseline is what's currently persisted in Sanity — advances on save.
  const [baseline, setBaseline] = useState<HomepageContent>(initialContent);
  const [changedPaths, setChangedPaths] = useState<Set<string>>(new Set());
  const [saving, startSave] = useTransition();

  const getValue = useCallback(
    (path: string) => {
      const v = getPath(draft, path);
      return typeof v === "string" ? v : "";
    },
    [draft],
  );

  const getList = useCallback(
    (path: string) => {
      const v = getPath(draft, path);
      return Array.isArray(v) ? v : [];
    },
    [draft],
  );

  const updateField = useCallback(
    (path: string, value: string) => {
      setDraft((d) => setPath(d, path, value));
      setChangedPaths((prev) => {
        const next = new Set(prev);
        if (getPath(baseline, path) === value) next.delete(path);
        else next.add(path);
        return next;
      });
    },
    [baseline],
  );

  const moveItem = useCallback(
    (path: string, index: number, direction: "up" | "down") => {
      const target = direction === "up" ? index - 1 : index + 1;
      setDraft((d) => {
        const arr = getPath(d, path);
        if (!Array.isArray(arr) || target < 0 || target >= arr.length) return d;
        const next = [...arr];
        [next[index], next[target]] = [next[target], next[index]];
        return setPath(d, path, next);
      });
      setChangedPaths((prev) => new Set(prev).add(`list:${path}`));
    },
    [],
  );

  const addItem = useCallback((path: string, item: unknown) => {
    setDraft((d) => {
      const arr = getPath(d, path);
      if (!Array.isArray(arr)) return d;
      return setPath(d, path, [...arr, item]);
    });
    setChangedPaths((prev) => new Set(prev).add(`list:${path}`));
  }, []);

  const removeItem = useCallback((path: string, index: number) => {
    setDraft((d) => {
      const arr = getPath(d, path);
      if (!Array.isArray(arr)) return d;
      return setPath(
        d,
        path,
        arr.filter((_, i) => i !== index),
      );
    });
    setChangedPaths((prev) => new Set(prev).add(`list:${path}`));
  }, []);

  const toggleEditMode = useCallback(() => setEditMode((v) => !v), []);

  const discard = useCallback(() => {
    setDraft(baseline);
    setChangedPaths(new Set());
    setEditMode(false);
  }, [baseline]);

  const save = useCallback(() => {
    startSave(async () => {
      const result = await saveHomepage(draft);
      if (result.ok) {
        setBaseline(draft);
        setChangedPaths(new Set());
        toast.success("Homepage saved to Sanity.");
      } else {
        toast.error(result.error);
      }
    });
  }, [draft]);

  const value = useMemo<EditorContextValue>(
    () => ({
      editMode,
      toggleEditMode,
      getValue,
      updateField,
      getList,
      moveItem,
      addItem,
      removeItem,
      changedCount: changedPaths.size,
      saving,
      save,
      discard,
    }),
    [
      editMode,
      toggleEditMode,
      getValue,
      updateField,
      getList,
      moveItem,
      addItem,
      removeItem,
      changedPaths,
      saving,
      save,
      discard,
    ],
  );

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>;
}
