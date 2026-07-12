import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import LinkGrid from "@/components/LinkGrid";
import { folders, links } from "@/lib/data";

export default async function FolderPage({
  params,
}: {
  params: Promise<{ folderId: string }>;
}) {
  const { folderId } = await params;
  const folder = folders.find((f) => f.id === folderId);
  const count = links.filter((l) => l.folderId === folderId).length;

  return (
    <div className="flex flex-col h-screen bg-[var(--bg)]">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-[var(--text)]">
              {folder?.name ?? "폴더"}
            </h2>
            <p className="mt-1 text-sm text-[var(--text-sub)]">저장된 링크 {count}개</p>
          </div>
          <LinkGrid folderId={folderId} />
        </main>
      </div>
    </div>
  );
}
