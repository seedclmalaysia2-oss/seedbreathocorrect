"use client";

import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import { useEditor } from "./editor-context";

// Move-earlier / move-later controls for a single item in a reorderable
// list. Renders nothing unless the editor is in edit mode.
export function ReorderControls({
  path,
  index,
  count,
  axis = "vertical",
  className,
}: {
  path: string;
  index: number;
  count: number;
  axis?: "vertical" | "horizontal";
  className?: string;
}) {
  const ctx = useEditor();
  if (!ctx || !ctx.editMode) return null;

  const Prev = axis === "horizontal" ? ChevronLeft : ChevronUp;
  const Next = axis === "horizontal" ? ChevronRight : ChevronDown;

  return (
    <div
      className={
        "absolute z-20 flex overflow-hidden rounded-lg bg-navy shadow-lg ring-1 ring-white/20 " +
        (className ?? "right-2 top-2")
      }
    >
      <button
        type="button"
        disabled={index === 0}
        title="Move earlier"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          ctx.moveItem(path, index, "up");
        }}
        className="flex size-7 items-center justify-center text-white/85 transition-colors hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-25"
      >
        <Prev size={15} />
      </button>
      <span aria-hidden className="my-1 w-px bg-white/20" />
      <button
        type="button"
        disabled={index === count - 1}
        title="Move later"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          ctx.moveItem(path, index, "down");
        }}
        className="flex size-7 items-center justify-center text-white/85 transition-colors hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-25"
      >
        <Next size={15} />
      </button>
    </div>
  );
}
