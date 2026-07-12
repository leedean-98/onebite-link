"use client";

import { folders } from "@/lib/data";

export default function NewLinkForm() {
  return (
    <form className="flex flex-col gap-5 w-full max-w-lg">
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="url"
          className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          링크 URL
        </label>
        <input
          id="url"
          type="url"
          placeholder="https://example.com"
          className="rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3.5 py-2.5 text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-400 transition"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="folder"
          className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          폴더
        </label>
        <select
          id="folder"
          defaultValue=""
          className="rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3.5 py-2.5 text-sm text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-400 transition appearance-none cursor-pointer"
        >
          <option value="" disabled>
            폴더를 선택하세요
          </option>
          {folders.map((folder) => (
            <option key={folder.id} value={folder.id}>
              {folder.name}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="mt-2 rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
      >
        저장
      </button>
    </form>
  );
}
