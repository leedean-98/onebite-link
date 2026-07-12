"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFolders } from "@/lib/FolderContext";

export default function Sidebar() {
  const pathname = usePathname();
  const { folders } = useFolders();

  return (
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
            <Link
              key={folder.id}
              href={href}
              className={`sidebar-link flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm ${
                isActive ? "sidebar-link-active" : "text-[var(--text-sub)]"
              }`}
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
          );
        })}
      </div>
    </aside>
  );
}
