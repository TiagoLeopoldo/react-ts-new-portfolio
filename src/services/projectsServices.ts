import data from "../data/infos.json";
import type { ProjectsInfo, Project } from "../types/serviceTypes";

export const getProjectsService = async (): Promise<ProjectsInfo> => {
  try {
    const portfolioData = data.portfolio;

    if (!portfolioData) {
      throw new Error("Seção portfolio não encontrada no JSON");
    }

    return portfolioData as ProjectsInfo;
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao buscar dados do portfólio.");
  }
};

export const getProjectBySlugService = async (slug: string): Promise<Project | undefined> => {
  try {
    const portfolioData = data.portfolio as ProjectsInfo;
    return portfolioData.projects.find((project: Project) => project.slug === slug);
  } catch (error) {
    console.error(error);
    throw new Error(`Erro ao buscar projeto com slug: ${slug}`);
  }
};
