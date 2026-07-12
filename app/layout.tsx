import type { Metadata } from "next";
import "./globals.css";
import { FolderProvider } from "@/lib/FolderContext";
import { LinkProvider } from "@/lib/LinkContext";

export const metadata: Metadata = {
  title: "한입 링크",
  description: "내가 저장한 링크를 한눈에",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full flex flex-col">
        <FolderProvider>
          <LinkProvider>{children}</LinkProvider>
        </FolderProvider>
      </body>
    </html>
  );
}
