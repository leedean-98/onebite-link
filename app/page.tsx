import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import LinkGrid from "@/components/LinkGrid";
import LinksPageHeader from "@/components/LinksPageHeader";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-[var(--bg)]">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6">
          <LinksPageHeader />
          <LinkGrid />
        </main>
      </div>
    </div>
  );
}
