"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { LinkItem } from "./data";
import { createClient } from "@/utils/supabase/client";

type LinkContextType = {
  links: LinkItem[];
  addLink: (link: LinkItem) => void;
  deleteLink: (id: number) => Promise<void>;
  updateLink: (id: number, patch: Partial<Pick<LinkItem, "folder_id" | "title" | "description">>) => Promise<void>;
};

const LinkContext = createContext<LinkContextType | null>(null);

export function LinkProvider({ children }: { children: React.ReactNode }) {
  const [links, setLinks] = useState<LinkItem[]>([]);

  useEffect(() => {
    const supabase = createClient();
    supabase
      .from("links")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        if (data) setLinks(data);
      });
  }, []);

  function addLink(link: LinkItem) {
    setLinks((prev) => [link, ...prev]);
  }

  async function deleteLink(id: number) {
    const supabase = createClient();
    await supabase.from("links").delete().eq("id", id);
    setLinks((prev) => prev.filter((l) => l.id !== id));
  }

  async function updateLink(id: number, patch: Partial<Pick<LinkItem, "folder_id" | "title" | "description">>) {
    const supabase = createClient();
    await supabase.from("links").update(patch).eq("id", id);
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
