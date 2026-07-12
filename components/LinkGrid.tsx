import { links } from "@/lib/data";
import LinkCard from "./LinkCard";

export default function LinkGrid({ folderId }: { folderId?: string }) {
  const filtered = folderId
    ? links.filter((link) => link.folderId === folderId)
    : links;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {filtered.map((link) => (
        <LinkCard key={link.id} link={link} />
      ))}
    </div>
  );
}
