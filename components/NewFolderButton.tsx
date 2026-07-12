"use client";

import { useState } from "react";
import NewFolderModal from "./NewFolderModal";

export default function NewFolderButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold text-[var(--text-sub)] bg-[var(--input-bg)] hover:bg-[var(--badge-bg)] hover:text-[var(--accent)] transition-colors"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
          />
        </svg>
        새 폴더
      </button>
      {open && <NewFolderModal onClose={() => setOpen(false)} />}
    </>
  );
}
