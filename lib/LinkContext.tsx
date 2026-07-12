"use client";

import { createContext, useContext, useState } from "react";
import { links as initialLinks, LinkItem } from "./data";

type LinkContextType = {
  links: LinkItem[];
  addLink: (link: LinkItem) => void;
};

const LinkContext = createContext<LinkContextType | null>(null);

export function LinkProvider({ children }: { children: React.ReactNode }) {
  const [links, setLinks] = useState<LinkItem[]>(initialLinks);

  function addLink(link: LinkItem) {
    setLinks((prev) => [link, ...prev]);
  }

  return (
    <LinkContext.Provider value={{ links, addLink }}>
      {children}
    </LinkContext.Provider>
  );
}

export function useLinks() {
  const ctx = useContext(LinkContext);
  if (!ctx) throw new Error("useLinks must be used within LinkProvider");
  return ctx;
}
