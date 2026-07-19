"use client";

import { useState } from "react";
import { type LinkItem } from "@/lib/data";
import { useLinks } from "@/lib/LinkContext";
import { useFolders } from "@/lib/FolderContext";

type Props = {
  link: LinkItem;
  onClose: () => void;
};

export default function EditLinkModal({ link, onClose }: Props) {
  const { updateLink } = useLinks();
  const { folders } = useFolders();

  const [folderId, setFolderId] = useState(link.folder_id?.toString() ?? "");
  const [title, setTitle] = useState(link.title ?? "");
  const [description, setDescription] = useState(link.description ?? "");

  async function handleSave() {
    if (!title.trim()) return;
    await updateLink(link.id, {
      folder_id: folderId ? Number(folderId) : null,
      title: title.trim(),
      description: description.trim(),
    });
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="bg-[var(--card-bg)] rounded-2xl p-6 w-96 flex flex-col gap-4 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-base font-bold text-[var(--text)]">링크 수정</h2>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[var(--text)]">폴더</label>
          <select
            value={folderId}
            onChange={(e) => setFolderId(e.target.value)}
            className="input-field rounded-xl px-4 py-2.5 text-sm text-[var(--text)] appearance-none cursor-pointer"
          >
            <option value="">폴더 없음</option>
            {folders.map((folder) => (
              <option key={folder.id} value={folder.id}>
                {folder.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[var(--text)]">제목</label>
          <input
            autoFocus
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field rounded-xl px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--placeholder)]"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[var(--text)]">설명</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="input-field rounded-xl px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--placeholder)] resize-none"
          />
        </div>

        <div className="flex gap-2 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-sm font-semibold text-[var(--text-sub)] hover:bg-[var(--badge-bg)] transition-colors"
          >
            취소
          </button>
          <button
            onClick={handleSave}
            disabled={!title.trim()}
            className="btn-primary px-4 py-2 rounded-xl text-sm font-semibold text-white disabled:opacity-40 disabled:cursor-not-allowed"
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
}
