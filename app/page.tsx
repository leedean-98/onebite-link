import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import LinkGrid from "@/components/LinkGrid";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-[var(--bg)]">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-[var(--text)]">전체 링크</h2>
            <p className="mt-1 text-sm text-[var(--text-sub)]">저장된 링크 8개</p>
          </div>
          <LinkGrid />
        </main>
      </div>
    </div>
  );
}
