"use client";

import { useLinks } from "@/lib/LinkContext";

export default function LinksPageHeader() {
  const { links } = useLinks();
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold text-[var(--text)]">전체 링크</h2>
      <p className="mt-1 text-sm text-[var(--text-sub)]">저장된 링크 {links.length}개</p>
    </div>
  );
}
