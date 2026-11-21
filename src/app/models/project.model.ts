export type ProjectStatus = 'live' | 'in-progress';

export interface Project {
  id: string;
  title: string;
  status: ProjectStatus;
  kind: string;
  description: string;
  tags: string[];
  /** Screenshot path inside /public, e.g. "img/projects/health.webp". Optional until the project is ready. */
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
}
