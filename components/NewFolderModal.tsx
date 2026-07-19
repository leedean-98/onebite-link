"use client";

import { useState } from "react";
import { useFolders } from "@/lib/FolderContext";

export default function NewFolderModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const { addFolder, isAdding } = useFolders();

  async function handleSave() {
    const trimmed = name.trim();
    if (!trimmed) return;
    await addFolder(trimmed);
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="bg-[var(--card-bg)] rounded-2xl p-6 w-80 flex flex-col gap-4 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-base font-bold text-[var(--text)]">새 폴더 만들기</h2>
        <input
          autoFocus
          type="text"
          placeholder="폴더 이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
          className="input-field w-full rounded-xl px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--placeholder)]"
        />
        <div className="flex gap-2 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-sm font-semibold text-[var(--text-sub)] hover:bg-[var(--badge-bg)] transition-colors"
          >
            취소
          </button>
          <button
            onClick={handleSave}
            disabled={!name.trim() || isAdding}
            className="btn-primary px-4 py-2 rounded-xl text-sm font-semibold text-white disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {isAdding ? "저장 중..." : "저장"}
          </button>
        </div>
      </div>
    </div>
  );
}
