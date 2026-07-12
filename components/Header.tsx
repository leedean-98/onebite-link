import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between h-14 px-6 border-b border-zinc-200 bg-white dark:bg-zinc-950 dark:border-zinc-800 shrink-0">
      <Link
        href="/"
        className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50 hover:opacity-80 transition-opacity"
      >
        한입 링크
      </Link>
      <Link
        href="/new"
        className="flex items-center gap-1.5 rounded-md bg-zinc-900 px-3.5 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
      >
        <span className="text-base leading-none">+</span>
        새 링크
      </Link>
    </header>
  );
}
