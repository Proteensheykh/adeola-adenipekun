export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  thumbnailUrl: string;
  images: string[];
  production?: string;
  director?: string;
  dop?: string;
}

export interface ProjectList {
  projects: Project[];
}
