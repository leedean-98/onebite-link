"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFolders } from "@/lib/FolderContext";
import { useLinks } from "@/lib/LinkContext";
import { createClient } from "@/utils/supabase/client";

export default function NewLinkForm() {
  const router = useRouter();
  const { folders } = useFolders();
  const { addLink } = useLinks();

  const [url, setUrl] = useState("");
  const [folderId, setFolderId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!url || !folderId || loading) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch(`/api/og?url=${encodeURIComponent(url)}`);
      const og = await res.json();

      const supabase = createClient();
      const { data, error: dbError } = await supabase
        .from("links")
        .insert({
          url: og.url || url,
          title: og.title || url,
          description: og.description || null,
          thumbnail_url: og.image || null,
          folder_id: Number(folderId),
        })
        .select()
        .single();

      if (dbError) throw dbError;
      if (data) addLink(data);

      router.push("/");
    } catch {
      setError("링크를 저장하는 중 오류가 발생했습니다.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-lg">
      <div className="flex flex-col gap-2">
        <label htmlFor="url" className="text-sm font-semibold text-[var(--text)]">
          링크 URL
        </label>
        <input
          id="url"
          type="url"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="input-field rounded-xl px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--placeholder)]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="folder" className="text-sm font-semibold text-[var(--text)]">
          폴더
        </label>
        <select
          id="folder"
          value={folderId}
          onChange={(e) => setFolderId(e.target.value)}
          required
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

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={loading || !url || !folderId}
        className="btn-primary mt-2 rounded-xl px-5 py-3 text-sm font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "저장 중..." : "저장"}
      </button>
    </form>
  );
}
