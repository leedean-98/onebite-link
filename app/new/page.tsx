import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import NewLinkForm from "@/components/NewLinkForm";

export default function NewLinkPage() {
  return (
    <div className="flex flex-col h-screen bg-zinc-50 dark:bg-zinc-950">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              새 링크
            </h2>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              저장할 링크와 폴더를 입력해주세요
            </p>
          </div>
          <NewLinkForm />
        </main>
      </div>
    </div>
  );
}
