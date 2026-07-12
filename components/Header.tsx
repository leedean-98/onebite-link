import Link from "next/link";

export default function Header() {
  return (
    <header className="app-header flex items-center justify-between h-14 px-5 bg-[var(--card-bg)] shrink-0">
      <Link
        href="/"
        className="text-xl font-bold text-[var(--text)] hover:opacity-75 transition-opacity"
      >
        한입 링크
      </Link>
      <Link
        href="/new"
        className="btn-primary flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold text-white"
      >
        <span className="text-base leading-none">+</span>
        새 링크
      </Link>
    </header>
  );
}
