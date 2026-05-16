"use client";

import { Check, Pencil, RotateCcw, X } from "lucide-react";
import { useEditor } from "./editor-context";

// Floating control for the inline editor. Rendered only in local dev
// (page.tsx gates it), so it never ships to production.
export function EditorToolbar() {
  const ctx = useEditor();
  if (!ctx) return null;

  const { editMode, toggleEditMode, changedCount, saving, save, discard } = ctx;

  if (!editMode) {
    return (
      <button
        type="button"
        onClick={toggleEditMode}
        className="fixed bottom-5 right-5 z-[100] inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white shadow-xl ring-1 ring-white/15 transition hover:bg-navy/90"
      >
        <Pencil size={15} className="text-gold" />
        Edit homepage
      </button>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex items-center gap-2 rounded-2xl bg-navy p-2.5 shadow-2xl ring-1 ring-white/15">
      <div className="flex items-center gap-2 pl-2 pr-1">
        <span className="size-2 animate-pulse rounded-full bg-gold" />
        <span className="text-sm font-semibold text-white">Editing</span>
        <span className="text-xs text-white/55">
          {changedCount === 0
            ? "no changes"
            : `${changedCount} change${changedCount === 1 ? "" : "s"}`}
        </span>
      </div>

      <button
        type="button"
        onClick={save}
        disabled={saving || changedCount === 0}
        className="inline-flex items-center gap-1.5 rounded-lg bg-gold px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-gold/90 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Check size={15} />
        {saving ? "Saving…" : "Save"}
      </button>

      <button
        type="button"
        onClick={discard}
        disabled={saving}
        title="Discard unsaved changes"
        className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 disabled:opacity-40"
      >
        <RotateCcw size={14} />
        Discard
      </button>

      <button
        type="button"
        onClick={toggleEditMode}
        title="Exit edit mode"
        className="inline-flex size-9 items-center justify-center rounded-lg text-white/60 transition hover:bg-white/10 hover:text-white"
      >
        <X size={16} />
      </button>
    </div>
  );
}
