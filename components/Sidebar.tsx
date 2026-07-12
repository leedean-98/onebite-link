"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { folders } from "@/lib/data";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 shrink-0 border-r border-zinc-200 bg-white dark:bg-zinc-950 dark:border-zinc-800 flex flex-col gap-1 p-3">
      <Link
        href="/"
        className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
          pathname === "/"
            ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50"
            : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-50"
        }`}
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
            d="M3.75 6h16.5M3.75 12h16.5M3.75 18h16.5"
          />
        </svg>
        All
      </Link>
      <div className="mt-2 flex flex-col gap-0.5">
        <p className="px-3 py-1 text-xs font-medium text-zinc-400 uppercase tracking-wider">
          폴더
        </p>
        {folders.map((folder) => {
          const href = `/folder/${folder.id}`;
          const isActive = pathname === href;
          return (
            <Link
              key={folder.id}
              href={href}
              className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 font-semibold"
                  : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-50"
              }`}
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
