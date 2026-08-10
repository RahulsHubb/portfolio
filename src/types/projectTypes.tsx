export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  highlights: string[];
  featured: boolean;
  liveUrl: string;
  githubUrl: string;
}

export interface ProjectCardProps {
  project: Project;
  index: number;
}