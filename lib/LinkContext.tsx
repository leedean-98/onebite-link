"use client";

import { createContext, useContext, useState } from "react";
import { links as initialLinks, LinkItem } from "./data";

type LinkContextType = {
  links: LinkItem[];
  addLink: (link: LinkItem) => void;
  deleteLink: (id: string) => void;
  updateLink: (id: string, patch: Partial<Pick<LinkItem, "folderId" | "title" | "description">>) => void;
};

const LinkContext = createContext<LinkContextType | null>(null);

export function LinkProvider({ children }: { children: React.ReactNode }) {
  const [links, setLinks] = useState<LinkItem[]>(initialLinks);

  function addLink(link: LinkItem) {
    setLinks((prev) => [link, ...prev]);
  }

  function deleteLink(id: string) {
    setLinks((prev) => prev.filter((l) => l.id !== id));
  }

  function updateLink(
    id: string,
    patch: Partial<Pick<LinkItem, "folderId" | "title" | "description">>
  ) {
    setLinks((prev) => prev.map((l) => (l.id === id ? { ...l, ...patch } : l)));
  }

  return (
    <LinkContext.Provider value={{ links, addLink, deleteLink, updateLink }}>
      {children}
    </LinkContext.Provider>
  );
}

export function useLinks() {
  const ctx = useContext(LinkContext);
  if (!ctx) throw new Error("useLinks must be used within LinkProvider");
  return ctx;
}
