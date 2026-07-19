"use client";

import { useLinks } from "@/lib/LinkContext";

type Props = {
  linkId: number;
  linkTitle: string;
  onClose: () => void;
};

export default function DeleteLinkModal({ linkId, linkTitle, onClose }: Props) {
  const { deleteLink } = useLinks();

  async function handleDelete() {
    await deleteLink(linkId);
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
        <div className="flex flex-col gap-1">
          <h2 className="text-base font-bold text-[var(--text)]">링크 삭제</h2>
          <p className="text-sm text-[var(--text-sub)]">
            <span className="font-semibold text-[var(--text)]">{linkTitle}</span>을(를) 삭제할까요?
          </p>
        </div>
        <div className="flex gap-2 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-sm font-semibold text-[var(--text-sub)] hover:bg-[var(--badge-bg)] transition-colors"
          >
            취소
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 rounded-xl text-sm font-semibold text-white bg-red-500 hover:bg-red-600 transition-colors"
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}
