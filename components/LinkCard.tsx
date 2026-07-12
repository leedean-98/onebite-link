import { type LinkItem } from "@/lib/data";
import { folders } from "@/lib/data";

export default function LinkCard({ link }: { link: LinkItem }) {
  const folderName = folders.find((f) => f.id === link.folderId)?.name ?? "";

  const hostname = (() => {
    try {
      return new URL(link.url).hostname;
    } catch {
      return link.url;
    }
  })();

  return (
    <article className="link-card flex flex-col rounded-2xl bg-[var(--card-bg)] overflow-hidden">
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
  );
}
