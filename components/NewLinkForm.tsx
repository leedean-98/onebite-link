"use client";

import { folders } from "@/lib/data";

export default function NewLinkForm() {
  return (
    <form className="flex flex-col gap-5 w-full max-w-lg">
      <div className="flex flex-col gap-2">
        <label htmlFor="url" className="text-sm font-semibold text-[var(--text)]">
          링크 URL
        </label>
        <input
          id="url"
          type="url"
          placeholder="https://example.com"
          className="input-field rounded-xl px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--placeholder)]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="folder" className="text-sm font-semibold text-[var(--text)]">
          폴더
        </label>
        <select
          id="folder"
          defaultValue=""
          className="input-field rounded-xl px-4 py-3 text-sm text-[var(--text)] appearance-none cursor-pointer"
        >
          <option value="" disabled className="text-[var(--placeholder)]">
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
        className="btn-primary mt-2 rounded-xl px-5 py-3 text-sm font-semibold text-white"
      >
        저장
      </button>
    </form>
  );
}
