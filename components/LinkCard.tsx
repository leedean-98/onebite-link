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
    <article className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white dark:bg-zinc-900 dark:border-zinc-800 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <img
            src={`https://www.google.com/s2/favicons?domain=${hostname}&sz=32`}
            alt=""
            width={16}
            height={16}
            className="rounded shrink-0"
          />
          <span className="text-xs text-zinc-400 truncate">{hostname}</span>
        </div>
        <span className="shrink-0 rounded-full bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 text-xs text-zinc-500 dark:text-zinc-400">
          {folderName}
        </span>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 line-clamp-2 leading-snug">
          {link.title}
        </h3>
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
          {link.description}
        </p>
      </div>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline truncate"
      >
        {link.url}
      </a>
    </article>
  );
}
