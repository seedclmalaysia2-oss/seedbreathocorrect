"use client";

import { Plus } from "lucide-react";
import { useEditor } from "./editor-context";

// Appends a new item to an editable list. Renders nothing unless the
// editor is in edit mode. `tone` adapts the colours for dark sections.
export function AddItemButton({
  path,
  item,
  label,
  tone = "light",
  className,
}: {
  path: string;
  item: unknown;
  label: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const ctx = useEditor();
  if (!ctx || !ctx.editMode) return null;

  const toneClasses =
    tone === "dark"
      ? "border-white/25 text-white/60 hover:border-gold hover:bg-white/5 hover:text-gold"
      : "border-navy/20 text-navy/55 hover:border-gold hover:bg-gold/5 hover:text-gold";

  return (
    <button
      type="button"
      onClick={() => ctx.addItem(path, item)}
      className={
        "flex items-center justify-center gap-2 rounded-2xl border-2 border-dashed transition-colors " +
        toneClasses +
        " " +
        (className ?? "min-h-[140px] p-6")
      }
    >
      <Plus size={18} />
      <span className="text-sm font-semibold">{label}</span>
    </button>
  );
}
