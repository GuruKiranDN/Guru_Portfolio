import { Project } from '../types';

export const projects: Project[] = [];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getRelatedProjects = (projectId: string, count: number = 2): Project[] => {
  const currentProject = getProjectById(projectId);
  if (!currentProject) return [];
  
  return projects
    .filter(project => project.id !== projectId && project.category === currentProject.category)
    .slice(0, count);
};

export const getProjectCategories = (): string[] => {
  const categories = new Set(projects.map(project => project.category));
  return Array.from(categories);
};