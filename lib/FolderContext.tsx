"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Folder } from "./data";
import { createClient } from "@/utils/supabase/client";

type FolderContextType = {
  folders: Folder[];
  addFolder: (name: string) => Promise<void>;
  isAdding: boolean;
  deleteFolder: (id: number) => void;
  updateFolder: (id: number, name: string) => Promise<void>;
};

const FolderContext = createContext<FolderContextType | null>(null);

export function FolderProvider({ children }: { children: React.ReactNode }) {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase
      .from("folders")
      .select("id, name, created_at")
      .order("created_at", { ascending: true })
      .then(({ data }) => {
        if (data) setFolders(data);
      });
  }, []);

  async function addFolder(name: string) {
    if (isAdding) return;
    setIsAdding(true);
    try {
      const supabase = createClient();
      const { data } = await supabase
        .from("folders")
        .insert({ name })
        .select("id, name, created_at")
        .single();
      if (data) setFolders((prev) => [...prev, data]);
    } finally {
      setIsAdding(false);
    }
  }

  function deleteFolder(id: number) {
    setFolders((prev) => prev.filter((f) => f.id !== id));
  }

  async function updateFolder(id: number, name: string) {
    const supabase = createClient();
    await supabase.from("folders").update({ name }).eq("id", id);
    setFolders((prev) => prev.map((f) => (f.id === id ? { ...f, name } : f)));
  }

  return (
    <FolderContext.Provider value={{ folders, addFolder, isAdding, deleteFolder, updateFolder }}>
      {children}
    </FolderContext.Provider>
  );
}

export function useFolders() {
  const ctx = useContext(FolderContext);
  if (!ctx) throw new Error("useFolders must be used within FolderProvider");
  return ctx;
}
