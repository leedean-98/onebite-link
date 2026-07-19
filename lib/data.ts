export type LinkItem = {
  id: number;
  url: string;
  title: string | null;
  description: string | null;
  thumbnail_url: string | null;
  created_at: string;
  folder_id: number | null;
};

export type Folder = {
  id: number;
  name: string;
};
