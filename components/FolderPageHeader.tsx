"use client";

import { useFolders } from "@/lib/FolderContext";
import { useLinks } from "@/lib/LinkContext";

export default function FolderPageHeader({ folderId }: { folderId: number }) {
  const { folders } = useFolders();
  const { links } = useLinks();
  const folder = folders.find((f) => f.id === folderId);
  const count = links.filter((l) => l.folder_id === folderId).length;
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold text-[var(--text)]">{folder?.name ?? "폴더"}</h2>
      <p className="mt-1 text-sm text-[var(--text-sub)]">저장된 링크 {count}개</p>
    </div>
  );
}
