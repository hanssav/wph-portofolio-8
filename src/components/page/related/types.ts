export interface RelatedProject {
  id: number;
  title: string;
  tech: string;
  description: string;
  features: string[];
  impact: string;
  github?: string;
  liveDemo?: string;
}

export interface ProjectCardProps {
  project: RelatedProject;
  index: number;
}
