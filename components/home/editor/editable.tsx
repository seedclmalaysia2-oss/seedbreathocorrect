"use client";

import { useEditor } from "./editor-context";

// Inline-editable text. Outside the editor (production, or no provider)
// it renders the plain string with zero wrapper markup. In edit mode it
// becomes a contentEditable span that commits on blur / Enter.
export function Editable({
  path,
  value,
  className,
}: {
  path: string;
  value: string;
  className?: string;
}) {
  const ctx = useEditor();

  if (!ctx) return value;

  const current = ctx.getValue(path) || value;

  if (!ctx.editMode) return current;

  return (
    <span
      // Remount when the committed value changes (blur / save / discard)
      // so the uncontrolled contentEditable stays in sync without cursor
      // jumps during typing.
      key={current}
      data-editable
      data-placeholder="Empty — click to edit"
      className={"editable-active" + (className ? " " + className : "")}
      contentEditable
      suppressContentEditableWarning
      role="textbox"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          e.currentTarget.blur();
        }
      }}
      onClick={(e) => {
        // Keep clicks on editable text inside links/buttons from navigating.
        e.preventDefault();
        e.stopPropagation();
      }}
      onBlur={(e) => {
        const text = (e.currentTarget.textContent ?? "").trim();
        if (text !== current) ctx.updateField(path, text);
      }}
    >
      {current}
    </span>
  );
}
