// Project type definition
export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  url?: string;
  featured: boolean;
}; 