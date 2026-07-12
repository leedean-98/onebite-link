"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useFolders } from "@/lib/FolderContext";
import { Folder } from "@/lib/data";
import DeleteFolderModal from "./DeleteFolderModal";
import EditFolderModal from "./EditFolderModal";

export default function Sidebar() {
  const pathname = usePathname();
  const { folders } = useFolders();
  const [deletingFolder, setDeletingFolder] = useState<Folder | null>(null);
  const [editingFolder, setEditingFolder] = useState<Folder | null>(null);

  return (
    <>
      <aside className="app-sidebar w-56 shrink-0 bg-[var(--card-bg)] flex flex-col p-3">
        <Link
          href="/"
          className={`sidebar-link flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm ${
            pathname === "/" ? "sidebar-link-active" : "text-[var(--text-sub)]"
          }`}
        >
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6h16.5M3.75 12h16.5M3.75 18h16.5" />
          </svg>
          전체
        </Link>

        <div className="mt-4 flex flex-col gap-0.5">
          <p className="px-3 pb-1.5 text-xs font-semibold text-[var(--placeholder)] uppercase tracking-widest">
            폴더
          </p>
          {folders.map((folder) => {
            const href = `/folder/${folder.id}`;
            const isActive = pathname === href;
            return (
              <div
                key={folder.id}
                className={`group sidebar-link flex items-center rounded-xl ${
                  isActive ? "sidebar-link-active" : "text-[var(--text-sub)]"
                }`}
              >
                <Link
                  href={href}
                  className="flex-1 flex items-center gap-2.5 px-3 py-2.5 text-sm"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v8.25A2.25 2.25 0 0 0 4.5 16.5h15a2.25 2.25 0 0 0 2.25-2.25V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                    />
                  </svg>
                  {folder.name}
                </Link>
                <div className="flex items-center gap-0.5 mr-1.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                  <button
                    onClick={() => setEditingFolder(folder)}
                    className="p-1 rounded-lg hover:text-[var(--accent)] transition-colors"
                    aria-label={`${folder.name} 수정`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setDeletingFolder(folder)}
                    className="p-1 rounded-lg hover:text-red-500 transition-colors"
                    aria-label={`${folder.name} 삭제`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </aside>

      {editingFolder && (
        <EditFolderModal
          folder={editingFolder}
          onClose={() => setEditingFolder(null)}
        />
      )}
      {deletingFolder && (
        <DeleteFolderModal
          folder={deletingFolder}
          onClose={() => setDeletingFolder(null)}
        />
      )}
    </>
  );
}
