"use client";

import { useState } from "react";
import { type LinkItem } from "@/lib/data";
import { folders } from "@/lib/data";
import DeleteLinkModal from "./DeleteLinkModal";

export default function LinkCard({ link }: { link: LinkItem }) {
  const [showModal, setShowModal] = useState(false);
  const folderName = folders.find((f) => f.id === link.folderId)?.name ?? "";

  const hostname = (() => {
    try {
      return new URL(link.url).hostname;
    } catch {
      return link.url;
    }
  })();

  return (
    <>
      <article className="link-card group relative flex flex-col rounded-2xl bg-[var(--card-bg)] overflow-hidden">
        <button
          onClick={() => setShowModal(true)}
          className="absolute top-3 right-3 z-10 p-1.5 rounded-xl bg-white/80 backdrop-blur-sm text-[var(--text-sub)] opacity-0 group-hover:opacity-100 hover:text-red-500 hover:bg-white transition-all shadow-sm"
          aria-label="링크 삭제"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
        </button>

        {link.thumbnail && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={link.thumbnail}
            alt=""
            className="w-full h-36 object-cover"
          />
        )}

        <div className="flex flex-col gap-3 p-5">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <img
                src={`https://www.google.com/s2/favicons?domain=${hostname}&sz=32`}
                alt=""
                width={16}
                height={16}
                className="rounded shrink-0"
              />
              <span className="text-xs text-[var(--text-sub)] truncate">{hostname}</span>
            </div>
            <span className="shrink-0 rounded-lg bg-[var(--badge-bg)] px-2.5 py-1 text-xs font-medium text-[var(--accent)]">
              {folderName}
            </span>
          </div>

          <div className="flex-1">
            <h3 className="text-sm font-semibold text-[var(--text)] line-clamp-2 leading-snug">
              {link.title}
            </h3>
            <p className="mt-1.5 text-xs text-[var(--text-sub)] line-clamp-2 leading-relaxed">
              {link.description}
            </p>
          </div>

          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto text-xs font-medium text-[var(--accent)] hover:opacity-75 transition-opacity truncate"
          >
            {link.url}
          </a>
        </div>
      </article>

      {showModal && (
        <DeleteLinkModal
          linkId={link.id}
          linkTitle={link.title}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
